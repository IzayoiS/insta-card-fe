import { Button } from "@/components/ui/button";
import { useMe } from "@/hooks/useLogin";
import api from "@/utils/api";
import type { LinkItem } from "@/utils/schemas/DummySchema";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import ImageDefault from "@/assets/defaulImage.jpg";

export function PublicURL() {
  const { username } = useParams();
  const { data: me } = useMe();

  const {
    data = [],
    isLoading,
    isError,
  } = useQuery<LinkItem[]>({
    queryKey: ["public-links", username],
    queryFn: async () => {
      const res = await api.get(`/link/${username}`);
      return res.data.data;
    },
    enabled: !!username,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError || !data || data.length === 0)
    return <p>User or links not found</p>;

  if (!data)
    return (
      <div className="text-red-500 text-sm font-medium mb-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mx-auto mb-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v2m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
          />
        </svg>
        We can’t load profile preview right now.
        <p className="text-sm text-gray-500 mt-1">
          If the issue persists,{" "}
          <a href="#" className="text-blue-500 underline">
            get help
          </a>
          .
        </p>
      </div>
    );

  return (
    <div className="flex justify-center items-center p-6">
      <div>
        <img
          src={ImageDefault || me?.data?.profile?.avatar}
          alt={me?.data?.username}
          className="rounded-full h-20 w-20 m-auto"
        />
        <p className="text-center text-3xl font-bold m-10">
          {me?.data?.username}
        </p>
        {data.map((link) => (
          <div className="flex flex-col" key={link.id}>
            <Link
              key={link.id}
              to={link.url}
              target="_blank"
              className=" bg-white w-100 text-center p-3 shadow hover:bg-gray-100 mb-2 "
            >
              <Button variant={"link"} className="hover:!no-underline">
                <p className="font-semibold cursor-pointer text-2xl">
                  {link.title}
                </p>
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
