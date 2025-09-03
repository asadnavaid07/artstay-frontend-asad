"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEcoTransit } from "~/hooks/use-eco-transit";
import { Button } from "~/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "~/components/ui/form";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { Loader2, Clock, Bus } from "lucide-react";
import dayjs from "dayjs";
import { useToast } from "~/hooks/use-toast";
import { z } from "zod";
import { api } from "~/trpc/react";

const bookingFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  numberOfPassengers: z.number().min(1, "At least 1 passenger is required"),
  additionalNotes: z.string().optional(),
});

export type BookingFormValues = z.infer<typeof bookingFormSchema>;

export const EcoTransitBookingForm = () => {
  const router = useRouter();
  const { toast } = useToast();
  const { ecoTransitPackage, clearPackage } = useEcoTransit();
  const createBooking = api.ecoTransit.createEcoTransitBooking.useMutation();

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      numberOfPassengers: 1,
      additionalNotes: "",
    },
  });

  if (!ecoTransitPackage.option) {
    return (
      <div className="flex flex-col items-center justify-center py-10">
        <h2 className="text-2xl font-semibold tracking-tight">No Transit Option Selected</h2>
        <p className="mt-2 text-muted-foreground">Please select a transit option to continue booking.</p>
        <Button className="mt-4" onClick={() => router.push("/eco-transit")}>
          Browse Transit Options
        </Button>
      </div>
    );
  }

  const onSubmit = async (data: BookingFormValues) => {
    if (!ecoTransitPackage.option) return;
    try {
      await createBooking.mutateAsync({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        numberOfPassengers: data.numberOfPassengers,
        additionalNote: data.additionalNotes ?? "none",
        travelDate: ecoTransitPackage.date,
        optionId: ecoTransitPackage.id,
        totalAmount: ecoTransitPackage.option.fee * data.numberOfPassengers, // Calculate total amount based on number of passengers
        transitId: ecoTransitPackage.option.transitId ?? "none",
        distance: 15, //hardcoded for now,functionality will be added later
      });
      toast({
        title: "Success",
        description: "Transit booking created successfully",
      });
      clearPackage();
      // router.push("/bookings/confirmation");
    } catch (error) {
      console.log(error)
      toast({
        title: "Error",
        description: "Failed to create booking",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="grid gap-8 md:grid-cols-3">
      <div className="md:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Complete Your Transit Booking</CardTitle>
            <CardDescription>Please fill in your details to book your transit.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First name</FormLabel>
                        <FormControl>
                          <Input placeholder="John" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last name</FormLabel>
                        <FormControl>
                          <Input placeholder="Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="john.doe@example.com" type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="+1 (555) 123-4567" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="numberOfPassengers"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Number of Passengers</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          min="1"
                          max="50"
                          {...field}
                          onChange={(e) => field.onChange(parseInt(e.target.value))}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="additionalNotes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Notes</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Any special requests or notes for your transit..."
                          className="min-h-24"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing
                    </>
                  ) : (
                    "Complete Booking"
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Transit Summary</CardTitle>
            <CardDescription>Details of your selected transit</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg">
              <h3 className="font-medium">{ecoTransitPackage.option.title}</h3>
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Bus className="h-4 w-4" />
                  <span>{ecoTransitPackage.option.operator}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4" />
                  <span>{ecoTransitPackage.option.duration}</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <p className="text-muted-foreground">Travel Date</p>
                <p className="font-medium">{dayjs(ecoTransitPackage.date).format("DD MMM YYYY")}</p>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Price per person</span>
                <span className="font-medium">${ecoTransitPackage.option.fee}</span>
              </div>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between">
                <span className="font-semibold">Total Price</span>
                <span className="font-semibold">
                  ${(ecoTransitPackage.option.fee * (form.watch("numberOfPassengers") ?? 1)).toFixed(2)}
                </span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                {form.watch("numberOfPassengers") ?? 1} passenger(s) × ${ecoTransitPackage.option.fee}
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2 border-t bg-muted/50 px-6 py-4">
            <p className="text-xs text-muted-foreground">
              By completing this booking, you agree to our Terms and Conditions.
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};