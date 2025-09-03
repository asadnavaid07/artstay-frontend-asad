// "use client";
// import {
//   Form,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormControl,
//   FormMessage,
// } from "~/components/ui/form";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "~/components/ui/select";
// import { Button } from "~/components/ui/button";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";

// // Define the validation schema
// const formSchema = z
//   .object({
//     craft: z
//       .string({
//         required_error: "Please select a craft",
//       })
//       .min(1, "Please select a craft"),

//     subCraft: z
//       .string({
//         required_error: "Please select a sub craft",
//       })
//       .min(1, "Please select a sub craft"),

//     checkIn: z
//       .string({
//         required_error: "Check-in date is required",
//       })
//       .refine((date) => {
//         if (!date) return false;
//         const today = new Date();
//         today.setHours(0, 0, 0, 0);
//         return new Date(date) >= today;
//       }, "Check-in date must be today or later"),

//     checkOut: z
//       .string({
//         required_error: "Check-out date is required",
//       })
//       .refine((date) => {
//         if (!date) return false;
//         const today = new Date();
//         today.setHours(0, 0, 0, 0);
//         return new Date(date) >= today;
//       }, "Check-out date must be today or later"),
//   })
//   .refine(
//     (data) => {
//       return new Date(data.checkOut) > new Date(data.checkIn);
//     },
//     {
//       message: "Check-out date must be after check-in date",
//       path: ["checkOut"],
//     },
//   );

// export const ArtisanForm = () => {
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       craft: "",
//       subCraft: "",
//       checkIn: "",
//       checkOut: "",
//     },
//   });

//   const onSubmit = (data: z.infer<typeof formSchema>) => {
//     console.log("Form submitted:", data);
//   };

//   return (
//     <div className="z-[100] -mt-16 col-span-2 lg:col-span-1 flex max-w-lg flex-col gap-3 rounded-lg bg-white shadow-xl">
//       {/* <div className="rounded-t-lg bg-primary p-3 border-white border-2">
//         <h2 className="text-center font-heading text-xl font-bold text-white">
//           Craft School
//         </h2>
//       </div> */}
//       <div className="rounded-t-lg bg-primary p-3 border-white border-2">
//         <h2 className="text-center font-heading text-xl font-bold text-white">
//           Find an Artisan: Tailored To Your Needs
//         </h2>
//       </div>
//       <Form {...form}>
//         <form
//           onSubmit={form.handleSubmit(onSubmit)}
//           className="grid w-full  space-y-6 p-3"
//         >
//           <FormField
//             control={form.control}
//             name="craft"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel className="text-gray-600">
//                   Craft Workshops You&apos;re Interested In
//                 </FormLabel>
//                 <Select
//                   onValueChange={field.onChange}
//                   defaultValue={field.value}
//                 >
//                   <FormControl>
//                     <SelectTrigger>
//                       <SelectValue placeholder="Boutique Craft" />
//                     </SelectTrigger>
//                   </FormControl>
//                   <SelectContent>
//                     <SelectItem value="boutique">Boutique Craft</SelectItem>
//                   </SelectContent>
//                 </Select>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <FormField
//             control={form.control}
//             name="subCraft"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel className="text-gray-600">
//                   Sub Workshops You&apos;re Interested In
//                 </FormLabel>
//                 <Select
//                   onValueChange={field.onChange}
//                   defaultValue={field.value}
//                 >
//                   <FormControl>
//                     <SelectTrigger>
//                       <SelectValue placeholder="– Select Sub Craft –" />
//                     </SelectTrigger>
//                   </FormControl>
//                   <SelectContent>
//                     <SelectItem value="sub1">Sub Craft 1</SelectItem>
//                     <SelectItem value="sub2">Sub Craft 2</SelectItem>
//                   </SelectContent>
//                 </Select>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <div className="grid grid-cols-2 gap-4">
//             <FormField
//               control={form.control}
//               name="checkIn"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel className="text-gray-600">Check In</FormLabel>
//                   <FormControl>
//                     <input
//                       type="date"
//                       className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="checkOut"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel className="text-gray-600">Check Out</FormLabel>
//                   <FormControl>
//                     <input
//                       type="date"
//                       className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>

//           <Button type="submit">FIND ARTISAN</Button>
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Button } from "~/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { useToast } from "~/hooks/use-toast";

// Define the validation schema
const formSchema = z
  .object({
    craft: z
      .string({
        required_error: "Please select a craft",
      })
      .min(1, "Please select a craft"),
    subCraft: z
      .string({
        required_error: "Please select a sub craft",
      })
      .min(1, "Please select a sub craft"),
    checkIn: z
      .string({
        required_error: "Check-in date is required",
      })
      .refine((date) => {
        if (!date) return false;
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return new Date(date) >= today;
      }, "Check-in date must be today or later"),
    checkOut: z
      .string({
        required_error: "Check-out date is required",
      })
      .refine((date) => {
        if (!date) return false;
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return new Date(date) >= today;
      }, "Check-out date must be today or later"),
    experienceGoals: z
      .string({
        required_error: "Please select an experience goal",
      })
      .min(1, "Please select an experience goal"),
    travelType: z
      .string({
        required_error: "Please select a travel type",
      })
      .min(1, "Please select a travel type"),
  })
  .refine(
    (data) => {
      return new Date(data.checkOut) > new Date(data.checkIn);
    },
    {
      message: "Check-out date must be after check-in date",
      path: ["checkOut"],
    },
  );

export const ArtisanForm = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      craft: "",
      subCraft: "",
      checkIn: "",
      checkOut: "",
      experienceGoals: "",
      travelType: "",
    },
  });


  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      console.log("Form submitted:", data);

      const res = await axios.post<{ status: string; message: string; data?: any }>(
        `${process.env.NEXT_PUBLIC_API_URL}/artisan/find-artisan`,
        data
      );

      if (res.data.status === "success") {
        toast({ title: "Success", description: res.data.message });
      } 

      if (res.data.status === "error") {
        throw new Error(res.data.message); // force catch
      }
      
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        // API responded with error (like 400, 404, 500, etc.)
        const apiMessage = error.response?.data?.message || "API request failed";
        console.error("Axios error:", error.response?.data || error.message);

        toast({
          title: "Error",
          description: apiMessage,
          variant: "destructive",
        });
      } else {
        // Some other unexpected error
        console.error("Unexpected error:", error);
        toast({
          title: "Error",
          description: "Unexpected error occurred",
          variant: "destructive",
        });
      }
    }

  };


  return (
    <div className="z-[100] -mt-16 col-span-2 lg:col-span-1 flex max-w-lg flex-col gap-3 rounded-lg bg-white shadow-xl">
      <div className="rounded-t-lg bg-primary p-3 border-white border-2">
        <h2 className="text-center font-heading text-xl font-bold text-white">
          Craft School – Vacation with Kashmiri Artisan <br />
          <i className="text-sm">Live the craft Learn the legacy </i>
        </h2>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid w-full space-y-6 p-3"
        >
          <FormField
            control={form.control}
            name="craft"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-600">
                  Craft Workshops You&apos;re Interested In
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Boutique Craft" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent style={{
                    zIndex: 100
                  }}>
                    <SelectItem value="boutique">Boutique Craft</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="subCraft"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-600">
                  Sub Workshops You&apos;re Interested In
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}

                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="– Select Sub Craft –" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent style={{
                    zIndex: 100
                  }}>
                    <SelectItem value="sub1">Sub Craft 1</SelectItem>
                    <SelectItem value="sub2">Sub Craft 2</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="experienceGoals"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-600">Goals</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="– Select Goal –" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent style={{
                      zIndex: 100
                    }}>
                      <SelectItem value="learning">Learning a new skill</SelectItem>
                      <SelectItem value="heritage">Preserving ancestral heritage</SelectItem>
                      <SelectItem value="cultural">Cultural immersion</SelectItem>
                      <SelectItem value="research">Academic or design research</SelectItem>
                      <SelectItem value="healing">Healing / slow travel</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="travelType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-600">Travel Alone or in Groups</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="– Select Travel Type –" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent style={{
                      zIndex: 100
                    }}>
                      <SelectItem value="solo">Solo</SelectItem>
                      <SelectItem value="couple">Couple</SelectItem>
                      <SelectItem value="family">Family</SelectItem>
                      <SelectItem value="group">Group</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="checkIn"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-600">Check In</FormLabel>
                  <FormControl>
                    <input
                      type="date"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="checkOut"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-600">Check Out</FormLabel>
                  <FormControl>
                    <input
                      type="date"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" >FIND ARTISAN</Button>
        </form>
      </Form>
    </div>
  );
};