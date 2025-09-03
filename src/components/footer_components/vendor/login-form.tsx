"use client"

import type React from "react"

import { useState } from "react"
import { Eye, EyeOff, Mail, Lock, ArrowRight } from "lucide-react"
import Link from "next/link"
import axios from "axios"
import { useToast } from "~/hooks/use-toast"

export interface AuthResponse {
  status: string
  message: string
  data: Data
}

export interface Data {
  vendorId: string
  businessName: string
  email: string
  businessType: string
}


export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })
  const { toast } = useToast();
  const [loading, setLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic
    console.log("Login attempt:", formData)
    const data = {
      email: formData.email,
      password: formData.password
    }
    setLoading(true)

    const res = await axios.post<AuthResponse>(`${process.env.NEXT_PUBLIC_API_URL}/vendor/login`, data)
    if(res.data.status === 'success'){
      setLoading(false)
      toast({
        title: "Success",
        description: res.data.message
      })
    }

    if(res.data.status === 'error'){
      setLoading(false)
      toast({
        title: 'Failed',
        description: res.data.message
      })
    }

  }

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-2xl mx-auto mb-4 flex items-center justify-center">
            <Lock className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Vendor Login</h2>
          <p className="text-gray-600 mt-2">Access your vendor dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0085CC] focus:border-transparent"
                placeholder="vendor@example.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0085CC] focus:border-transparent"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleInputChange}
                className="w-4 h-4 text-[#0085CC] border-gray-300 rounded focus:ring-[#0085CC]"
              />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <Link href="/forgot-password" className="text-sm text-[#0085CC] hover:underline">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-[#005380] to-[#0085CC] text-white rounded-lg hover:shadow-lg transition-all duration-300"
          >
            <span>{loading ? 'Signing in...' : "Sign In"}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don&apos;t have an account?{" "}
            <Link href="/footer_pages/register-business" className="text-[#0085CC] hover:underline font-medium">
              Register your business
            </Link>
          </p>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-2">Need help?</p>
            <Link href="mailto:vendorsupport@artstayglobal.com" className="text-sm text-[#0085CC] hover:underline">
              vendorsupport@artstayglobal.com
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
