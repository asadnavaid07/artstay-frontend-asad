import { TRPCClientError } from "@trpc/client";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";
import { env } from "~/env";
import axios, { AxiosError } from "axios";
import { z } from "zod";


export const fairRouter = createTRPCRouter({
 createFairBooking: publicProcedure
  .input(
    z.object({
      firstName: z.string(),
      lastName: z.string(),
      email: z.string(),
      phone: z.string(),
      numberOfTickets: z.number(),
      ticketType: z.string(),
      additionalNote: z.string(),
      eventDate: z.string(),
      eventId: z.string(),
      fairId: z.string(),
      totalAmount: z.number(),
    }),
  )
  .mutation(async ({ input }) => {
    try {
      await axios.post<ApiResponseProps<null>>(
        `${env.API_URL}/fair/create-booking`,
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
  getApplicationStatus: protectedProcedure.query(async ({ ctx }) => {
    try {
      const response = await axios.get<ApiResponseProps<FairProps>>(
        `${env.API_URL}/fair/application-status/${ctx.session.user.id}`,
      );
      return response.data.data;
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
            typeof (error.response?.data as { errors: string[] }).errors[0] ===
              "string"
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
  getAllFairsWithPagination: publicProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(100),
        cursor: z.number().nullish(),
      }),
    )
    .query(async ({ input }) => {
      try {
        const response = await axios.get<ApiResponseProps<FairPaginationProps>>(
          `${env.API_URL}/fair/all?limit=${input.limit}&cursor=${input.cursor ?? 0}`,
        );
        return response.data.data;
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
  getAllFairs: publicProcedure.query(async () => {
    try {
      const response = await axios.get<ApiResponseProps<FairProps[]>>(
        `${env.API_URL}/fair/all`,
      );
      return response.data.data;
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
            typeof (error.response?.data as { errors: string[] }).errors[0] ===
              "string"
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
  findFairByCriteria: publicProcedure
    .input(
      z.object({
        eventLocation: z.string().optional(),
        eventType: z.string().optional(),
        startDate: z.string().optional(),
        endDate: z.string().optional(),
      })
    )
    .query(async ({ input }) => {
      try {
        const response = await axios.post<
          ApiResponseProps<FairEventProps[]>
        >(`${env.API_URL}/fair/find-fair`, input);
        if (response.data.status === "error") {
          throw new TRPCError({
            message: response.data.message ?? "Unknown error",
            code: "BAD_REQUEST",
          });
        }
        return response.data.data;
      } catch (error) {
        if (error instanceof TRPCClientError) {
          throw new TRPCError({ message: error.message, code: "BAD_REQUEST" });
        } else if (error instanceof AxiosError) {
          const data = error.response?.data as
            | { errors?: string[]; message?: string }
            | undefined;
          const message =
            (Array.isArray(data?.errors) && data?.errors?.[0]) ||
            data?.message ||
            "Unknown error";
          throw new TRPCError({ message, code: "BAD_REQUEST" });
        }
        throw new TRPCError({
          message: "Something went wrong",
          code: "INTERNAL_SERVER_ERROR",
        });
      }
    }),
  getFairDetail: publicProcedure
    .input(z.object({ fairId: z.string() }))
    .query(async ({ input }) => {
      try {
        const response = await axios.get<ApiResponseProps<FairDetailProps>>(
          `${env.API_URL}/fair/${input.fairId}`,
        );
        return response.data.data;
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
});
