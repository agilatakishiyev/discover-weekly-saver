import { useMutation } from "react-query";
import { ContactForm } from "../../components/Contact";
import axiosInstance from "../axios";
import { QUERY_KEYS } from "../query_keys";

export const useSendMessageMutation = () => {
  return useMutation(QUERY_KEYS.send_message, (message: ContactForm) => {
    return axiosInstance.post("/message", message);
  });
};
