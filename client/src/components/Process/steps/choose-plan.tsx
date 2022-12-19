import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  useSaveUserMutation,
  useSubscribeUserMutation,
} from "../../../api/user/mutations";

export const ChoosePlan = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const saveUserMutation = useSaveUserMutation();
  const subscribeUserMutation = useSubscribeUserMutation();
  const code = new URLSearchParams(location.search).get("code");

  useEffect(() => {
    if (code) {
      saveUserMutation.mutate(
        { code: code as string },
        {
          onSuccess: (res) => {
            localStorage.setItem("code", code);
          },
        }
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubscribe = () => {
    subscribeUserMutation.mutate({ code: code as string, plan: "BASIC" });
    navigate("/process/final");
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="text-2xl font-semibold text-gray-700">Choose your plan</h2>

      <div className="flex flex-col pb-8 mt-8">
        <div className="relative mb-4">
          <input
            className="hidden peer"
            id="radio_1"
            type="radio"
            name="radio"
            checked
            readOnly
          />
          <span className="box-content absolute block w-3 h-3 -translate-y-1/2 bg-white border-8 border-gray-300 rounded-full right-4 top-1/2 peer-checked:border-gray-900"></span>
          <label
            className="flex flex-col p-4 pr-8 border border-gray-300 cursor-pointer rounded-2xl bg-slate-100/80 sm:pr-16"
            htmlFor="radio_1"
          >
            <span className="mb-2 text-lg font-semibold">Basic plan</span>
            <p className="text-sm sm:text-base">
              For now there is only basic plan, which is free
            </p>
          </label>
        </div>
      </div>

      <button
        className="flex items-center justify-center w-full py-3 mx-auto my-2 font-medium text-white bg-gray-900 rounded-md disabled:opacity-50"
        onClick={handleSubscribe}
      >
        Continue
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 ml-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </button>
    </div>
  );
};
