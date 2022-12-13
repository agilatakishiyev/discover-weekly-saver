import { useMutation } from "react-query";
import axiosInstance from "../axios";
import { QUERY_KEYS } from "../query_keys";

export const useSaveUserMutation = () => {
  return useMutation(QUERY_KEYS.save_user, (data: { code: string }) => {
    return axiosInstance.post("/user/save-user", data);
  });
};
