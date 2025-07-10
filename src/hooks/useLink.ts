import api from "@/utils/api";
import type { ResponseLink } from "@/utils/schemas/DummySchema";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";

export function useCreate() {
  const [title, setTitle] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const queryClient = useQueryClient();
  const {
    mutateAsync: mutateAdd,
    data,
    isPending,
  } = useMutation({
    mutationKey: ["add-link"],
    mutationFn: async ({ title, url }: { title: string; url: string }) => {
      const res = await api.post("/link", { title, url });
      return res.data;
    },
    onError: () => {
      toast.error("Failed created link!!");
    },
    onSuccess: () => {
      toast.success("Link created successfully!");
      queryClient.invalidateQueries({ queryKey: ["links"] });
      setTitle("");
      setUrl("");
    },
  });

  return {
    mutateAdd,
    url,
    setUrl,
    title,
    setTitle,
    data,
    isPending,
  };
}

export const useGetLink = () => {
  return useQuery({
    queryKey: ["links"],
    queryFn: async () => {
      const res = await api.get<ResponseLink>("/link");
      return res.data.data;
    },
  });
};

type EditLinkPayload = {
  id: string;
  title?: string;
  url?: string;
  visible?: boolean;
};

export function useEditLink() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: EditLinkPayload) => {
      const res = await api.patch(`/link/${data.id}`, data);
      return res.data;
    },
    onSuccess: () => {
      toast.success("Link updated successfully!");
      queryClient.invalidateQueries({ queryKey: ["links"] });
    },
    onError: () => {
      toast.error("Failed to edit link");
    },
  });
}

export function useDeleteLink() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      const res = await api.delete(`/link/${id}`);
      return res.data;
    },
    onSuccess: () => {
      toast.success("Link deleted successfully!");
      queryClient.invalidateQueries({ queryKey: ["links"] });
    },
    onError: () => {
      toast.error("Failed to delete link");
    },
  });
}
