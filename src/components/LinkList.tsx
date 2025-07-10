import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import type { LinkItem } from "@/utils/schemas/DummySchema";
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Pencil, Save, Trash2 } from "lucide-react";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

import { useDeleteLink, useEditLink } from "@/hooks/useLink";
type Props = {
  links: LinkItem[];
};

export default function LinkList({links}:Props) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editValues, setEditValues] = useState<{
    [id: string]: { title: string; url: string };
  }>({});
  const { mutate: editLink, isPending } = useEditLink();
  const { mutate: deleteLink, isPending: deleting } = useDeleteLink();
  const handleEditToggle = (link: LinkItem) => {
    setEditingId(link.id);
    setEditValues((prev) => ({
      ...prev,
      [link.id]: { title: link.title, url: link.url },
    }));
  };

  

  const handleSave = (id: string) => {
    const { title, url } = editValues[id];
    if (!title.trim() || !url.trim()) {
      return toast.error("Judul dan URL tidak boleh kosong");
    }

    editLink({ id, title, url });
    setEditingId(null);
  };

  const handleVisibleToggle = (link: LinkItem) => {
    editLink({ id: link.id, visible: !link.visible });
  };

  return (
    <div className="flex flex-col gap-4 p-6 mx-auto w-full">
      {links.map((link) => {
        const isEditing = editingId === link.id;
        return (
          <Card
            key={link.id}
            className="p-4 rounded-xl shadow-md border bg-white flex flex-col gap-2"
          >
            {isEditing ? (
              <>
                <Input
                  value={editValues[link.id]?.title || ""}
                  onChange={(e) =>
                    setEditValues((prev) => ({
                      ...prev,
                      [link.id]: {
                        ...prev[link.id],
                        title: e.target.value,
                      },
                    }))
                  }
                  className="font-semibold"
                />
                <Input
                  value={editValues[link.id]?.url || ""}
                  onChange={(e) =>
                    setEditValues((prev) => ({
                      ...prev,
                      [link.id]: {
                        ...prev[link.id],
                        url: e.target.value,
                      },
                    }))
                  }
                />
              </>
            ) : (
              <>
                <div className="font-semibold">{link.title}</div>
                <div className="text-sm text-gray-500 truncate">{link.url}</div>
              </>
            )}

            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center gap-2">
                <Switch
                  checked={link.visible}
                  onCheckedChange={() => handleVisibleToggle(link)}
                  className="cursor-pointer"
                />
                <span className="text-xs text-gray-600">
                  {link.visible ? "Active" : "Inactive"}
                </span>
              </div>

              <div className="flex gap-2 items-center">
                {isEditing ? (
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleSave(link.id)}
                    disabled={isPending}
                  >
                    <Save className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleEditToggle(link)} className="cursor-pointer"
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                )}
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="destructive" size="icon" className="cursor-pointer hover:bg-red-700">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Hapus Link?</AlertDialogTitle>
                      <AlertDialogDescription>
                        Tindakan ini tidak dapat dibatalkan. Link akan dihapus
                        secara permanen dari sistem.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Batal</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => deleteLink(link.id)}
                        disabled={deleting} className="bg-red-500 cursor-pointer"
                      >
                        Ya, hapus
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
