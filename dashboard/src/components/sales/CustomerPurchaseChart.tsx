"use client";

import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Search } from "lucide-react";

const defaultData = [
  { month: "1월", qty: 4, amount: 3200000 },
  { month: "2월", qty: 2, amount: 1600000 },
  { month: "3월", qty: 6, amount: 4800000 },
  { month: "4월", qty: 3, amount: 2400000 },
  { month: "5월", qty: 5, amount: 4000000 },
  { month: "6월", qty: 7, amount: 5600000 },
];

export default function CustomerPurchaseChart() {
  const [query, setQuery] = useState("김민준");

  return (
    <div className="bg-white rounded-xl border border-zinc-200 p-5">
      <div className="mb-4">
        <p className="text-sm font-semibold text-zinc-800">고객별 구매 분석</p>
        <div className="relative mt-2">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="고객 이름 검색..."
            className="w-full pl-8 pr-3 py-1.5 text-xs border border-zinc-200 rounded-lg bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-accent-500/40"
          />
        </div>
      </div>
      <div className="flex gap-4 mb-3">
        <div className="flex-1 bg-zinc-50 rounded-lg p-3">
          <p className="text-xs text-zinc-400">연 구매 횟수</p>
          <p className="text-lg font-bold text-zinc-800 mt-0.5">27회</p>
        </div>
        <div className="flex-1 bg-zinc-50 rounded-lg p-3">
          <p className="text-xs text-zinc-400">구매 병수</p>
          <p className="text-lg font-bold text-zinc-800 mt-0.5">84병</p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={150}>
        <LineChart data={defaultData} margin={{ top: 0, right: 0, left: -15, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f4f4f5" />
          <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#71717a" }} />
          <YAxis tick={{ fontSize: 10, fill: "#71717a" }} />
          <Tooltip formatter={(v: unknown) => [`${v}병`, "구매 수량"]} />
          <Line type="monotone" dataKey="qty" stroke="#f59e0b" strokeWidth={2} dot={{ r: 3 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
