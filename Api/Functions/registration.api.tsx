import { IRegisterResponse } from "@/typeScript/interface/auth.interface";
import axiosInstance from "../Axios/Axios";
import { endpoints } from "../EndPoints/endpoints";
import { ListResponse } from "@/typeScript/interface/cms.interface";
import { MutationFunction } from "@tanstack/react-query";

export interface registerProps {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  profile_pic: BinaryType;
}
export interface iregisterProps extends registerProps{
  data:registerProps
}
export const Reg: MutationFunction<iregisterProps> = async (userPayload) => {
  const res = await axiosInstance.post<iregisterProps>(
    endpoints.auth.signup,
    userPayload
  );

  return res.data;
};
