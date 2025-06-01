import CardPreview from "@/components/CardPreview";
import type { LinkItem } from "@/utils/schemas/DummySchema";
import React from "react";

type Props = {
  links: LinkItem[];
};

function RightBar({links}:Props) {
  return (
    <div className="w-[40%] ">
      <div className="fixed">
        <div className=" ">
        <CardPreview links={links}/>
        </div>
        </div>
    </div>
  );
}

export default RightBar;
