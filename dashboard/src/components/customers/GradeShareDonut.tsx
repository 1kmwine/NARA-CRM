"use client";

import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "VVIP", value: 142, color: "#f59e0b" },
  { name: "VIP", value: 489, color: "#3b82f6" },
  { name: "일반", value: 1876, color: "#71717a" },
  { name: "임직원", value: 340, color: "#a855f7" },
];

const total = data.reduce((sum, d) => sum + d.value, 0);

export default function GradeShareDonut() {
  return (
    <div className="bg-white rounded-xl border border-zinc-200 p-5">
      <div className="mb-4">
        <p className="text-sm font-semibold text-zinc-800">등급별 회원 비중</p>
        <p className="text-xs text-zinc-400 mt-0.5">전체 회원 {total.toLocaleString()}명</p>
      </div>
      <ResponsiveContainer width="100%" height={240}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={95}
            paddingAngle={2}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            formatter={(v: unknown) => [`${v}명 (${((Number(v) / total) * 100).toFixed(1)}%)`, ""]}
          />
          <Legend wrapperStyle={{ fontSize: 12 }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
