import { ILoginResponse, IuserResponse } from "@/typeScript/interface/auth.interface";
import axiosInstance from "../Axios/Axios";
import { endpoints } from "../EndPoints/endpoints";
import { MutationFunction } from "@tanstack/react-query";

export const Log:MutationFunction<IuserResponse, void> = async (payload) => {
  const res = await axiosInstance.post<ILoginResponse>(
    endpoints.auth.signin,
    payload
  );

  return res.data;
};
