"use client"
import type React from "react"
import { useState } from "react"
import { Upload, Award, ImageIcon, User, Building, AlertCircle, CheckCircle, Mail } from "lucide-react"
import axios from "axios"
import { useToast } from "~/hooks/use-toast"


export interface IFormResponse {
  status: string
  message: string
  data: Data
}

export interface Data {
  businessName: string
  contactPerson: string
  email: string
  password: string
  phoneNumber: string
  businessType: string
  location: string
  yearsOfExperience: number
  businessDescription: string
  idCard: string
  giCertificate: string
  sampleProductPhoto: string
  businessRegistration: string
}



interface FormData {
  businessName: string
  contactPerson: string
  email: string
  phone: string
  password: string
  businessType: string
  location: string
  experience: string
  description: string
}
type ValidationErrors = Record<string, string>
export default function RegistrationForm() {
  const [formData, setFormData] = useState<FormData>({
    businessName: "",
    contactPerson: "",
    email: "",
    phone: "",
    password: "",
    businessType: "",
    location: "",
    experience: "",
    description: "",
  })
  const [currentStep, setCurrentStep] = useState(1)
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([])
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const { toast } = useToast();

  const businessTypes = [
    "Kashmiri Artisan Collective",
    "Handicraft Trader/Exporter",
    "Artisan NGO",
    "Women-led Self-help Group",
    "Boutique Workshop",
    "Individual Artisan",
  ]

  const requiredDocuments = [
    { name: "Aadhar Card or Passport", icon: <User className="w-5 h-5" />, required: true },
    { name: "GI Certificate", icon: <Award className="w-5 h-5" />, required: false },
    { name: "Sample Product Photos", icon: <ImageIcon className="w-5 h-5" />, required: true },
    { name: "Business Registration", icon: <Building className="w-5 h-5" />, required: false },
  ]

  const validateStep1 = (): boolean => {
    const errors: ValidationErrors = {}

    if (!formData.businessName.trim()) {
      errors.businessName = "Business name is required"
    }

    if (!formData.contactPerson.trim()) {
      errors.contactPerson = "Contact person is required"
    }

    if (!formData.email.trim()) {
      errors.email = "Email address is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address"
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required"
    } else if (!/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
      errors.phone = "Please enter a valid phone number"
    }

    if (!formData.password || formData.password.trim().length === 0) {
      errors.password = "Password is required"
    } else if (formData.password.length < 8) {
      errors.password = "Password must be at least 8 characters"
    }

    if (!formData.businessType) {
      errors.businessType = "Please select a business type"
    }

    if (!formData.location.trim()) {
      errors.location = "Location is required"
    }

    if (!formData.description.trim()) {
      errors.description = "Business description is required"
    } else if (formData.description.trim().length < 50) {
      errors.description = "Description must be at least 50 characters long"
    }

    setValidationErrors(errors)
    return Object.keys(errors).length === 0
  }

  const validateStep2 = (): boolean => {
    const requiredDocs = requiredDocuments.filter(doc => doc.required)
    const uploadedRequiredDocs = requiredDocs.filter(doc => uploadedFiles.includes(doc.name))

    if (uploadedRequiredDocs.length < requiredDocs.length) {
      setValidationErrors({
        documents: "Please upload all required documents"
      })
      return false
    }

    setValidationErrors({})
    return true
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    // Clear validation error for this field
    if (validationErrors[name]) {
      setValidationErrors({
        ...validationErrors,
        [name]: ""
      })
    }
  }

  const handleFileUpload = (fileName: string) => {
    if (!uploadedFiles.includes(fileName)) {
      setUploadedFiles([...uploadedFiles, fileName])
      // Clear document validation error
      if (validationErrors.documents) {
        setValidationErrors({
          ...validationErrors,
          documents: ""
        })
      }
    }
  }

  const handleNextStep = () => {
    if (currentStep === 1 && validateStep1()) {
      setCurrentStep(2)
    } else if (currentStep === 2 && validateStep2()) {
      setCurrentStep(3)
    }
  }

  const sendEmail = async (applicationData: FormData, uploadedDocs: string[]) => {
    // Create email content
    const emailSubject = `New Artisan Registration Application - ${applicationData.businessName}`
    const emailBody = `
New Artisan Registration Application Received

Business Details:
- Business Name: ${applicationData.businessName}
- Contact Person: ${applicationData.contactPerson}
- Email: ${applicationData.email}
- Phone: ${applicationData.phone}
- Business Type: ${applicationData.businessType}
- Location: ${applicationData.location}
- Years of Experience: ${applicationData.experience || 'Not specified'}

Business Description:
${applicationData.description}

Uploaded Documents:
${uploadedDocs.map(doc => `- ${doc}`).join('\n')}

Application Date: ${new Date().toLocaleString()}

Please review this application within 3-5 working days.
    `

    // Using mailto (basic email functionality)
    const mailtoUrl = `mailto:support@kashmirartstay.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`

    // For a real implementation, you would use an email service like EmailJS, Nodemailer, or a backend API
    // Here's a placeholder for a more robust email service:

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000))

      // In a real app, you would make an API call like:
      // const response = await fetch('/api/send-email', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ to: 'support@kashmirartstay.com', subject: emailSubject, body: emailBody })
      // })

      // For now, open default email client
      window.open(mailtoUrl)

      return true
    } catch (error) {
      console.error('Email sending failed:', error)
      return false
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateStep1() || !validateStep2()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Send email with application data
      const emailSent = await sendEmail(formData, uploadedFiles)

      const data = {
        businessName: formData.businessName,
        contactPerson: formData.contactPerson,
        email: formData.email,
        password: formData.password,
        phoneNumber: formData.phone,
        businessType: formData.businessType,
        location: formData.location,
        yearsOfExperience: formData.experience,
        businessDescription: formData.description,
        idCard: uploadedFiles.find(f => f.toLowerCase().includes("aadhar") || f.toLowerCase().includes("passport")) || "",
        giCertificate: uploadedFiles.find(f => f.toLowerCase().includes("gi certificate")) || "",
        sampleProductPhoto: uploadedFiles.find(f => f.toLowerCase().includes("sample product")) || "",
        businessRegistration: uploadedFiles.find(f => f.toLowerCase().includes("business registration")) || "",
        applicationDate: new Date().toISOString()
      }

      const res = await axios.post<IFormResponse>(`${process.env.NEXT_PUBLIC_API_URL}/vendor/register`, data)
      if (res.data.status === "success") {
        toast({
          title: "Success",
          description: res.data.message
        })
      }
      if (res.data.status === "error") {
        toast({
          title: "Failed",
          description: res.data.message
        })
      }



      if (emailSent) {
        setSubmitSuccess(true)


        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            businessName: "",
            contactPerson: "",
            email: "",
            phone: "",
            password: "",
            businessType: "",
            location: "",
            experience: "",
            description: "",
          })
          setUploadedFiles([])
          setCurrentStep(1)
          setSubmitSuccess(false)
        }, 5000)
      } else {
        throw new Error("Failed to send email")
      }
    } catch (error) {
      console.error("Submission failed:", error)
      setValidationErrors({
        submit: "Failed to submit application. Please try again."
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Success message component
  if (submitSuccess) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 text-center">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Application Submitted Successfully!</h2>
          <p className="text-gray-600 mb-6">
            Your artisan registration application has been submitted and emailed to our team.
            You will receive a confirmation email shortly.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-semibold text-green-800 mb-2">What&apos;s Next?</h4>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• Our team will review your application within 3-5 working days</li>
              <li>• You&apos;ll receive an email confirmation once approved</li>
              <li>• Access to your vendor dashboard will be provided upon approval</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex items-center">
              <div
                className={`
                w-10 h-10 rounded-full flex items-center justify-center font-semibold
                ${currentStep >= step ? "bg-[#005380] text-white" : "bg-gray-200 text-gray-600"}
              `}
              >
                {step}
              </div>
              {step < 3 && (
                <div
                  className={`
                  w-24 h-1 mx-4
                  ${currentStep > step ? "bg-[#005380]" : "bg-gray-200"}
                `}
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>Business Details</span>
          <span>Document Upload</span>
          <span>Review & Submit</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Step 1: Business Details */}
        {currentStep === 1 && (
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Business Information</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Business Name *</label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0085CC] focus:border-transparent ${validationErrors.businessName ? 'border-red-500' : 'border-gray-300'
                    }`}
                  required
                />
                {validationErrors.businessName && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {validationErrors.businessName}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Contact Person *</label>
                <input
                  type="text"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0085CC] focus:border-transparent ${validationErrors.contactPerson ? 'border-red-500' : 'border-gray-300'
                    }`}
                  required
                />
                {validationErrors.contactPerson && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {validationErrors.contactPerson}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0085CC] focus:border-transparent ${validationErrors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                  required
                />
                {validationErrors.email && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {validationErrors.email}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password *</label>
                <input
                  type="text"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0085CC] focus:border-transparent ${validationErrors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                  required
                />
                {validationErrors.password && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {validationErrors.password}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0085CC] focus:border-transparent ${validationErrors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                  required
                />
                {validationErrors.phone && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {validationErrors.phone}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Business Type *</label>
                <select
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0085CC] focus:border-transparent ${validationErrors.businessType ? 'border-red-500' : 'border-gray-300'
                    }`}
                  required
                >
                  <option value="">Select Business Type</option>
                  {businessTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {validationErrors.businessType && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {validationErrors.businessType}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-6">
              <label className="block w-full text-sm font-medium text-gray-700 mb-2">Location *</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="City, State"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0085CC] focus:border-transparent ${validationErrors.location ? 'border-red-500' : 'border-gray-300'
                  }`}
                required
              />
              {validationErrors.location && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {validationErrors.location}
                </p>
              )}
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Years of Experience</label>
              <input
                type="text"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                placeholder="e.g., 5 years"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0085CC] focus:border-transparent"
              />
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Business Description *</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={4}
                placeholder="Tell us about your craft, specialties, and what makes your business unique... (minimum 50 characters)"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0085CC] focus:border-transparent ${validationErrors.description ? 'border-red-500' : 'border-gray-300'
                  }`}
                required
              />
              <div className="flex justify-between items-center mt-1">
                {validationErrors.description && (
                  <p className="text-red-500 text-sm flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {validationErrors.description}
                  </p>
                )}
                <p className="text-sm text-gray-500 ml-auto">
                  {formData.description.length}/50 characters minimum
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Document Upload */}
        {currentStep === 2 && (
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Required Documents</h3>

            {validationErrors.documents && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <p className="text-red-700 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  {validationErrors.documents}
                </p>
              </div>
            )}

            <div className="space-y-6">
              {requiredDocuments.map((doc, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-[#005380]/10 rounded-lg">{doc.icon}</div>
                      <div>
                        <h4 className="font-semibold text-gray-800">{doc.name}</h4>
                        <p className={`text-sm ${doc.required ? 'text-red-600 font-medium' : 'text-gray-600'}`}>
                          {doc.required ? "Required" : "Optional"}
                        </p>
                      </div>
                    </div>
                    {uploadedFiles.includes(doc.name) && (
                      <div className="text-green-600 font-medium flex items-center gap-1">
                        <CheckCircle className="w-4 h-4" />
                        Uploaded
                      </div>
                    )}
                  </div>

                  <div className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${uploadedFiles.includes(doc.name)
                    ? 'border-green-300 bg-green-50'
                    : 'border-gray-300 hover:border-[#0085CC]'
                    }`}>
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600 mb-2">
                      Drag and drop your file here, or{" "}
                      <button
                        type="button"
                        onClick={() => handleFileUpload(doc.name)}
                        className="text-[#0085CC] hover:underline"
                      >
                        browse
                      </button>
                    </p>
                    <p className="text-xs text-gray-500">Supported formats: PDF, JPG, PNG (Max 5MB)</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Review */}
        {currentStep === 3 && (
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Review Your Application</h3>

            <div className="space-y-4 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <span className="font-medium text-gray-700">Business Name:</span>
                  <p className="text-gray-600">{formData.businessName}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Contact Person:</span>
                  <p className="text-gray-600">{formData.contactPerson}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Email:</span>
                  <p className="text-gray-600">{formData.email}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Business Type:</span>
                  <p className="text-gray-600">{formData.businessType}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Location:</span>
                  <p className="text-gray-600">{formData.location}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Experience:</span>
                  <p className="text-gray-600">{formData.experience || 'Not specified'}</p>
                </div>
              </div>

              <div>
                <span className="font-medium text-gray-700">Business Description:</span>
                <p className="text-gray-600 mt-1">{formData.description}</p>
              </div>

              <div>
                <span className="font-medium text-gray-700">Uploaded Documents:</span>
                <ul className="text-gray-600 mt-1">
                  {uploadedFiles.map((file, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      {file}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {validationErrors.submit && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <p className="text-red-700 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  {validationErrors.submit}
                </p>
              </div>
            )}

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Email Notification:</h4>
                  <p className="text-sm text-blue-700 mb-2">
                    Your application will be automatically emailed to <strong>support@kashmirartstay.com</strong> upon submission.
                  </p>
                  <h4 className="font-semibold text-blue-800 mb-2">Next Steps:</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Our team will review your application within 3-5 working days</li>
                    <li>• You&apos;ll receive an email confirmation once approved</li>
                    <li>• Access to your vendor dashboard will be provided upon approval</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          {currentStep > 1 && (
            <button
              type="button"
              onClick={() => setCurrentStep(currentStep - 1)}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              disabled={isSubmitting}
            >
              Previous
            </button>
          )}

          <div className="ml-auto">
            {currentStep < 3 ? (
              <button
                type="button"
                onClick={handleNextStep}
                className="px-6 py-3 bg-[#005380] text-white rounded-lg hover:bg-[#004060] transition-colors"
              >
                Next Step
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-gradient-to-r from-[#005380] to-[#0085CC] text-white rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Submitting...
                  </>
                ) : (
                  'Submit Application'
                )}
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  )
}