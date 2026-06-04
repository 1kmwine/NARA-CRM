"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { month: "1월", 앱구매: 84, 매장구매: 312 },
  { month: "2월", 앱구매: 96, 매장구매: 328 },
  { month: "3월", 앱구매: 112, 매장구매: 298 },
  { month: "4월", 앱구매: 128, 매장구매: 356 },
  { month: "5월", 앱구매: 145, 매장구매: 339 },
  { month: "6월", 앱구매: 163, 매장구매: 384 },
];

export default function AppSalesChart() {
  return (
    <div className="bg-white rounded-xl border border-zinc-200 p-5">
      <div className="mb-4">
        <p className="text-sm font-semibold text-zinc-800">월별 앱 구매 현황</p>
        <p className="text-xs text-zinc-400 mt-0.5">앱 vs 매장 구매 비교 (단위: 건)</p>
      </div>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={data} margin={{ top: 0, right: 10, left: -10, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f4f4f5" />
          <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#71717a" }} />
          <YAxis tick={{ fontSize: 11, fill: "#71717a" }} />
          <Tooltip formatter={(v: unknown) => [`${v}건`, ""]} />
          <Legend wrapperStyle={{ fontSize: 12 }} />
          <Bar dataKey="앱구매" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
          <Bar dataKey="매장구매" fill="#f59e0b" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
