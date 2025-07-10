import { useAuth } from "@/auth/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLogin } from "@/hooks/useLogin";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

import LoginSchema, { type LoginSchemaType } from "@/utils/schemas/AuthTypes";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login, isAuth } = useAuth();
  const { mutateLogin, isPending } = useLogin();
  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth, navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = async (data: LoginSchemaType) => {
    const res = await mutateLogin(data);
    login(res.token);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-200">
      <div className="p-8 flex items-center justify-center min-h-screen">
        <div className="border p-10 rounded-3xl w-full max-w-md bg-white shadow">
          <p className="text-center mb-7 text-5xl font-semibold">Login</p>
          <div className="flex flex-col gap-4">
            <div>
              <Input
                placeholder="username or email"
                type="text"
                {...register("identifier")}
              />
              {errors.identifier && (
                <p className="text-red-500 text-sm">
                  {errors.identifier.message}
                </p>
              )}
            </div>

            <div className="relative">
              <Input
                placeholder="password"
                type={showPassword ? "text" : "password"}
                {...register("password")}
              />
              <Button
                type="button"
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
                className="absolute right-2 top-0 text-black bg-transparent hover:bg-transparent cursor-pointer "
                variant={"ghost"}
              >
                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </Button>
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            <Button
              className="hover:bg-gray-500 cursor-pointer"
              type="submit"
              disabled={isPending}
            >
              {isPending ? "Logging in..." : "Submit"}
            </Button>
          </div>
          <p className="pt-3 text-center">
            Don’t have an account?{" "}
            <NavLink to="/register" className="text-gray-500 underline">
              Register
            </NavLink>
          </p>
        </div>
      </div>
    </form>
  );
}

export default Login;
