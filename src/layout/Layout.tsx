import React, { type ReactNode } from "react";
import { LeftBar } from "./components/LeftBar";


interface AppLayoutProps {
  children : ReactNode
}

function Layout({ children }: AppLayoutProps) {
  return (
    <div className="flex justify-between">
      <LeftBar />
      <section className="flex-1 ">
        {children}
      </section>
     {/* <RightBar/> */}
    </div>
  );
}

export default Layout;
