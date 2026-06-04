"use client";

import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "레드", value: 312, color: "#dc2626" },
  { name: "화이트", value: 198, color: "#ca8a04" },
  { name: "스파클링", value: 124, color: "#7c3aed" },
  { name: "로제", value: 76, color: "#db2777" },
  { name: "디저트", value: 42, color: "#b45309" },
];

const total = data.reduce((sum, d) => sum + d.value, 0);

export default function ProductCategoryChart() {
  return (
    <div className="bg-white rounded-xl border border-zinc-200 p-5">
      <div className="mb-4">
        <p className="text-sm font-semibold text-zinc-800">앱 구매 상품군 비중</p>
        <p className="text-xs text-zinc-400 mt-0.5">자사몰 앱 상품군별 구매 현황</p>
      </div>
      <ResponsiveContainer width="100%" height={240}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={55}
            outerRadius={90}
            paddingAngle={2}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip formatter={(v: unknown) => [`${v}건 (${((Number(v) / total) * 100).toFixed(1)}%)`, ""]} />
          <Legend wrapperStyle={{ fontSize: 12 }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
