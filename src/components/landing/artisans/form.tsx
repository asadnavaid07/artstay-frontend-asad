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
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

// Define the validation schema (no dates, add DB-backed filters)
const formSchema = z.object({
  craft: z.string({ required_error: "Please select a craft" }).min(1),
  subCraft: z.string({ required_error: "Please select a sub craft" }).min(1),
  experienceGoals: z.string().optional(), // static dummy; we won't submit it
  experience: z
    .string({ required_error: "Please select craft experience" })
    .min(1, "Please select craft experience"),
  education: z.string().optional(),
  training: z.string().optional(),
});

export const ArtisanForm = () => {
  const { toast } = useToast();
  const router = useRouter();

  // Local state for crafts and sub-crafts
  const [crafts, setCrafts] = useState<Array<{ craftId: string; craftName: string }>>([]);
  const [subCrafts, setSubCrafts] = useState<Array<{ subCraftId: string; subCraftName: string }>>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      craft: "",
      subCraft: "",
      experienceGoals: "",
      experience: "",
      education: "",
      training: "",
    },
  });

  // Fetch crafts on mount
  useEffect(() => {
    const fetchCrafts = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/craft`);
        if (res.data?.status === "success") {
          setCrafts(res.data.data ?? []);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchCrafts();
  }, []);

  // When craft changes, fetch sub crafts
  useEffect(() => {
    const subscription = form.watch(async (values, { name }) => {
      if (name === "craft") {
        try {
          const craftId = values.craft;
          form.setValue("subCraft", "");
          if (!craftId) {
            setSubCrafts([]);
            return;
          }
          const res = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/craft/sub-craft/${craftId}`
          );
          if (res.data?.status === "success") {
            setSubCrafts(res.data.data ?? []);
          }
        } catch (err) {
          console.error(err);
          setSubCrafts([]);
        }
      }
    });
    return () => subscription.unsubscribe?.();
  }, [form]);

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      // Build search params; exclude goals
      const params = new URLSearchParams();
      if (data.craft) params.set("craft", data.craft);
      if (data.subCraft) params.set("subCraft", data.subCraft);
      if (data.experience) params.set("expertise", data.experience);
      if (data.education) params.set("education", data.education);
      if (data.training) params.set("training", data.training);

      router.push(`/artisan?${params.toString()}`);
    } catch (error) {
      console.error(error);
      toast({ title: "Error", description: "Failed to apply filters", variant: "destructive" });
    }
  };

  return (
    <div className="z-[100] mx-auto w-full max-w-xl rounded-lg bg-white shadow-lg">
      <div className="rounded-t-lg bg-primary p-4 text-white border-2 border-white">
        <h2 className="text-center text-xl font-bold">
          Craft School – Vacation with Kashmiri Artisan <br />
          <span className="text-sm italic">Live the craft Learn the legacy </span>
        </h2>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 p-6"
        >
          <FormField
            control={form.control}
            name="craft"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-600">
                  Craft Workshops You&apos;re Interested In
                </FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="– Select Craft –" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent style={{ zIndex: 100 }}>
                    {crafts.map((c) => (
                      <SelectItem key={c.craftId} value={c.craftId}>
                        {c.craftName}
                      </SelectItem>
                    ))}
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
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="– Select Sub Craft –" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent style={{ zIndex: 100 }}>
                    {subCrafts.map((s) => (
                      <SelectItem key={s.subCraftId} value={s.subCraftId}>
                        {s.subCraftName}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="experienceGoals"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-600">Goals</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="– Select Goal –" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent style={{ zIndex: 100 }}>
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
              name="experience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-600">Craft Experience</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="– Select Experience –" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent style={{ zIndex: 100 }}>
                      <SelectItem value="APPRENTICE">Apprentice</SelectItem>
                      <SelectItem value="CRAFTMAN">Craftsman</SelectItem>
                      <SelectItem value="MASTER">Master</SelectItem>
                      <SelectItem value="GRANDMASTER">Grandmaster</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="education"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-600">Education</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="– Select Education –" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent style={{ zIndex: 100 }}>
                      <SelectItem value="FORMAL">Formal</SelectItem>
                      <SelectItem value="NON_FORMAL">Non-Formal</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="training"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-600">Training</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="– Select Training –" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent style={{ zIndex: 100 }}>
                      <SelectItem value="FORMAL">Formal</SelectItem>
                      <SelectItem value="NON_FORMAL">Non-Formal</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Dates removed as requested */}

          <Button type="submit" className="w-full">FIND ARTISAN</Button>
        </form>
      </Form>
    </div>
  );
};