import { useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";

type Props = {
  onAdd: (title: string, url: string) => void;
};

export function DialogAddUrl({ onAdd }: Props) {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [open, setOpen] = useState(false);

  const handleAdd = () => {
    if (!title.trim() || !url.trim()) return;
    onAdd(title.trim(), url.trim());
    setTitle("");
    setUrl("");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full rounded-2xl cursor-pointer">+ Add URL</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add your title and URL link</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-2">
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
          <Input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://yourlink.com"
          />
        </div>
        <DialogFooter>
          <Button onClick={handleAdd} className="bg-blue-600 hover:bg-blue-500 cursor-pointer">
            Add
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
