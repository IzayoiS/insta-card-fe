import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2, Save } from "lucide-react";
import { initialLinks } from "@/utils/datas/DummyList";
import { DialogAddUrl } from "./AddUrl";
import type { LinkItem } from "@/utils/schemas/DummySchema";

type Props = {
  links: LinkItem[];
  setLinks: React.Dispatch<React.SetStateAction<LinkItem[]>>;
};

export default function LinkList({ links, setLinks }: Props) {
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleEditToggle = (id: string) => {
    setEditingId(editingId === id ? null : id);
  };

  const handleSave = (id: string, title: string, url: string) => {
    setLinks((prev) =>
      prev.map((link) => (link.id === id ? { ...link, title, url } : link))
    );
    setEditingId(null);
  };

  const handleDelete = (id: string) => {
    setLinks((prev) => prev.filter((link) => link.id !== id));
  };

  const handleToggle = (id: string) => {
    setLinks((prev) =>
      prev.map((link) =>
        link.id === id ? { ...link, active: !link.active } : link
      )
    );
  };
  const handleAddLink = (title: string, url: string) => {
    const newLink = {
      id: crypto.randomUUID(),
      title,
      url,
      active: true,
    };
    setLinks((prev) => [...prev, newLink]);
  };

  return (
    <div className="flex flex-col gap-4 p-6  mx-auto w-full ">
     
      {links.map((link) => {
        const isEditing = editingId === link.id;
        return (
          <div>
            <Card className="p-4 rounded-xl shadow-md border bg-white flex flex-col gap-2">
              {isEditing ? (
                <>
                  <Input
                    defaultValue={link.title}
                    onChange={(e) => (link.title = e.target.value)}
                    className="font-semibold"
                  />
                  <Input
                    defaultValue={link.url}
                    onChange={(e) => (link.url = e.target.value)}
                  />
                </>
              ) : (
                <>
                  <div>
                    <div className="font-semibold">{link.title}</div>
                    <div className="text-sm text-gray-500 truncate">
                      {link.url}
                    </div>
                  </div>
                </>
              )}

              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-2">
                  <Switch
                    checked={link.active}
                    onCheckedChange={() => handleToggle(link.id)}
                  />
                  <span className="text-xs text-gray-600">
                    {link.active ? "Active" : "Inactive"}
                  </span>
                </div>

                <div className="flex gap-2">
                  {isEditing ? (
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleSave(link.id, link.title, link.url)}
                    >
                      <Save className="h-4 w-4" />
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleEditToggle(link.id)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                  )}
                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => handleDelete(link.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
