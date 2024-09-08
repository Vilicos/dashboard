import type { BaseResponse } from "@custom-types/index";
import type { AxiosError } from "axios";

export const errorHandler = (error:AxiosError<BaseResponse>):string =>{
    const response = error.response?.data
    if(response) return `${response.message || "Unknown Error"}`
    return `${error.message}`
}