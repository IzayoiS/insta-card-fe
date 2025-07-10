import { useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { useCreate } from "@/hooks/useLink";

export function DialogAddUrl() {
  const [open, setOpen] = useState(false);

  const { mutateAdd, setTitle, setUrl, isPending, title, url } = useCreate();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setOpen(false);
    await mutateAdd({ title, url });
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
        <form onSubmit={handleSubmit}>
          <DialogDescription>
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
          </DialogDescription>
          <DialogFooter>
            <Button
              type="submit"
              className="bg-blue-600 hover:bg-blue-500 cursor-pointer w-full mt-3"
              disabled={isPending || (!url.trim() && !title.trim())}
            >
              {isPending ? "wait..." : "create"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
