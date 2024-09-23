import axiosInstance from "../Axios/Axios";
import { endpoints } from "../EndPoints/endpoints";

interface LandingPageDetails {
  id: number;
  title: string;
  description: string;
  success: boolean;
  message: string;
  status: number;
  page:number;
  perPage:number
  image:File
}


export const GetLandingPageDetails = async (
  id: string
): Promise<LandingPageDetails> => {
 
    const response = await axiosInstance.get(`${endpoints.cms.details}/${id}`);
  
    return response.data.data
 
};
