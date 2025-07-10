// import { DialogAddUrl } from "@/components/AddUrl";
import { DialogAddUrl } from "@/components/AddUrl";
import LinkList from "@/components/LinkList";
import { Button } from "@/components/ui/button";
import { useGetLink } from "@/hooks/useLink";
import { useMe } from "@/hooks/useLogin";
import RightBar from "@/layout/components/RightBar";
import { toast } from "sonner";
import ImageDefault from "@/assets/defaulImage.jpg";

export default function HomePage() {
  const { data: links = [], isLoading, isError } = useGetLink();
  const { data: me } = useMe();
  const username = me?.data?.username;
  const PublicURL = `${import.meta.env.VITE_PUBLIC_URL}/${username}`;

  if (isLoading) return <p className="p-3 text-gray-600">Loading...</p>;
  if (!username) return <p className="p-3 text-red-500">Failed to get data.</p>;
  if (isError) return <p className="p-3 text-red-500">Failed to load links.</p>;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(PublicURL);
      toast.success("Link copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy: ", err);
      toast.error("Failed to copy link!");
    }
  };

  return (
    <main className="">
      <div className="pb-3 border-b">
        <p className="ml-5 mt-5 font-bold text-2xl">INSTACARD</p>
      </div>
      <div className="flex">
        <div className="w-full pr-4 border-r">
          <div className="m-3">
            <div className="flex justify-between border  rounded-3xl p-3 items-center bg-green-100">
              <div>
                <p>Your Link is live:</p>
                <a
                  href={PublicURL}
                  className="underline hover:-underline-offset-2"
                  target="_blank"
                >
                  {PublicURL}
                </a>
              </div>
              <Button
                variant={"outline"}
                className="cursor-pointer rounded-3xl"
                onClick={handleCopy}
              >
                sharelink button
              </Button>
            </div>

            <div className="px-3 py-5 flex justify-between items-center">
              <div className="flex items-center gap-3 ">
                <img
                  src={ImageDefault || me?.data?.profile?.avatar}
                  alt=""
                  className="rounded-full h-20 w-20"
                />
                <div>
                  <p>{me?.data?.profile?.fullName}</p>
                  <p>{me?.data?.profile?.bio || "No bio yet"}</p>
                </div>
              </div>
              {/* <Button className="bg-gray-500 px-3 py-6 rounded-full cursor-pointer">
                <p>●●●</p>
              </Button> */}
            </div>
            <DialogAddUrl />
            <div>
              <LinkList links={links} />
            </div>
          </div>
        </div>
        <RightBar links={links} />
      </div>
    </main>
  );
}
