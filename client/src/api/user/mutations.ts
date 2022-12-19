import { useMutation } from "react-query";
import axiosInstance from "../axios";
import { QUERY_KEYS } from "../query_keys";

export const useSaveUserMutation = () => {
  return useMutation(QUERY_KEYS.save_user, (data: { code: string }) =>
    axiosInstance.post("/user/save-user", data)
  );
};

export const useSubscribeUserMutation = () => {
  return useMutation(
    QUERY_KEYS.subscribe,
    (data: { code: string; plan: string }): any =>
      axiosInstance.post("/user/subscribe", data)
  );
};
