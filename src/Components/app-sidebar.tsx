"use client";

import * as React from "react";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarHeader, SidebarRail } from "@/src/components/ui/sidebar";
import { Home, PlusCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";
import toast from "react-hot-toast";
import { signOut } from "next-auth/react";
import { Button } from "./ui/button";

// Only these routes will appear
const links = [
  { name: "Dashboard", path: "/dashboard", icon: <Home className="h-4 w-4" /> },
  { name: "Create Project", path: "/dashboard/project", icon: <PlusCircle className="h-4 w-4" /> },
  { name: "Create Blog", path: "/dashboard/blog", icon: <PlusCircle className="h-4 w-4" /> },
  { name: "Manage Blog", path: "/dashboard/manageBlog", icon: <PlusCircle className="h-4 w-4" /> },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const handleLogout = () => {
    toast.success("Logging out...");
    signOut({ callbackUrl: "/" });
  };

  return (
    <Sidebar {...props}>
      <SidebarHeader className="bg-white dark:bg-black">
        <Link href="/" className="flex items-center group">
          <div className="relative w-12 h-12 overflow-hidden group-hover:scale-105 transition-transform duration-200">
            <Image src={logo} alt="Logo" fill className="object-cover" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-md animate-text-gradient group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
            Istiak Ahamed
          </span>
        </Link>
      </SidebarHeader>

      <SidebarContent className="bg-white dark:bg-black">
        <SidebarGroup>
          <SidebarGroupLabel>Admin Panel</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {links.map((link) => (
                <SidebarMenuItem key={link.name}>
                  <SidebarMenuButton asChild>
                    <Link href={link.path} className="flex items-center gap-2">
                      {link.icon}
                      {link.name}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarRail />
      <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-black">
        <Button
          variant="destructive"
          className="group relative cursor-pointer inline-flex items-center justify-center gap-2 px-6 py-2 w-full font-medium border border-emerald-500/30 bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-md animate-text-gradient backdrop-blur-md transition duration-300 shadow-md hover:shadow-lg"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
    </Sidebar>
  );
};