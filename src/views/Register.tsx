import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRegister } from "@/hooks/useRegist";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

function Register() {
  const { form, isPending, onSubmit } = useRegister();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <main className="bg-gray-200">
      <div
        className=" p-8 flex items-center justify-center min-h-screen "
        {...form}
      >
        <div className="border p-10 rounded-3xl w-1/3 bg-white shadow-">
          <p className="text-center mb-7 text-5xl">Register</p>

          <form
            onSubmit={form.handleSubmit(onSubmit, (error) => {
              console.error("form validation eror:", error);
            })}
          >
            <div className="flex flex-col gap-4">
              <Input
                placeholder="fullname"
                type="text"
                {...form.register("fullName")}
              />
              <Input
                placeholder="username"
                type="text"
                {...form.register("username")}
              />
              <Input
                placeholder="email"
                type="text"
                {...form.register("email")}
              />
              <div className="relative">
                <Input
                  placeholder="password"
                  type={showPassword ? "text" : "password"}
                  {...form.register("password")}
                />{" "}
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
              </div>
              <div className="relative">
                <Input
                  placeholder="confirm password"
                  type={showConfirmPassword ? "text" : "password"}
                  {...form.register("confirmPassword")}
                />
                <Button
                  type="button"
                  onClick={() => {
                    setShowConfirmPassword(!showConfirmPassword);
                  }}
                  className="absolute right-2 top-0 text-black bg-transparent hover:bg-transparent cursor-pointer "
                  variant={"ghost"}
                >
                  {showConfirmPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </Button>
              </div>
              <Button
                type="submit"
                className="hover:bg-gray-500 cursor-pointer"
                disabled={isPending}
              >
                {isPending ? "Loading..." : "Submit"}
              </Button>
              {}
            </div>
          </form>
          <p className="pt-3 text-center">
            Have account?{" "}
            <NavLink to="/login" className="text-gray-500">
              Login
            </NavLink>
          </p>
        </div>
      </div>
    </main>
  );
}

export default Register;
