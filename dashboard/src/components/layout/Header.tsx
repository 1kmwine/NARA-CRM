"use client";

import { Bell, Search } from "lucide-react";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <header className="h-14 border-b border-zinc-200 bg-white flex items-center justify-between px-6">
      <h1 className="text-base font-semibold text-zinc-800">{title}</h1>
      <div className="flex items-center gap-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
          <input
            type="text"
            placeholder="검색..."
            className="pl-9 pr-4 py-1.5 text-sm border border-zinc-200 rounded-lg bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-amber-400 w-48"
          />
        </div>
        <button className="relative p-2 rounded-lg hover:bg-zinc-100">
          <Bell className="w-4 h-4 text-zinc-500" />
        </button>
        <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-xs font-bold text-white">
          N
        </div>
      </div>
    </header>
  );
}
