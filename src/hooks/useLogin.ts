import api from "@/utils/api"; // Pastikan kamu sudah mengimport API instance dari axios
import type { LoginSchemaType } from "@/utils/schemas/AuthTypes";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { AxiosError } from "axios";

export function useLogin() {
  const {
    mutateAsync: mutateLogin,
    data: dataLogin,
    isPending,
  } = useMutation({
    mutationKey: ["login"],
    mutationFn: async (data: LoginSchemaType) => {
      const res = await api.post("/auth/login", data);
      return res.data;
    },
    onError: (error: AxiosError) => {
      toast.error(
        (error.response?.data as { message?: string })?.message || "Error login"
      );
    },
  });

  return { mutateLogin, dataLogin, isPending };
}

type UserLoginType = {
  data: {
    username: string;
    email: string;
    profile: {
      fullName: string;
      bio: string;
      avatar: string;
    };
  };
};

export function useMe() {
  const token = localStorage.getItem("token");
  return useQuery({
    queryKey: ["me"],
    queryFn: async () => {
      const res = await api.get<UserLoginType>("/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    },
    retry: false,
  });
}
