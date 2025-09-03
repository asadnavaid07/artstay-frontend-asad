import { TRPCClientError } from "@trpc/client";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";
import { env } from "~/env";
import axios, { AxiosError } from "axios";
import { z } from "zod";

export const ecoTransitRouter = createTRPCRouter({
  getEcoTransitDetail: publicProcedure
    .input(z.object({ transitId: z.string() }))
    .query(async ({ input }) => {
      try {
        const response = await axios.get<ApiResponseProps<EcoTransitDetailProps>>(
          `${env.API_URL}/eco-transit/${input.transitId}`,
        );
        return response.data.data;
      } catch (error) {
        if (error instanceof TRPCClientError) {
          throw new TRPCError({ message: error.message, code: "NOT_FOUND" });
        } else if (error instanceof AxiosError) {
          throw new TRPCError({
            message: (error.response?.data as { errors: string[] })?.errors?.[0] ?? "Unknown error",
            code: "BAD_REQUEST",
          });
        }
        throw new TRPCError({ message: "Something went wrong", code: "INTERNAL_SERVER_ERROR" });
      }
    }),
  getEcoTransitOptions: publicProcedure
    .input(z.object({ transitId: z.string() }))
    .query(async ({ input }) => {
      try {
        const response = await axios.get<ApiResponseProps<EcoTransitOptionProps[]>>(
          `${env.API_URL}/eco-transit/options/${input.transitId}`,
        );
        return response.data.data;
      } catch (error) {
        if (error instanceof TRPCClientError) {
          throw new TRPCError({ message: error.message, code: "NOT_FOUND" });
        } else if (error instanceof AxiosError) {
          throw new TRPCError({
            message: (error.response?.data as { errors: string[] })?.errors?.[0] ?? "Unknown error",
            code: "BAD_REQUEST",
          });
        }
        throw new TRPCError({ message: "Something went wrong", code: "INTERNAL_SERVER_ERROR" });
      }
    }),
  createEcoTransitBooking: publicProcedure
    .input(
      z.object({
        firstName: z.string(),
        lastName: z.string(),
        email: z.string(),
        phone: z.string(),
        numberOfPassengers: z.number(),
        additionalNote: z.string(),
        travelDate: z.string(),
        optionId: z.string(),
        totalAmount: z.number(),
        transitId: z.string(),
        distance: z.number(),
      }),
    )
    .mutation(async ({ input }) => {
      try {
        await axios.post<ApiResponseProps<null>>(
          `${env.API_URL}/eco-transit/booking`,
          input,
        );
      } catch (error) {
        if (error instanceof TRPCClientError) {
          throw new TRPCError({ message: error.message, code: "NOT_FOUND" });
        } else if (error instanceof AxiosError) {
          throw new TRPCError({
            message: (error.response?.data as { errors: string[] })?.errors?.[0] ?? "Unknown error",
            code: "BAD_REQUEST",
          });
        }
        throw new TRPCError({ message: "Something went wrong", code: "INTERNAL_SERVER_ERROR" });
      }
    }),
  getEcoTransitBookings: publicProcedure
    .input(z.object({ transitId: z.string() }))
    .query(async ({ input }) => {
      try {
        const response = await axios.get<ApiResponseProps<EcoTransitBooking[]>>(
          `${env.API_URL}/eco-transit/bookings/${input.transitId}`,
        );
        return response.data.data;
      } catch (error) {
        if (error instanceof TRPCClientError) {
          throw new TRPCError({ message: error.message, code: "NOT_FOUND" });
        } else if (error instanceof AxiosError) {
          throw new TRPCError({
            message: (error.response?.data as { errors: string[] })?.errors?.[0] ?? "Unknown error",
            code: "BAD_REQUEST",
          });
        }
        throw new TRPCError({ message: "Something went wrong", code: "INTERNAL_SERVER_ERROR" });
      }
    }),
  getAllEcoTransits: publicProcedure.query(async () => {
    try {
      console.log("Fetching eco-transits from:", `${env.API_URL}/eco-transit/all`);
      const response = await axios.get<ApiResponseProps<EcoTransitProps[]>>(
        `${env.API_URL}/eco-transit/all`,
      );
      console.log("Eco-transit API response:", response.data);
      return response.data.data;
    } catch (error) {
      console.error("Eco-transit API error:", error);
      if (error instanceof TRPCClientError) {
        throw new TRPCError({ message: error.message, code: "NOT_FOUND" });
      } else if (error instanceof AxiosError) {
        console.error("Axios error details:", {
          status: error.response?.status,
          data: error.response?.data as { errors?: string[] },
          message: error.message
        });
        throw new TRPCError({
          message: (error.response?.data as { errors: string[] })?.errors?.[0] ?? "Unknown error",
          code: "BAD_REQUEST",
        });
      }
      throw new TRPCError({ message: "Something went wrong", code: "INTERNAL_SERVER_ERROR" });
    }
  }),
  getApplicationStatus: publicProcedure.query(async ({ ctx }) => {
    try {
      const response = await axios.get<ApiResponseProps<EcoTransitProps>>(
        `${env.API_URL}/eco-transit/application-status/${ctx.session?.user.id}`,
      );
      return response.data.data;
    } catch (error) {
      if (error instanceof TRPCClientError) {
        throw new TRPCError({ message: error.message, code: "NOT_FOUND" });
      } else if (error instanceof AxiosError) {
        throw new TRPCError({
          message: (error.response?.data as { errors: string[] })?.errors?.[0] ?? "Unknown error",
          code: "BAD_REQUEST",
        });
      }
      throw new TRPCError({ message: "Something went wrong", code: "INTERNAL_SERVER_ERROR" });
    }
  }),
});
