"use client";

import { useAuth } from "@/auth/AuthContext";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useMe } from "@/hooks/useLogin";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink, useLocation } from "react-router-dom";
import ImageDefault from "@/assets/defaulImage.jpg";

const navItems = [
  { name: "My Linktree", href: "/" },
  // { name: "My Profile", href: "/myprofile" },
];

export function LeftBar() {
  const location = useLocation();
  const pathname = location.pathname;

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
  onNavigate,
}: {
  pathname: string;
  onNavigate?: () => void;
}) {
  const { logout } = useAuth();
  function onLogout() {
    logout();
  }
  const { data: me } = useMe();

  return (
    <div className="pt-3 fixed">
      <div className="pl-3 text-3xl font-bold flex flex-row">
        <img
          src={ImageDefault || me?.data?.profile?.avatar}
          alt={me?.data?.username}
          className="rounded-full h-10 w-10 mr-3"
        />
        {me?.data?.username}
      </div>
      <div className="mx-2 my-3">
        {navItems.map((item) => (
          <NavLink to={item.href} onClick={onNavigate} key={item.href}>
            <Button
              variant={"outline"}
              className=" justify-start hover:bg-gray-700 transition duration-300 ease-in-out text-black hover:text-white w-60 mb-1 cursor-pointer"
            >
              {item.name}
            </Button>
          </NavLink>
        ))}
      </div>

      <Button
        onClick={() => {
          onLogout();
        }}
        className="fixed -bottom-0 mb-3  left-4 bg-gray-800 cursor-pointer"
      >
        Logout
      </Button>
    </div>
  );
}
