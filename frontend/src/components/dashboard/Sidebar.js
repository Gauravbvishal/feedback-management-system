"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  BarChart3,
  MessageSquare,
  FolderKanban,
  Settings,
  LogOut,
} from "lucide-react";

const menus = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/admin/dashboard",
  },
  {
    title: "Analytics",
    icon: BarChart3,
    href: "/admin/analytics",
  },
  {
    title: "Feedback",
    icon: MessageSquare,
    href: "/admin/feedback",
  },
  {
    title: "Categories",
    icon: FolderKanban,
    href: "/admin/categories",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/admin/settings",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 bg-white border-r min-h-screen flex flex-col">

      <div className="p-6 border-b">

        <h1 className="text-3xl font-bold text-blue-600">
          FeedPulse
        </h1>

        <p className="text-sm text-slate-500 mt-2">
          Feedback Management
        </p>

      </div>

      <nav className="flex-1 px-4 py-6">

        {menus.map((item) => {
          const Icon = item.icon;

          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl mb-2 transition
              ${
                active
                  ? "bg-blue-600 text-white"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              <Icon size={20} />

              {item.title}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t">

        <button
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-red-50 py-3 text-red-600 hover:bg-red-100"
        >
          <LogOut size={18} />

          Logout
        </button>

      </div>

    </aside>
  );
}