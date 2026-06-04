"use client";

import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { month: "1월", 수량: 420, yoy: 381 },
  { month: "2월", 수량: 487, yoy: 432 },
  { month: "3월", 수량: 451, yoy: 408 },
  { month: "4월", 수량: 538, yoy: 470 },
  { month: "5월", 수량: 512, yoy: 455 },
  { month: "6월", 수량: 584, yoy: 501 },
];

export default function MonthlyQtyChart() {
  return (
    <div className="bg-white rounded-xl border border-zinc-200 p-5">
      <div className="mb-4">
        <p className="text-sm font-semibold text-zinc-800">월별 판매 수량</p>
        <p className="text-xs text-zinc-400 mt-0.5">전년 동기 대비 (단위: 병)</p>
      </div>
      <ResponsiveContainer width="100%" height={240}>
        <ComposedChart data={data} margin={{ top: 0, right: 10, left: -10, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f4f4f5" />
          <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#71717a" }} />
          <YAxis tick={{ fontSize: 11, fill: "#71717a" }} domain={[0, 700]} />
          <Tooltip formatter={(v: unknown) => [`${String(v?.toLocaleString?.() ?? v)}병`, ""]} />
          <Legend wrapperStyle={{ fontSize: 12 }} />
          <Bar dataKey="수량" fill="#60a5fa" radius={[4, 4, 0, 0]} />
          <Line type="monotone" dataKey="yoy" name="전년 동기" stroke="#94a3b8" strokeWidth={2} strokeDasharray="4 2" dot={{ r: 3 }} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
