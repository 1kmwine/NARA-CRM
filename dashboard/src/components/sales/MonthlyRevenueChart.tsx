"use client";

import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { month: "1월", 매출: 284, yoy: 251 },
  { month: "2월", 매출: 312, yoy: 278 },
  { month: "3월", 매출: 298, yoy: 265 },
  { month: "4월", 매출: 356, yoy: 310 },
  { month: "5월", 매출: 339, yoy: 295 },
  { month: "6월", 매출: 384, yoy: 334 },
];

export default function MonthlyRevenueChart() {
  return (
    <div className="bg-white rounded-xl border border-zinc-200 p-5">
      <div className="mb-4">
        <p className="text-sm font-semibold text-zinc-800">월별 매출액</p>
        <p className="text-xs text-zinc-400 mt-0.5">전년 동기 대비 (단위: 백만원)</p>
      </div>
      <ResponsiveContainer width="100%" height={240}>
        <ComposedChart data={data} margin={{ top: 0, right: 10, left: -10, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f4f4f5" />
          <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#71717a" }} />
          <YAxis tick={{ fontSize: 11, fill: "#71717a" }} domain={[0, 450]} />
          <Tooltip formatter={(v: unknown) => [`₩${v}백만`, ""]} />
          <Legend wrapperStyle={{ fontSize: 12 }} />
          <Bar dataKey="매출" fill="#f59e0b" radius={[4, 4, 0, 0]} />
          <Line type="monotone" dataKey="yoy" name="전년 동기" stroke="#94a3b8" strokeWidth={2} strokeDasharray="4 2" dot={{ r: 3 }} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
