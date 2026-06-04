"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, ResponsiveContainer } from "recharts";

const data = [
  { grade: "VVIP", revenue: 187 },
  { grade: "VIP", revenue: 124 },
  { grade: "임직원", revenue: 42 },
  { grade: "일반", revenue: 31 },
];
const COLORS = ["#f59e0b", "#60a5fa", "#a78bfa", "#d4d4d8"];

export default function GradeSalesBarChart() {
  return (
    <div className="bg-white rounded-xl border border-zinc-200 p-5">
      <div className="mb-4">
        <p className="text-sm font-semibold text-zinc-800">등급별 매출</p>
        <p className="text-xs text-zinc-400 mt-0.5">이번달 기준 (백만원)</p>
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data} margin={{ top: 0, right: 0, left: -10, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f4f4f5" />
          <XAxis dataKey="grade" tick={{ fontSize: 12, fill: "#71717a" }} />
          <YAxis tick={{ fontSize: 11, fill: "#71717a" }} />
          <Tooltip formatter={(v: unknown) => [`₩${v}백만`, "매출"]} />
          <Bar dataKey="revenue" radius={[4, 4, 0, 0]}>
            {data.map((_, i) => <Cell key={i} fill={COLORS[i]} />)}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
