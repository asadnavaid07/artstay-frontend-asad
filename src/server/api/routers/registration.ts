import { TRPCClientError } from "@trpc/client";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";
import { env } from "~/env";
import axios, { AxiosError } from "axios";
import { z } from "zod";
import type { ApiResponseProps} from "~/types";

export const registerRouter = createTRPCRouter({
  createArtisan: publicProcedure
    .input(
      z.object({
        firstName: z.string(),
        lastName: z.string(),
        address: z.string(),
        description: z.string(),
        experience: z.string(),
        education: z.string(),
        training: z.string(),
        certificate: z.string(),
        recognition: z.string(),
        craftId: z.string(),
        subCraftId: z.string(),
        email: z.string(),
        password: z.string(),
        dp: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      try {
        await axios.post<ApiResponseProps<null>>(
          `${env.API_URL}/register/artisan`,
          input,
        );
      } catch (error) {
        if (error instanceof TRPCClientError) {
          console.error(error.message);
          throw new TRPCError({
            message: error.message,
            code: "NOT_FOUND",
          });
        } else if (error instanceof AxiosError) {
          const axiosError = error as AxiosError<{ errors: string[] }>;
          console.error(axiosError.response?.data.errors);
          throw new TRPCError({
            message:
              Array.isArray(
                (error.response?.data as { errors: string[] }).errors,
              ) &&
              typeof (error.response?.data as { errors: string[] })
                .errors[0] === "string"
                ? (error.response?.data as { errors: string[] }).errors[0]
                : "Unknown error",
            code: "BAD_REQUEST",
          });
        }
        console.error(error);
        throw new TRPCError({
          message: "Something went wrong",
          code: "INTERNAL_SERVER_ERROR",
        });
      }
    }),

  createSafari: publicProcedure
    .input(
      z.object({
        firstName: z.string(),
        lastName: z.string(),
        address: z.string(),
        description: z.string(),
        email: z.string(),
        password: z.string(),
        dp: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      try {
        await axios.post<ApiResponseProps<null>>(
          `${env.API_URL}/register/safari`,
          input,
        );
      } catch (error) {
        if (error instanceof TRPCClientError) {
          console.error(error.message);
          throw new TRPCError({
            message: error.message,
            code: "NOT_FOUND",
          });
        } else if (error instanceof AxiosError) {
          const axiosError = error as AxiosError<{ errors: string[] }>;
          console.error(axiosError.response?.data.errors);
          throw new TRPCError({
            message:
              Array.isArray(
                (error.response?.data as { errors: string[] }).errors,
              ) &&
              typeof (error.response?.data as { errors: string[] })
                .errors[0] === "string"
                ? (error.response?.data as { errors: string[] }).errors[0]
                : "Unknown error",
            code: "BAD_REQUEST",
          });
        }
        console.error(error);
        throw new TRPCError({
          message: "Something went wrong",
          code: "INTERNAL_SERVER_ERROR",
        });
      }
    }),

  createFair: publicProcedure
    .input(
      z.object({
        firstName: z.string(),
        lastName: z.string(),
        address: z.string(),
        description: z.string(),
        email: z.string(),
        password: z.string(),
        dp: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      try {
        await axios.post<ApiResponseProps<null>>(
          `${env.API_URL}/register/fair`,
          input,
        );
      } catch (error) {
        if (error instanceof TRPCClientError) {
          console.error(error.message);
          throw new TRPCError({
            message: error.message,
            code: "NOT_FOUND",
          });
        } else if (error instanceof AxiosError) {
          const axiosError = error as AxiosError<{ errors: string[] }>;
          console.error(axiosError.response?.data.errors);
          throw new TRPCError({
            message:
              Array.isArray(
                (error.response?.data as { errors: string[] }).errors,
              ) &&
              typeof (error.response?.data as { errors: string[] })
                .errors[0] === "string"
                ? (error.response?.data as { errors: string[] }).errors[0]
                : "Unknown error",
            code: "BAD_REQUEST",
          });
        }
        console.error(error);
        throw new TRPCError({
          message: "Something went wrong",
          code: "INTERNAL_SERVER_ERROR",
        });
      }
    }),
  createShop: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string(),
        businessName: z.string(),
        shopName: z.string(),
        vendorType: z.string(),
        address: z.string(),
        city: z.string(),
        state: z.string(),
        country: z.string(),
        zipCode: z.string(),
        ownerName: z.string(),
        phoneNumber: z.string(),
        website: z.string(),
        description: z.string(),
        productCategories: z.array(z.string()),
        isGICertified: z.boolean(),
        isHandmade: z.string(),
        pickupOptions: z.array(z.string()),
        deliveryTime: z.string(),
        deliveryFee: z.string(),
        pricingStructure: z.string(),
        orderProcessing: z.string(),
        paymentMethods: z.array(z.string()),
        returnPolicy: z.string(),
        stockAvailability: z.string(),
        offersCustomization: z.boolean(),
        packagingType: z.string(),
        shopTiming: z.string(),
        workingDays: z.array(z.string()),
        agreedToTerms: z.boolean(),
        agreedToBlacklist: z.boolean(),
        dp: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      try {
        await axios.post<ApiResponseProps<null>>(
          `${env.API_URL}/register/shop`,
          input,
        );
      } catch (error) {
        if (error instanceof TRPCClientError) {
          console.error(error.message);
          throw new TRPCError({
            message: error.message,
            code: "NOT_FOUND",
          });
        } else if (error instanceof AxiosError) {
          const axiosError = error as AxiosError<{ errors: string[] }>;
          console.error(axiosError.response?.data.errors);
          throw new TRPCError({
            message:
              Array.isArray(
                (error.response?.data as { errors: string[] }).errors,
              ) &&
              typeof (error.response?.data as { errors: string[] })
                .errors[0] === "string"
                ? (error.response?.data as { errors: string[] }).errors[0]
                : "Unknown error",
            code: "BAD_REQUEST",
          });
        }
        console.error(error);
        throw new TRPCError({
          message: "Something went wrong",
          code: "INTERNAL_SERVER_ERROR",
        });
      }
    }),

  createRestaurant: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string(),
        name: z.string(),
        description: z.string(),
        location: z.string(),
        cuisine: z.array(z.string()),
        priceRange: z.string(),
        image: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      try {
        await axios.post<ApiResponseProps<null>>(
          `${env.API_URL}/register/dining`,
          input,
        );
      } catch (error) {
        if (error instanceof TRPCClientError) {
          console.error(error.message);
          throw new TRPCError({
            message: error.message,
            code: "NOT_FOUND",
          });
        } else if (error instanceof AxiosError) {
          const axiosError = error as AxiosError<{ errors: string[] }>;
          console.error(axiosError.response?.data.errors);
          throw new TRPCError({
            message:
              Array.isArray(
                (error.response?.data as { errors: string[] }).errors,
              ) &&
              typeof (error.response?.data as { errors: string[] })
                .errors[0] === "string"
                ? (error.response?.data as { errors: string[] }).errors[0]
                : "Unknown error",
            code: "BAD_REQUEST",
          });
        }
        console.error(error);
        throw new TRPCError({
          message: "Something went wrong",
          code: "INTERNAL_SERVER_ERROR",
        });
      }
    }),

  createTravelPlaner: publicProcedure
    .input(
      z.object({
        name: z.string(),
        description: z.string(),
        location: z.string(),
        priceRange: z.string(),
        language: z.array(z.string()),
        speciality: z.array(z.string()),
        email: z.string().email(),
        password: z.string(),
        dp: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      try {
        await axios.post<ApiResponseProps<null>>(
          `${env.API_URL}/register/travel`,
          input,
        );
      } catch (error) {
        if (error instanceof TRPCClientError) {
          console.error(error.message);
          throw new TRPCError({
            message: error.message,
            code: "NOT_FOUND",
          });
        } else if (error instanceof AxiosError) {
          const axiosError = error as AxiosError<{ errors: string[] }>;
          console.error(axiosError.response?.data.errors);
          throw new TRPCError({
            message:
              Array.isArray(
                (error.response?.data as { errors: string[] }).errors,
              ) &&
              typeof (error.response?.data as { errors: string[] })
                .errors[0] === "string"
                ? (error.response?.data as { errors: string[] }).errors[0]
                : "Unknown error",
            code: "BAD_REQUEST",
          });
        }
        console.error(error);
        throw new TRPCError({
          message: "Something went wrong",
          code: "INTERNAL_SERVER_ERROR",
        });
      }
    }),

  createLanguageService: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string(),
        firstName: z.string(),
        lastName: z.string(),
        profileName: z.string(),
        location: z.string(),
        description: z.string(),
        experience: z.string(),
        qualification: z.string(),
        languages: z.array(z.string()),
        specialization: z.array(z.string()),
        serviceMode: z.array(z.string()),
        certification: z.array(z.string()),
        availability: z.array(z.string()),
        hourlyRate: z.number(),
        minBookingHours: z.number(),
        maxBookingHours: z.number(),
        startTime: z.string(),
        endTime: z.string(),
        profileImage: z.string(),
        portfolio: z.array(z.string()),
      }),
    )
    .mutation(async ({ input }) => {
      try {
        await axios.post<ApiResponseProps<null>>(
          `${env.API_URL}/register/language`,
          input,
        );
      } catch (error) {
        if (error instanceof TRPCClientError) {
          console.error(error.message);
          throw new TRPCError({
            message: error.message,
            code: "NOT_FOUND",
          });
        } else if (error instanceof AxiosError) {
          const axiosError = error as AxiosError<{ errors: string[] }>;
          console.error(axiosError.response?.data.errors);
          throw new TRPCError({
            message:
              Array.isArray(
                (error.response?.data as { errors: string[] })?.errors,
              ) &&
              typeof (error.response?.data as { errors: string[] })
                .errors[0] === "string"
                ? (error.response?.data as { errors: string[] }).errors[0]
                : "Unknown error",
            code: "BAD_REQUEST",
          });
        }
        console.error(error);
        throw new TRPCError({
          message: "Something went wrong while creating language service",
          code: "INTERNAL_SERVER_ERROR",
        });
      }
    }),

  createHotelService: publicProcedure
  .input(
    z.object({
      email: z.string().email(),
      password: z.string(),
      firstName: z.string(),
      lastName: z.string(),
      hotelName: z.string(),
      address: z.string(),
      description: z.string(),
      phone: z.string(),
      longitude: z.string().optional(),
      latitude: z.string().optional(),
      checkIn: z.string(),
      checkOut: z.string(),
    }),
  )
  .mutation(async ({ input }) => {
    try {
      await axios.post<ApiResponseProps<null>>(
        `${env.API_URL}/register/hotel`,
        input,
      );
    } catch (error) {
      if (error instanceof TRPCClientError) {
        console.error(error.message);
        throw new TRPCError({
          message: error.message,
          code: "NOT_FOUND",
        });
      } else if (error instanceof AxiosError) {
        const axiosError = error as AxiosError<{ errors: string[] }>;
        console.error(axiosError.response?.data.errors);
        throw new TRPCError({
          message:
            Array.isArray(
              (error.response?.data as { errors: string[] })?.errors,
            ) &&
            typeof (error.response?.data as { errors: string[] })
              .errors[0] === "string"
              ? (error.response?.data as { errors: string[] }).errors[0]
              : "Unknown error",
          code: "BAD_REQUEST",
        });
      }
      console.error(error);
      throw new TRPCError({
        message: "Something went wrong while creating hotel service",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  }),

  createEcoTransit: publicProcedure
    .input(
      z.object({
        name: z.string().min(1, "Name is required"),
        address: z.string().min(1, "Address is required"),
        description: z.string().min(1, "Description is required"),
        dp: z.string().min(1, "Display picture is required"),
        email: z.string().email("Invalid email address"),
        password: z.string().min(8, "Password must be at least 8 characters"),
      }),
    )
    .mutation(async ({ input }) => {
      try {
        const response = await axios.post<ApiResponseProps<null>>(
          `${env.API_URL}/register/eco-transit`,
          input,
        );
        
        // Check if the response indicates an error
        if (response.data.status === "error") {
          throw new TRPCError({
            message: response.data.message || "Failed to create eco transit",
            code: "BAD_REQUEST",
          });
        }
      } catch (error) {
        if (error instanceof TRPCError) {
          throw error;
        }
        if (error instanceof TRPCClientError) {
          console.error(error.message);
          throw new TRPCError({
            message: error.message,
            code: "NOT_FOUND",
          });
        } else if (error instanceof AxiosError) {
          const responseData = error.response?.data as ApiResponseProps<null> | { errors: string[] };
          
          // Check if it's the expected error format from our backend
          if (responseData && "status" in responseData && responseData.status === "error") {
            throw new TRPCError({
              message: responseData.message || "Failed to create eco transit",
              code: "BAD_REQUEST",
            });
          }
          
          // Handle other error formats
          const axiosError = error as AxiosError<{ errors: string[] }>;
          console.error(axiosError.response?.data.errors);
          throw new TRPCError({
            message:
              Array.isArray(
                (error.response?.data as { errors: string[] }).errors,
              ) &&
              typeof (error.response?.data as { errors: string[] })
                .errors[0] === "string"
                ? (error.response?.data as { errors: string[] }).errors[0]
                : "Unknown error",
            code: "BAD_REQUEST",
          });
        }
        console.error(error);
        throw new TRPCError({
          message: "Something went wrong",
          code: "INTERNAL_SERVER_ERROR",
        });
      }
    }),
});
