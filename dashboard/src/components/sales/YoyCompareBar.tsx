"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { category: "레드", thisMonth: 142, lastYear: 118 },
  { category: "화이트", thisMonth: 87, lastYear: 75 },
  { category: "스파클링", thisMonth: 54, lastYear: 48 },
  { category: "로제", thisMonth: 28, lastYear: 22 },
];

export default function YoyCompareBar() {
  return (
    <div className="bg-white rounded-xl border border-zinc-200 p-5">
      <div className="mb-4">
        <p className="text-sm font-semibold text-zinc-800">카테고리별 전년 동기 비교</p>
        <p className="text-xs text-zinc-400 mt-0.5">이번달 vs 전년동기 (단위: 병)</p>
      </div>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={data} margin={{ top: 0, right: 10, left: -10, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f4f4f5" />
          <XAxis dataKey="category" tick={{ fontSize: 12, fill: "#71717a" }} />
          <YAxis tick={{ fontSize: 11, fill: "#71717a" }} />
          <Tooltip formatter={(v: unknown) => [`${v}병`, ""]} />
          <Legend wrapperStyle={{ fontSize: 12 }} />
          <Bar dataKey="thisMonth" name="이번달" fill="#f59e0b" radius={[4, 4, 0, 0]} />
          <Bar dataKey="lastYear" name="전년동기" fill="#94a3b8" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
