"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, ResponsiveContainer } from "recharts";

const data = [
  { grade: "VVIP", revenue: 187, pct: "48.7%" },
  { grade: "VIP", revenue: 124, pct: "32.3%" },
  { grade: "임직원", revenue: 42, pct: "10.9%" },
  { grade: "일반", revenue: 31, pct: "8.1%" },
];

const COLORS = ["#f59e0b", "#60a5fa", "#a78bfa", "#d4d4d8"];

export default function GradeRevenueChart() {
  return (
    <div className="bg-white rounded-xl border border-zinc-200 p-5">
      <div className="mb-4">
        <p className="text-sm font-semibold text-zinc-800">등급별 매출 비중</p>
        <p className="text-xs text-zinc-400 mt-0.5">이번달 등급별 매출액(백만원) · 비중</p>
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data} layout="vertical" margin={{ top: 0, right: 40, left: 10, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f4f4f5" horizontal={false} />
          <XAxis type="number" tick={{ fontSize: 11, fill: "#71717a" }} />
          <YAxis type="category" dataKey="grade" tick={{ fontSize: 12, fill: "#71717a" }} width={45} />
          <Tooltip
            formatter={(v: unknown, _: unknown, props: any) => [`₩${v}백만 (${props.payload.pct})`, "매출"]}
          />
          <Bar dataKey="revenue" radius={[0, 4, 4, 0]}>
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
