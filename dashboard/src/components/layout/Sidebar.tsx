"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Users,
  BarChart2,
  MessageSquare,
  LayoutDashboard,
  Wine,
  PieChart,
  Megaphone,
  ShoppingCart,
  ChevronRight,
} from "lucide-react";

interface NavItem {
  href: string;
  label: string;
  icon: React.ElementType;
  children?: { href: string; label: string }[];
}

const navItems: NavItem[] = [
  { href: "/dashboard", label: "CRM 종합현황", icon: LayoutDashboard },
  {
    href: "/segments",
    label: "고객 세그먼트",
    icon: PieChart,
    children: [
      { href: "/segments/grade-changes", label: "등급변화" },
      { href: "/segments/retention", label: "재방문" },
    ],
  },
  {
    href: "/sales",
    label: "판매 현황",
    icon: BarChart2,
    children: [
      { href: "/sales/monthly", label: "월별" },
      { href: "/sales/customer", label: "고객별" },
    ],
  },
  { href: "/campaigns", label: "캠페인", icon: Megaphone },
  { href: "/winepicks", label: "자사몰 연동", icon: ShoppingCart },
  { href: "/customers", label: "고객 관리", icon: Users },
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
        {navItems.map(({ href, label, icon: Icon, children }) => {
          const active = pathname === href || (href !== "/dashboard" && pathname.startsWith(href));
          return (
            <div key={href}>
              <Link
                href={href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  active
                    ? "bg-amber-500 text-zinc-900"
                    : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="flex-1">{label}</span>
                {children && <ChevronRight className={`w-3 h-3 transition-transform ${active ? "rotate-90" : ""}`} />}
              </Link>
              {children && active && (
                <div className="ml-7 mt-1 space-y-1">
                  {children.map((child) => {
                    const childActive = pathname.startsWith(child.href);
                    return (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                          childActive
                            ? "bg-amber-400/20 text-amber-300"
                            : "text-zinc-500 hover:bg-zinc-800 hover:text-zinc-300"
                        }`}
                      >
                        <span className="w-1 h-1 rounded-full bg-current" />
                        {child.label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
      <div className="px-6 py-4 border-t border-zinc-700 text-xs text-zinc-500">
        NARA Cellar Internal
      </div>
    </aside>
  );
}
