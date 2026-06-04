"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { month: "1월", 신규: 98, 누적: 2423 },
  { month: "2월", 신규: 112, 누적: 2535 },
  { month: "3월", 신규: 87, 누적: 2622 },
  { month: "4월", 신규: 134, 누적: 2756 },
  { month: "5월", 신규: 105, 누적: 2861 },
  { month: "6월", 신규: 128, 누적: 2989 },
];

export default function MemberTrendLine() {
  return (
    <div className="bg-white rounded-xl border border-zinc-200 p-5">
      <div className="mb-4">
        <p className="text-sm font-semibold text-zinc-800">신규/누적 회원 추이</p>
        <p className="text-xs text-zinc-400 mt-0.5">월별 신규 가입 및 누적 회원수</p>
      </div>
      <ResponsiveContainer width="100%" height={240}>
        <LineChart data={data} margin={{ top: 0, right: 10, left: -10, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f4f4f5" />
          <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#71717a" }} />
          <YAxis yAxisId="left" tick={{ fontSize: 11, fill: "#71717a" }} />
          <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11, fill: "#71717a" }} />
          <Tooltip />
          <Legend wrapperStyle={{ fontSize: 12 }} />
          <Line yAxisId="left" type="monotone" dataKey="신규" stroke="#f59e0b" strokeWidth={2} dot={{ r: 3 }} />
          <Line yAxisId="right" type="monotone" dataKey="누적" stroke="#3b82f6" strokeWidth={2} dot={{ r: 3 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
