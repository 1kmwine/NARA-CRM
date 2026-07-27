"use client";

import { Search } from "lucide-react";

export const customers = [
  { id: "1", name: "김민준", grade: "VIP" },
  { id: "2", name: "박서연", grade: "일반" },
  { id: "3", name: "이도윤", grade: "VIP" },
  { id: "4", name: "정하은", grade: "VVIP" },
  { id: "5", name: "최준서", grade: "VIP" },
];

interface CustomerSearchPanelProps {
  selectedId: string;
  onSelect: (id: string) => void;
}

export default function CustomerSearchPanel({ selectedId, onSelect }: CustomerSearchPanelProps) {
  return (
    <div className="bg-white rounded-xl border border-zinc-200 p-5">
      <p className="text-sm font-semibold text-zinc-800 mb-3">고객 선택</p>
      <div className="relative mb-3">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
        <input
          type="text"
          placeholder="고객 이름 검색..."
          className="w-full pl-9 pr-4 py-2 text-sm border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500/40"
        />
      </div>
      <div className="flex flex-wrap gap-2">
        {customers.map((c) => (
          <button
            key={c.id}
            onClick={() => onSelect(c.id)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              selectedId === c.id
                ? "bg-accent-500 text-white"
                : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>
    </div>
  );
}
