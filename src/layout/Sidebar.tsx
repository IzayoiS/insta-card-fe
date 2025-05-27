// components/Sidebar.tsx
"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { usePathname } from "next/navigation";
import { Link } from "react-router-dom";


const navItems = [
  { name: "My Linktree", href: "/" },
  { name: "My Shop", href: "/shop" },
  { name: "Analytics", href: "/analytics" },
  { name: "Instagram Planner", href: "/instagram" },
];

export function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="md:w-64">
      {/* Mobile Hamburger */}
      <div className="md:hidden p-4">
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

      {/* Desktop Sidebar */}
      <div className="hidden md:block bg-gray-100 h-full p-6 border-r min-h-screen">
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
    <div className="space-y-4">
      <div className="text-xl font-bold">user logged in</div>
      <nav className="flex flex-col gap-2 text-sm">
        {navItems.map((item) => (
          <Link to={"/"}
            key={item.href}
            onClick={onNavigate}
            className={`px-3 py-2 rounded hover:bg-gray-200 ${
              pathname === item.href ? "bg-gray-300 font-semibold" : ""
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
