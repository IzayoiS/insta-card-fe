import DraggableLinkList from "@/components/LinkList";
import { Button } from "@/components/ui/button";
import RightBar from "@/layout/components/RightBar";
import Layout from "@/layout/Layout";

export default function HomePage() {
  return (
    <main className="">
      <div className="pb-3 border-b">
        <p>INSTACARD</p>
      </div>
      <div className="flex">
        <div className="m-3 w-full">
          <div className="flex justify-between border border-gray-300 rounded-2xl p-3 items-center">
            <div>
              <p>Your Link is live:</p>
              <p>http.ee/username</p>
            </div>
            <Button variant={"outline"} className="cursor-pointer">
              sharelink button
            </Button>
          </div>
          {/* name profile card + add */}
          <div>
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
            <Button
              className="w-full cursor-pointer rounded-2xl bg-purple-500 hover:bg-purple-400 text-white"
              variant={"outline"}
            >
              + Add
            </Button>
          </div>
          <div className="flex justify-between my-5">
            <Button variant={"outline"} className="cursor-pointer rounded-2xl">
              Collection
            </Button>
            <Button variant={"ghost"} className="cursor-pointer">
              view archive
            </Button>
          </div>
          <DraggableLinkList/>
        </div>
        <RightBar />
      </div>
    </main>
  );
}
