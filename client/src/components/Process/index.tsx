import { useMemo } from "react";
import { Outlet, useLocation } from "react-router-dom";

export const Process = () => {
  const location = useLocation();

  const stepColorWidth = useMemo(() => {
    switch (location.pathname) {
      case "/process/connect-spotify":
        return "w-0";
      case "/process/choose-plan":
        return "w-2/4";
      case "/process/final":
        return "w-full";
    }
  }, [location]);

  return (
    <div className="mx-auto mb-10 flex flex-col justify-center pt-8 md:justify-start lg:w-[34rem]">
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
              {[
                "/process/connect-spotify",
                "/process/choose-plan",
                "/process/final",
              ].map((step, index) => {
                return (
                  <li className="text-left" key={step}>
                    <span
                      className={`flex h-5 w-5 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ${
                        step === location.pathname
                          ? "ring ring-gray-600 ring-offset-2"
                          : ""
                      }`}
                    >
                      {index + 1}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <Outlet />

        <button
          disabled
          className="w-full my-2 flex items-center justify-center rounded-md bg-gray-900 py-3 font-medium text-white disabled:opacity-75"
        >
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
