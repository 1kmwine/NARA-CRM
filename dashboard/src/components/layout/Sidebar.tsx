"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Users, BarChart2, MessageSquare, LayoutDashboard, Wine, PieChart } from "lucide-react";

const navItems = [
  { href: "/dashboard", label: "CRM 종합현황", icon: LayoutDashboard },
  { href: "/segments", label: "고객 세그먼트", icon: PieChart },
  { href: "/customers", label: "고객 관리", icon: Users },
  { href: "/sales", label: "판매/매출", icon: BarChart2 },
  { href: "/consultations", label: "상담 이력", icon: MessageSquare },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 min-h-screen bg-zinc-900 text-white flex flex-col">
      <div className="flex items-center gap-3 px-6 py-5 border-b border-zinc-700">
        <Wine className="w-6 h-6 text-amber-400" />
        <span className="text-lg font-semibold tracking-tight">NARA CRM</span>
      </div>
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map(({ href, label, icon: Icon }) => {
          const active = pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                active
                  ? "bg-amber-500 text-zinc-900"
                  : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </Link>
          );
        })}
      </nav>
      <div className="px-6 py-4 border-t border-zinc-700 text-xs text-zinc-500">
        NARA Cellar Internal
      </div>
    </aside>
  );
}
