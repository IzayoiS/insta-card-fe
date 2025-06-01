// components/Sidebar.tsx
"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { usePathname } from "next/navigation";
import { href, Link, NavLink } from "react-router-dom";

const navItems = [{ name: "My Linktree", href: "/" },
  {name: "button2", href:"/myshop"}
];

export function LeftBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="md:w-64">
      
      <div className="md:hidden  mr-3">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <RxHamburgerMenu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64">
            <SidebarContent
              pathname={pathname}
              onNavigate={() => setOpen(false)}
            />
          </SheetContent>
        </Sheet>
      </div>

       <div className="hidden md:block h-full  border-r min-h-screen">
        <SidebarContent pathname={pathname} />
      </div>
    </div>
  );
}

function SidebarContent({
  pathname,
  onNavigate,
}: {
  pathname: string;
  onNavigate?: () => void;
}) {
  return (
    <div className="pt-3 fixed">
      <div className="pl-3 text-xl font-bold">user logged in</div>
      <div className="mx-2 my-3">
        {navItems.map((item) => (
          <NavLink to={item.href} onClick={onNavigate}>
            <Button
              variant={"outline"}
              className=" justify-start hover:bg-gray-700 transition duration-300 ease-in-out text-black w-full mb-1"
            >
              {item.name}
            </Button>
          </NavLink>
        ))}
      </div>

      <Button className="fixed -bottom-0 mb-3  left-4 bg-gray-800 cursor-pointer">
        Logout
      </Button>
    </div>
  );
}
