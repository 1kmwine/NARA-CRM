"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, ResponsiveContainer } from "recharts";

const data = [
  { grade: "일반", count: 1540 },
  { grade: "VIP", count: 820 },
  { grade: "VVIP", count: 312 },
  { grade: "임직원", count: 175 },
];
const COLORS = ["#d4d4d8", "#60a5fa", "#f59e0b", "#a78bfa"];

export default function GradeCustomerBarChart() {
  return (
    <div className="bg-white rounded-xl border border-zinc-200 p-5">
      <div className="mb-4">
        <p className="text-sm font-semibold text-zinc-800">등급별 고객수</p>
        <p className="text-xs text-zinc-400 mt-0.5">누적 회원 기준</p>
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data} margin={{ top: 0, right: 0, left: -10, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f4f4f5" />
          <XAxis dataKey="grade" tick={{ fontSize: 12, fill: "#71717a" }} />
          <YAxis tick={{ fontSize: 11, fill: "#71717a" }} />
          <Tooltip formatter={(v: unknown) => [`${String(v?.toLocaleString?.() ?? v)}명`, "고객수"]} />
          <Bar dataKey="count" radius={[4, 4, 0, 0]}>
            {data.map((_, i) => <Cell key={i} fill={COLORS[i]} />)}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
