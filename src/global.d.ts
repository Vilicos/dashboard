import type { AxiosError } from "axios";
export {};

declare module "@tanstack/react-query" {
  interface Register {
    defaultError: AxiosError;
  }
}
