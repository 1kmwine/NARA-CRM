"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart2,
  LayoutDashboard,
  Wine,
  Users,
  UserX,
  ShoppingBag,
  TrendingUp,
  Megaphone,
  Target,
  ChevronRight,
} from "lucide-react";

interface NavItem {
  href: string;
  label: string;
  no: string;
  icon: React.ElementType;
  children?: { href: string; label: string }[];
}

const navItems: NavItem[] = [
  {
    href: "/dashboard",
    label: "CRM 종합 현황",
    no: "1",
    icon: LayoutDashboard,
  },
  {
    href: "/segments",
    label: "고객 세그먼트 분석",
    no: "2",
    icon: Users,
  },
  {
    href: "/retention",
    label: "재방문 & 휴면 고객",
    no: "3",
    icon: UserX,
  },
  {
    href: "/products",
    label: "상품 & 카테고리 분석",
    no: "4",
    icon: ShoppingBag,
  },
  {
    href: "/patterns",
    label: "고객 구매 패턴 분석",
    no: "5",
    icon: TrendingUp,
    children: [
      { href: "/patterns/all", label: "전체 패턴 분석" },
      { href: "/patterns/customer", label: "고객별 CRM 분석" },
    ],
  },
  {
    href: "/campaigns",
    label: "캠페인별 성과 분석",
    no: "6",
    icon: Megaphone,
  },
  {
    href: "/targeting",
    label: "Targeted Marketing",
    no: "7",
    icon: Target,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 min-h-screen bg-zinc-900 text-white flex flex-col">
      <div className="flex items-center gap-3 px-6 py-5 border-b border-zinc-700">
        <Wine className="w-6 h-6 text-amber-400" />
        <span className="text-lg font-semibold tracking-tight">NARA CRM</span>
      </div>
      <nav className="flex-1 px-3 py-4 space-y-0.5">
        {navItems.map(({ href, label, no, icon: Icon, children }) => {
          const active = pathname === href || (href !== "/dashboard" && pathname.startsWith(href));
          return (
            <div key={href}>
              <Link
                href={href}
                className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  active
                    ? "bg-amber-500 text-zinc-900"
                    : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
                }`}
              >
                <span className={`text-[10px] font-bold w-5 text-center shrink-0 ${active ? "text-zinc-700" : "text-zinc-600"}`}>
                  {no}
                </span>
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span className="flex-1 leading-tight">{label}</span>
                {children && (
                  <ChevronRight className={`w-3 h-3 shrink-0 transition-transform ${active ? "rotate-90" : ""}`} />
                )}
              </Link>
              {children && active && (
                <div className="ml-8 mt-0.5 mb-1 space-y-0.5">
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
                        <span className="w-1 h-1 rounded-full bg-current shrink-0" />
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
