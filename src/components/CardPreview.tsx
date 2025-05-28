// components/LinktreePreview.tsx
import { Card, CardContent } from "@/components/ui/card";

export default function CardPreview() {
  return (
    <div className="flex justify-center items-center p-6">
      <Card className="w-full h-[500px] rounded-3xl shadow-xl border border-gray-300 bg-neutral-100 relative flex flex-col items-center justify-center">
        <CardContent className="flex flex-col items-center justify-center h-full text-center">
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
          </div>
          <p className="text-sm text-gray-500">
            If the issue persists,{" "}
            <a href="#" className="text-blue-500 underline">
              get help
            </a>
            .
          </p>
        </CardContent>
       
      </Card>
    </div>
  );
}
