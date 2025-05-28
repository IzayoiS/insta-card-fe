import CardPreview from "@/components/CardPreview";
import React from "react";

function RightBar() {
  return (
    <div className="w-[40%] border-l h-screen">
      <div className="fixed">
        <div className=" ">
        <CardPreview/>
        </div>
        </div>
    </div>
  );
}

export default RightBar;
