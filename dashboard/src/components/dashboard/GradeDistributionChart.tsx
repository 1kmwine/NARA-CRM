"use client";

import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "일반", value: 1540, pct: "54.1%" },
  { name: "VIP", value: 820, pct: "28.8%" },
  { name: "VVIP", value: 312, pct: "11.0%" },
  { name: "임직원", value: 175, pct: "6.1%" },
];

const COLORS = ["#d4d4d8", "#60a5fa", "#f59e0b", "#a78bfa"];

export default function GradeDistributionChart() {
  return (
    <div className="bg-white rounded-xl border border-zinc-200 p-5">
      <div className="mb-4">
        <p className="text-sm font-semibold text-zinc-800">등급별 회원수 분포</p>
        <p className="text-xs text-zinc-400 mt-0.5">전월 누적 대비 변화 포함</p>
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" innerRadius={55} outerRadius={85} paddingAngle={3} dataKey="value">
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i]} />
            ))}
          </Pie>
          <Tooltip formatter={(v: unknown) => [`${String(v?.toLocaleString?.() ?? v)}명`, ""]} />
          <Legend
            formatter={(value, entry: any) => (
              <span className="text-xs text-zinc-600">{value} {entry.payload.pct}</span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
