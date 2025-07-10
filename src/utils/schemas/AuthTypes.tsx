import { z } from "zod";

const LoginSchema = z
  .object({
    identifier: z.string().min(1, "Email or username is required"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
  })
  .refine(
    (data) => {
     
      if (data.identifier.includes("@")) {
        return z.string().email().safeParse(data.identifier).success;
      }
      return true;
    },
    {
      path: ["identifier"],
      message: "Invalid email format",
    }
  );

export type LoginSchemaType = z.infer<typeof LoginSchema>;
export default LoginSchema;

export const registSchema = z.object({
  username: z.string().min(4, "minimal 4 huruf"),
  email: z.string().email(),
  password: z.string().min(6, "password harus 6 huruf"),
  confirmPassword: z.string().min(6, "password harus 6 huruf")
})

export type RegistDTO = z.infer<typeof registSchema>
