import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

interface RegisterForm {
  email: string;
  password: string;
}

const validationSchema = yup
  .object({
    email: yup.string().email().required(),
    password: yup
      .string()
      .matches(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,40})/)
      .required(),
  })
  .required();

export const Register = () => {
  const { register, handleSubmit } = useForm<RegisterForm>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="container mx-auto my-10">
      <div className="shadow overflow-hidden sm:rounded-md px-4 py-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="block mt-1 focus:ring-array-500 focus:border-gray-500 w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              id="email"
              type="text"
              autoComplete="email"
              placeholder="Email"
              {...register("email")}
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="block mt-1 focus:ring-array-500 focus:border-gray-500 w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              id="password"
              type="password"
              autoComplete="password"
              placeholder="Password"
              {...register("password")}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
