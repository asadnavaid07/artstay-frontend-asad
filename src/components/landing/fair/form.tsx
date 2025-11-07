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
import axios from "axios";
import { useToast } from "~/hooks/use-toast";

const formSchema = z
  .object({
    eventLocation: z.string().min(1, "Please select an event location"),
    eventType: z.string().min(1, "Please select an event type"),
    checkIn: z.string().min(1, "Check-in date is required"),
    checkOut: z.string().min(1, "Check-out date is required"),
    adults: z.number().int().min(1, "At least 1 adult"),
    children: z.number().int().min(0, "Children cannot be negative"),
  })
  .refine((data) => new Date(data.checkOut) > new Date(data.checkIn), {
    message: "Check-out date must be after check-in date",
    path: ["checkOut"],
  });

export const FairForm = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      eventLocation: "",
      eventType: "",
      checkIn: "",
      checkOut: "",
      adults: 1,
      children: 0,
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const params = new URLSearchParams();
    if (data.eventLocation) params.set("eventLocation", data.eventLocation);
    if (data.eventType) params.set("eventType", data.eventType);
    if (data.checkIn) params.set("checkIn", data.checkIn);
    if (data.checkOut) params.set("checkOut", data.checkOut);

    window.location.href = `/fair?${params.toString()}`;
  };

  return (
    <div className="z-[100] mx-auto w-full max-w-xl rounded-lg bg-white shadow-lg">
      <div className="rounded-t-lg bg-primary p-4 text-white border-2 border-white">
        <h2 className="text-center text-xl font-bold">
          Craft Fair – Discover, Witness & Celebrate Artisans <br />
<span className="text-sm italic">Not Just an Exhibition, A Cultural Awakening</span>
        </h2>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-6">
          <FormField
            control={form.control}
            name="eventLocation"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-600">Select Event Location*</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="– Select Location –" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="international">International</SelectItem>
                    <SelectItem value="national">National (India)</SelectItem>
                    <SelectItem value="local">Local (Kashmir)</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="eventType"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-600">Event Type Filter*</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="– Select Event Type –" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="fair">Craft Fair</SelectItem>
                    <SelectItem value="exhibition">Craft Exhibition</SelectItem>
                    <SelectItem value="museum">Craft Museum</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />


          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="checkIn"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Check In</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} className="w-full" />
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
                  <FormLabel>Check Out</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} className="w-full" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="adults"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Adult</FormLabel>
                  <FormControl>
                    <select
                      className="w-full rounded-md border p-2"
                      {...field}
                      onChange={(e) => field.onChange(parseInt(e.target.value))}
                    >
                      {[1, 2, 3, 4, 5].map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="children"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Children</FormLabel>
                  <FormControl>
                    <select
                      className="w-full rounded-md border p-2"
                      {...field}
                      onChange={(e) => field.onChange(parseInt(e.target.value))}
                    >
                      {[0, 1, 2, 3, 4, 5].map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" className="w-full">FIND NOW</Button>
        </form>
      </Form>
    </div>
  );
};