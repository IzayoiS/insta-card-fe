// components/LinktreePreview.tsx
import { Card, CardContent } from "@/components/ui/card";
import type { LinkItem } from "@/utils/schemas/DummySchema";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

type Props = {
  links: LinkItem[];
};

export default function CardPreview({ links }: Props) {
  const activeLinks = (links ?? []).filter((link) => link.visible);
  return (
    <div className="flex justify-center items-center p-6">
      <Card className="w-70 h-[500px] rounded-3xl shadow-xl border border-gray-300 bg-neutral-100 relative flex flex-col items-center justify-center">
        <CardContent className="flex flex-col items-center justify-center h-full text-center">
          <div>
            {activeLinks.length === 0 ? (
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
            ) : (
              activeLinks.map((link) => (
                <div className="flex flex-col " key={link.id}>
                  <Link
                    key={link.id}
                    to={link.url}
                    target="_blank"
                    className=" bg-white rounded-xl p-3 shadow hover:bg-gray-100 mb-2"
                  >
                    <Button variant={"link"}>
                      <p className="text-blue-600 font-semibold cursor-pointer">
                        {link.title}
                      </p>
                    </Button>
                  </Link>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
