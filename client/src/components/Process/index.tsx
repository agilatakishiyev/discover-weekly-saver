import { useMemo, useState } from "react";
import { ChoosePlan } from "./steps/choose-plan";
import { ConnectSpotify } from "./steps/connect-spotify";
import { EmailConfirmation } from "./steps/email-confirmation";
import { Register } from "./steps/register";

const Step = {
  register: 1,
  "email-confirmation": 2,
  "connect-spotify": 3,
  "choose-plan": 4,
} as const;

export const Process = () => {
  const [currentStep, setCurrentStep] = useState<
    typeof Step[keyof typeof Step]
  >(Step.register);

  const stepColorWidth = useMemo(() => {
    switch (currentStep) {
      case Step.register:
        return "w-0";
      case Step["email-confirmation"]:
        return "w-2/3";
      case Step["connect-spotify"]:
        return "w-3/4";
      case Step["choose-plan"]:
        return "w-full";
    }
  }, [currentStep]);

  return (
    <div className="mx-auto flex flex-col justify-center pt-8 md:justify-start lg:w-[34rem]">
      <div className="flex w-full flex-col rounded-2xl bg-white px-2 sm:px-14">
        <div className="mx-auto w-full max-w-md pb-10 px-8 sm:px-0">
          <div className="relative">
            <div
              className="absolute left-0 top-2 h-0.5 w-full bg-gray-200"
              aria-hidden="true"
            >
              <div
                className={`absolute h-full bg-gray-900 ${stepColorWidth}`}
              ></div>
            </div>
            <ul className="relative flex w-full justify-between">
              {Object.values(Step).map((step) => {
                return (
                  <li className="text-left" key={step}>
                    <span
                      className={`flex h-5 w-5 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ${
                        step === currentStep
                          ? "ring ring-gray-600 ring-offset-2"
                          : ""
                      }`}
                    >
                      {step}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {currentStep === 1 && <Register />}
        {currentStep === 2 && <EmailConfirmation />}
        {currentStep === 3 && <ConnectSpotify />}
        {currentStep === 4 && <ChoosePlan />}

        <button className="my-2 flex items-center justify-center rounded-md bg-gray-900 py-3 font-medium text-white">
          Continue
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-4 h-4 w-4"
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
    </div>
  );
};
