"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

const data = [
  { label: "30일 이내", count: 847, fill: "#34d399" },
  { label: "60일 이내", count: 1203, fill: "#60a5fa" },
  { label: "90일 이내", count: 1580, fill: "#a78bfa" },
];

export default function RetentionFunnelChart() {
  return (
    <div className="bg-white rounded-xl border border-zinc-200 p-5">
      <div className="mb-4">
        <p className="text-sm font-semibold text-zinc-800">재방문 퍼널</p>
        <p className="text-xs text-zinc-400 mt-0.5">기간별 방문 고객수</p>
      </div>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={data} margin={{ top: 0, right: 10, left: -10, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f4f4f5" />
          <XAxis dataKey="label" tick={{ fontSize: 12, fill: "#71717a" }} />
          <YAxis tick={{ fontSize: 11, fill: "#71717a" }} />
          <Tooltip formatter={(v: unknown) => [`${Number(v).toLocaleString()}명`, "고객수"]} />
          <Bar dataKey="count" radius={[4, 4, 0, 0]}>
            {data.map((d, i) => (
              <Cell key={i} fill={d.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
