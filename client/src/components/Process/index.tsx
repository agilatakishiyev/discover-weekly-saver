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
      <div className="flex flex-col w-full px-2 bg-white rounded-2xl sm:px-14">
        <div className="w-full max-w-md px-8 pb-10 mx-auto sm:px-0">
          <div className="relative">
            <div
              className="absolute left-0 top-2 h-0.5 w-full bg-gray-200"
              aria-hidden="true"
            >
              <div
                className={`absolute h-full bg-gray-900 ${stepColorWidth}`}
              ></div>
            </div>
            <ul className="relative flex justify-between w-full">
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
      </div>
    </div>
  );
};
