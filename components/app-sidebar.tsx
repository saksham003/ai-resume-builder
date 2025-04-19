"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { FileText, Settings, BarChart3, Home, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
  SidebarTrigger,
  SidebarGroup,
  SidebarGroupContent,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function AppSidebar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const { state } = useSidebar();

  const menuItems = [
    {
      title: "Saved Resumes",
      icon: Home,
      href: "/",
    },
    {
      title: "Build Resume",
      icon: FileText,
      href: "/build",
    },
    {
      title: "Analyze Resume",
      icon: BarChart3,
      href: "/analyze",
    },
    {
      title: "Settings",
      icon: Settings,
      href: "/settings",
    },
  ];

  return (
    <TooltipProvider>
      <Sidebar collapsible="icon">
        <SidebarHeader className="flex items-center justify-between py-4 px-2">
          <div className="flex justify-between w-full">
            <div className="flex items-center gap-2">
              <FileText className="h-6 w-6 text-foreground ml-1" />
              <span
                className={`font-semibold text-foreground transition-opacity duration-200 ${
                  state === "collapsed"
                    ? "opacity-0 w-0 overflow-hidden"
                    : "opacity-100"
                }`}
              >
                ResumeIQ
              </span>
            </div>
            {state === "expanded" && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <SidebarTrigger />
                </TooltipTrigger>
                <TooltipContent side="right">Collapse Sidebar</TooltipContent>
              </Tooltip>
            )}
          </div>
          {state === "collapsed" && (
            <Tooltip>
              <TooltipTrigger asChild>
                <SidebarTrigger />
              </TooltipTrigger>
              <TooltipContent side="right">Collapse Sidebar</TooltipContent>
            </Tooltip>
          )}
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      asChild
                      isActive={pathname === item.href}
                      tooltip={item.title}
                      className={
                        pathname === item.href
                          ? "text-foreground font-medium bg-accent"
                          : "text-foreground"
                      }
                    >
                      <Link href={item.href}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full text-foreground hover:text-foreground hover:bg-accent"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "light" ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
                <span className="sr-only">Toggle Theme</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              {theme === "light" ? "Dark Mode" : "Light Mode"}
            </TooltipContent>
          </Tooltip>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
    </TooltipProvider>
  );
}
