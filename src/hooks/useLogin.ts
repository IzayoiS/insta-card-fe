import type { LoginSchemaType } from "@/utils/schemas/AuthTypes";
import { useMutation } from "@tanstack/react-query";
import api from "@/utils/api"; // Pastikan kamu sudah mengimport API instance dari axios
import { toast } from "sonner";
import Cookies from "js-cookie";

export function useLogin() {
  const {
    mutateAsync: mutateLogin,
    data: dataLogin,
    isPending,
  } = useMutation({
    mutationKey: ["login"],
    mutationFn: async (data: LoginSchemaType) => {
      const res = await api.post("/auth/login", data);
      return res.data; // jangan simpan token di sini
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || "ada yg salah");
    },
  });

  return { mutateLogin, dataLogin, isPending };
}


export function useMe() {
  const {
    mutateAsync: mutateLogin,
    data: dataLogin,
    isPending,
  } = useMutation({
    mutationKey: ["check"],
    mutationFn: async (data: LoginSchemaType) => {
      const res = await api.post("/auth/me", data);
      console.log(res.data);
      return res.data;
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });
  return { mutateLogin, dataLogin, isPending };
}
