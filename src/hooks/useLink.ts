import api from "@/utils/api";
import type { LinkItem } from "@/utils/schemas/DummySchema";
import { updateLink, type updateLinkDTO } from "@/utils/schemas/LinkType";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueries, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export function useCreate() {
    const[ title , setTitle]=useState<string>("")
    const [url, setUrl] = useState<string>("")
    const queryClient = useQueryClient();
    const {
        mutateAsync:mutateAdd, data, isPending
    } = useMutation({
        mutationKey: ["add-link"],
        mutationFn: async({ title, url }: {
            title: string; 
            url: string
        }) => {
            const res = await api.post("/link", {title, url})
            return res.data
        }, 
        onError: () => {
            toast.error("gagal buat link!!")
        }, onSuccess: () => {
            toast.success("yeay berhasil!")
            queryClient.invalidateQueries({ queryKey: ["links"] }); 
            setTitle("")
            setUrl("")
        }
        
    })
  
    return {
        mutateAdd, url, setUrl, title, setTitle, data, isPending
    }
}

export const useGetLink = () => {
  return useQuery({
    queryKey: ["links"],
    queryFn: async () => {
      const res = await api.get("/link");
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
      toast.success("Link berhasil diperbarui");
      queryClient.invalidateQueries({ queryKey: ["links"] });
    },
    onError: () => {
      toast.error("Gagal memperbarui link");
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
      toast.success("Link berhasil dihapus");
      queryClient.invalidateQueries({ queryKey: ["links"] });
    },
    onError: () => {
      toast.error("Gagal menghapus link");
    },
  });
}