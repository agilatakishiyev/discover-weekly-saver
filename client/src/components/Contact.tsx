import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import axios from "../helpers/http";
import { ErrorLabel } from "./ErrorLabel";

interface ContactForm {
  fullname: string;
  email: string;
  message: string;
}

const validationSchema = yup
  .object({
    fullname: yup.string().required().min(2),
    email: yup.string().email().required(),
    message: yup.string().required(),
  })
  .required();

export const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: ContactForm) => {
    axios
      .post("/message", data)
      .then(() => {
        alert("Message successfully sent");
      })
      .catch(() => {
        alert("Something went wrong");
      });
  };

  return (
    <div className="container mx-auto my-10">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-bold leading-6 text-gray-900">
              You need more features for your Spotify account?
            </h3>
            <p className="mt-1 text-sm text-gray-700">
              Reach out to me, to make it happen!
            </p>
          </div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid gap-6">
                  <div className="col-span-12">
                    <label
                      className="block text-sm font-medium text-gray-700"
                      htmlFor="fullname"
                    >
                      Fullname
                    </label>
                    <input
                      className="mt-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      id="fullname"
                      type="text"
                      autoComplete="fullname"
                      placeholder="Fullname"
                      {...register("fullname")}
                    />
                    <ErrorLabel>{errors.fullname?.message}</ErrorLabel>
                  </div>

                  <div className="col-span-12">
                    <label
                      className="block text-sm font-medium text-gray-700"
                      htmlFor="email"
                    >
                      Email address
                    </label>
                    <input
                      className="mt-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      id="email"
                      type="text"
                      autoComplete="email"
                      placeholder="Email"
                      {...register("email")}
                    />
                    <ErrorLabel>{errors.email?.message}</ErrorLabel>
                  </div>

                  <div className="col-span-12">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Your message
                    </label>

                    <textarea
                      placeholder="Describe your need"
                      className="mt-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      id="message"
                      {...register("message")}
                    ></textarea>
                    <ErrorLabel>{errors.message?.message}</ErrorLabel>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
