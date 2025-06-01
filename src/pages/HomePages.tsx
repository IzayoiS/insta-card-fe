// import { DialogAddUrl } from "@/components/AddUrl";
import { DialogAddUrl } from "@/components/AddUrl";
import LinkList from "@/components/LinkList";
import { Button } from "@/components/ui/button";
import RightBar from "@/layout/components/RightBar";
import Layout from "@/layout/Layout";
import { initialLinks } from "@/utils/datas/DummyList";
import { useState } from "react";

export default function HomePage() {
  const [links, setLinks] = useState(initialLinks);
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
    <main className="">
      <div className="pb-3 border-b">
        <p>INSTACARD</p>
      </div>
      <div className="flex">
        <div className="m-3 w-full border-r pr-4">
          <div className="flex justify-between border border-gray-300 rounded-2xl p-3 items-center">
            <div>
              <p>Your Link is live:</p>
              <p className="underline hover:-underline-offset-2">
                http.ee/username
              </p>
            </div>
            <Button variant={"outline"} className="cursor-pointer">
              sharelink button
            </Button>
          </div>


          <div className="px-3 py-5 flex justify-between items-center">
            <div className="flex items-center gap-3 ">
              <img
                src="https://assets-prd.ignimgs.com/2022/09/08/jojo-blogroll-1662678855765.jpg?width=1280"
                alt=""
                className="rounded-full h-20 w-20"
              />
              <div>
                <p>full name user</p>
                <p>bio/title</p>
                <p>sosmed icon to link</p>
              </div>
            </div>
            <Button className="bg-gray-500 px-3 py-6 rounded-full cursor-pointer">
              <p>●●●</p>
            </Button>
          </div>
          <DialogAddUrl onAdd={handleAddLink}/>
          <div>
          
          <LinkList links={links} setLinks={setLinks} />
          </div>

        </div>
        <RightBar links={links} />
      </div>
    </main>
  );
}
