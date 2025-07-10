import api from "@/utils/api";
import { registSchema, type RegistDTO } from "@/utils/schemas/AuthTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export function useRegister() {
  const querryClient = useQueryClient();
  const navigate = useNavigate();
  const form = useForm<RegistDTO>({
    mode: "onChange",
    resolver: zodResolver(registSchema),
  });

  const { isPending, mutateAsync } = useMutation<RegistDTO, Error, RegistDTO>({
    mutationKey: ["CreateNewAcc"],
    mutationFn: async (data: RegistDTO) => {
      const res = await api.post<RegistDTO>("/auth/register", data);

      return res.data;
    },
    onError: (error: any) => {
      if (error) {
        return toast.error(error.response.data.message);
      }
      toast.error("eror");
    },
    onSuccess: async (data: any) => {
      toast.success(`create ${data.data.username} `);
      querryClient.invalidateQueries({
        queryKey: ["accounts"],
      });
      navigate("/login");
    },
  });

  async function onSubmit(data: RegistDTO) {
    await mutateAsync(data);
    form.reset();
  }

  return { form, onSubmit, isPending };
}
