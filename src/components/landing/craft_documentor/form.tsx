// // "use client";
// // import {
// //   Form,
// //   FormField,
// //   FormItem,
// //   FormLabel,
// //   FormControl,
// //   FormMessage,
// // } from "~/components/ui/form";
// // import { Button } from "~/components/ui/button";
// // import { Input } from "~/components/ui/input";
// // import { useForm } from "react-hook-form";
// // import { zodResolver } from "@hookform/resolvers/zod";
// // import { z } from "zod";
// // import {
// //   Select,
// //   SelectContent,
// //   SelectItem,
// //   SelectTrigger,
// //   SelectValue,
// // } from "~/components/ui/select";


// // const formSchema = z.object({
// //   carft: z.string().min(1, "Please select a craft"),
// //   location: z.string().min(1, "Please enter a location"),
// //   rating: z.string().min(1, "Please select a craft"),
// // });

// // export const BusinessForm = () => {
// //   const form = useForm<z.infer<typeof formSchema>>({
// //     resolver: zodResolver(formSchema),
// //     defaultValues: {
// //       carft: "",
// //       location: "",
// //       rating: "",
// //     },
// //   });

// //   const onSubmit = (data: z.infer<typeof formSchema>) => {
// //     console.log("Form submitted:", data);
// //   };

// //   return (
// //     <div className="z-[100] -mt-16 mx-auto w-full max-w-xl rounded-lg bg-white shadow-lg">
// //       <div className="rounded-t-lg bg-primary p-4 text-white border-2 border-white">
// //         <h2 className="text-center text-xl font-bold">
// //           Find A Craft Business/Shop
// //         </h2>
// //       </div>

// //       <Form {...form}>
// //         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-6">
// //           <FormField
// //             control={form.control}
// //             name="carft"
// //             render={({ field }) => (
// //               <FormItem>
// //                 <FormLabel className="text-gray-600">
// //                   Select Craft/Product*
// //                 </FormLabel>
// //                 <Select
// //                   onValueChange={field.onChange}
// //                   defaultValue={field.value}
// //                 >
// //                   <FormControl>
// //                     <SelectTrigger>
// //                       <SelectValue placeholder="– Select Craft/Product –" />
// //                     </SelectTrigger>
// //                   </FormControl>
// //                   <SelectContent>
// //                     <SelectItem value="fair">Craft Fairs</SelectItem>
// //                     <SelectItem value="exhibition">
// //                       Craft Exhibitions
// //                     </SelectItem>
// //                     <SelectItem value="museum">Craft Museums</SelectItem>
// //                   </SelectContent>
// //                 </Select>
// //                 <FormMessage />
// //               </FormItem>
// //             )}
// //           />

// //           <FormField
// //             control={form.control}
// //             name="location"
// //             render={({ field }) => (
// //               <FormItem>
// //                 <FormLabel className="text-gray-600">
// //                   Enter your location*
// //                 </FormLabel>
// //                 <FormControl>
// //                   <Input placeholder="Enter your location" {...field} />
// //                 </FormControl>
// //                 <FormMessage />
// //               </FormItem>
// //             )}
// //           />

// //           <FormField
// //             control={form.control}
// //             name="carft"
// //             render={({ field }) => (
// //               <FormItem>
// //                 <FormLabel className="text-gray-600">
// //                   Select Craft/Product*
// //                 </FormLabel>
// //                 <Select
// //                   onValueChange={field.onChange}
// //                   defaultValue={field.value}
// //                 >
// //                   <FormControl>
// //                     <SelectTrigger>
// //                       <SelectValue placeholder="– Select Craft/Product –" />
// //                     </SelectTrigger>
// //                   </FormControl>
// //                   <SelectContent>
// //                     <SelectItem value="all">All</SelectItem>
// //                     <SelectItem value="1">1 Star</SelectItem>
// //                     <SelectItem value="2">2 Star</SelectItem>
// //                     <SelectItem value="3">3 Star</SelectItem>
// //                     <SelectItem value="4">4 Star</SelectItem>
// //                     <SelectItem value="5">5 Star</SelectItem>
// //                   </SelectContent>
// //                 </Select>
// //                 <FormMessage />
// //               </FormItem>
// //             )}
// //           />

// //           <Button type="submit" className="w-full">
// //             FIND NOW
// //           </Button>
// //         </form>
// //       </Form>
// //     </div>
// //   );
// // };
// "use client";
// import {
//   Form,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormControl,
//   FormMessage,
// } from "~/components/ui/form";
// import { Button } from "~/components/ui/button";
// import { Input } from "~/components/ui/input";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "~/components/ui/select";

// const formSchema = z.object({
//   craftArtisan: z.string().min(1, "Craft/Artisan is required"),
//   location: z.string().min(1, "Location is required"),
//   preferredDate: z.string().min(1, "Date is required"),
//   timeSlot: z.string().min(1, "Time slot is required"),
//   service: z.string().min(1, "Service is required"),
//   outputFormat: z.string().min(1, "Output format is required"),
//   shootingDays: z.number().min(1, "At least one shooting day is required"),
// });

// export const BookCraftDocumentationSession = () => {
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       craftArtisan: "",
//       location: "",
//       preferredDate: "",
//       timeSlot: "",
//       service: "",
//       outputFormat: "",
//       shootingDays: 1,
//     },
//   });

//   const onSubmit = (data: z.infer<typeof formSchema>) => {
//     console.log("Form submitted:", data);
//   };

//   return (
//     <div className="z-[100] -mt-16 mx-auto w-full max-w-xl rounded-lg bg-white shadow-lg">
//       <div className="rounded-t-lg bg-primary p-4 text-white border-2 border-white">
//         <h2 className="text-center text-xl font-bold">
//           Book Craft Documentation Session
//         </h2>
//       </div>

//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-6">
//           <div className="grid grid-cols-2 gap-4">
//             <FormField
//               control={form.control}
//               name="craftArtisan"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Select Craft / Artisan</FormLabel>
//                   <Select
//                     onValueChange={field.onChange}
//                     defaultValue={field.value}
//                   >
//                     <FormControl>
//                       <SelectTrigger>
//                         <SelectValue placeholder="– Select Craft / Artisan –" />
//                       </SelectTrigger>
//                     </FormControl>
//                     <SelectContent>
//                       <SelectItem value="weaving">Weaving</SelectItem>
//                       <SelectItem value="pottery">Pottery</SelectItem>
//                       <SelectItem value="woodcarving">Woodcarving</SelectItem>
//                     </SelectContent>
//                   </Select>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="location"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Choose Location</FormLabel>
//                   <Select
//                     onValueChange={field.onChange}
//                     defaultValue={field.value}
//                   >
//                     <FormControl>
//                       <SelectTrigger>
//                         <SelectValue placeholder="– Choose Location –" />
//                       </SelectTrigger>
//                     </FormControl>
//                     <SelectContent>
//                       <SelectItem value="location1">Location 1</SelectItem>
//                       <SelectItem value="location2">Location 2</SelectItem>
//                       <SelectItem value="location3">Location 3</SelectItem>
//                     </SelectContent>
//                   </Select>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             <FormField
//               control={form.control}
//               name="preferredDate"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Preferred Date</FormLabel>
//                   <FormControl>
//                     <Input type="date" {...field} className="w-full" />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="timeSlot"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Time Slot</FormLabel>
//                   <Select
//                     onValueChange={field.onChange}
//                     defaultValue={field.value}
//                   >
//                     <FormControl>
//                       <SelectTrigger>
//                         <SelectValue placeholder="– Select Time Slot –" />
//                       </SelectTrigger>
//                     </FormControl>
//                     <SelectContent>
//                       <SelectItem value="morning">Morning (9:00 AM - 12:00 PM)</SelectItem>
//                       <SelectItem value="afternoon">Afternoon (1:00 PM - 4:00 PM)</SelectItem>
//                     </SelectContent>
//                   </Select>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>

//           <FormField
//             control={form.control}
//             name="service"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Select Service</FormLabel>
//                 <Select
//                   onValueChange={field.onChange}
//                   defaultValue={field.value}
//                 >
//                   <FormControl>
//                     <SelectTrigger>
//                       <SelectValue placeholder="– Select Service –" />
//                     </SelectTrigger>
//                   </FormControl>
//                   <SelectContent>
//                     <SelectItem value="droneVideo">Drone Video</SelectItem>
//                     <SelectItem value="photography">Photography</SelectItem>
//                     <SelectItem value="interview">Interview</SelectItem>
//                     <SelectItem value="audioRecording">Audio Recording</SelectItem>
//                     <SelectItem value="magazineFeature">Magazine Feature</SelectItem>
//                   </SelectContent>
//                 </Select>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <FormField
//             control={form.control}
//             name="outputFormat"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Output Format</FormLabel>
//                 <Select
//                   onValueChange={field.onChange}
//                   defaultValue={field.value}
//                 >
//                   <FormControl>
//                     <SelectTrigger>
//                       <SelectValue placeholder="– Select Output Format –" />
//                     </SelectTrigger>
//                   </FormControl>
//                   <SelectContent>
//                     <SelectItem value="shortFilm">Short Film</SelectItem>
//                     <SelectItem value="rawFootage">Raw Footage</SelectItem>
//                     <SelectItem value="editedAudio">Edited Audio</SelectItem>
//                     <SelectItem value="featureArticle">Feature Article</SelectItem>
//                     <SelectItem value="archiveRecord">Archive Record</SelectItem>
//                   </SelectContent>
//                 </Select>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <FormField
//             control={form.control}
//             name="shootingDays"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Number of Shooting Days</FormLabel>
//                 <FormControl>
//                   <select
//                     className="w-full rounded-md border p-2"
//                     {...field}
//                     onChange={(e) => field.onChange(parseInt(e.target.value))}
//                   >
//                     {[1, 2, 3, 4, 5].map((num) => (
//                       <option key={num} value={num}>
//                         {num}
//                       </option>
//                     ))}
//                   </select>
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <Button type="submit" className="w-full">
//             CHECK AVAILABILITY
//           </Button>
//         </form>
//       </Form>
//     </div>
//   );
// };

"use client";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "~/components/ui/form";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

const formSchema = z.object({
  craftArtisan: z.string().min(1, "Craft/Artisan is required"),
  location: z.string().min(1, "Location is required"),
  preferredDate: z.string().min(1, "Date is required"),
  timeSlot: z.string().min(1, "Time slot is required"),
  service: z.string().min(1, "Service is required"),
  DeliveryMethod: z.string().min(1, "Delivery method is required"),
  outputFormat: z.string().min(1, "Output format is required"),
  shootingDays: z.number().min(1, "At least one shooting day is required"),
});

export const BookCraftDocumentationSession = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      craftArtisan: "",
      location: "",
      preferredDate: "",
      timeSlot: "",
      service: "",
      DeliveryMethod: "",
      outputFormat: "",
      shootingDays: 1,
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className="z-[100] -mt-16 mx-auto w-full max-w-xl rounded-lg bg-white shadow-lg">
      <div className="rounded-t-lg bg-primary p-4 text-white border-2 border-white">
        <h2 className="text-center text-xl font-bold">
          Experience an ArtStay Craft Documentation Journey <br /> <span className="text-sm italic">Not Just a Session, A Journey into Kashmir’s Crafted Soul </span>
        </h2>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-6">
          {/* First row: Select Craft and Choose Location */}
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="craftArtisan"
              render={({ field }) => (
                <FormItem>
                <FormLabel>Booking Type</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="– Booking Type –" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="z-[200]">
                    <SelectItem value="Tourism Experience Documentation">Tourism Experience Documentation</SelectItem>
                    <SelectItem value="Artisan Craft Documentation">Artisan Craft Documentation</SelectItem>
                    
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
                
              )}
            />

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                
              //   <FormItem>
              //   <FormLabel>Number of Shooting Days</FormLabel>
              //   <Select
              //     onValueChange={(value) => field.onChange(parseInt(value))}
              //     value={field.value.toString()}
              //   >
              //     <FormControl>
              //       <SelectTrigger>
              //         <SelectValue placeholder="– Select Number of Days –" />
              //       </SelectTrigger>
              //     </FormControl>
              //     <SelectContent className="z-[200]">
              //       {[1, 2, 3, 4, 5].map((num) => (
              //         <SelectItem key={num} value={num.toString()}>
              //           {num} {num === 1 ? 'Day' : 'Days'}
              //         </SelectItem>
              //       ))}
              //     </SelectContent>
              //   </Select>
              //   <FormMessage />
              // </FormItem>

              <FormItem>
                <FormLabel>Select Services</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="– Select Services –" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="z-[200]">
                    <SelectItem value="Drone Operator">Drone Operator</SelectItem>
                    <SelectItem value="photography">Photography</SelectItem>
                    <SelectItem value="videography">Videography</SelectItem>
                    <SelectItem value="audioRecording">Audio Recording</SelectItem>
                    <SelectItem value="documentary">Documentary</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
              )}
            />
          </div>

          {/* Second row: Preferred Date and Time Slot */}
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="preferredDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred Date</FormLabel>
                  <FormControl>
                    <Input 
                      type="date" 
                      {...field} 
                      className="w-full"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="timeSlot"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Time Slot</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="– Select Time Slot –" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="z-[200]">
                      <SelectItem value="morning">Morning</SelectItem>
                      <SelectItem value="afternoon">Afternoon</SelectItem>
                      <SelectItem value="evening">Evening</SelectItem>
                      <SelectItem value="evening">Full Day</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Third row: Select Services - single dropdown */}
          {/* <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select Services</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="– Select Services –" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="z-[200]">
                    <SelectItem value="droneVideo">Drone Video</SelectItem>
                    <SelectItem value="photography">Photography</SelectItem>
                    <SelectItem value="interview">Interview</SelectItem>
                    <SelectItem value="audioRecording">Audio Recording</SelectItem>
                    <SelectItem value="magazineFeature">Magazine Feature</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          /> */}

          {/* Output Format dropdown */}
          <FormField
            control={form.control}
            name="outputFormat"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Output Format</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="– Select Output Format –" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="z-[200]">
                    <SelectItem value="rawFiles">Raw Files Only </SelectItem>
                    <SelectItem value="editedPhoto">Edited Photo Album</SelectItem>
                    <SelectItem value="shortHighlight">Short Highlight Video</SelectItem>
                    <SelectItem value="fullDocumentary">Full-Length Documentary</SelectItem>
                    <SelectItem value="socialMediaReels">Social Media Reels </SelectItem>
                    <SelectItem value="droneReels">Drone Reel Only </SelectItem>
                    <SelectItem value="audioStory"> Audio Story </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* preffered delivery method dropdown */}
          <FormField
            control={form.control}
            name="DeliveryMethod"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preferred Delivery Method</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="– Select Preferred Delivery Method –" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="z-[200]">
                    <SelectItem value="downloadableLink">Downloadable Link </SelectItem>
                    <SelectItem value="usbDrive">USB Drive</SelectItem>
                    <SelectItem value="cloudFolder">Cloud Folder Access</SelectItem>
                    <SelectItem value="emailAttachment">Email Attachment</SelectItem>
                    <SelectItem value="sharedVia">Shared via WhatsApp / Telegram </SelectItem>
                    
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          /> 

          {/* Submit Button */}
          <Button type="submit" className="w-full">
            CHECK AVAILABILITY
          </Button>
        </form>
      </Form>
    </div>
  );
};
