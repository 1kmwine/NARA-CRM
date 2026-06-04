"use client";

import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "1월", newCustomers: 98, yoy: 82 },
  { month: "2월", newCustomers: 112, yoy: 95 },
  { month: "3월", newCustomers: 87, yoy: 74 },
  { month: "4월", newCustomers: 134, yoy: 109 },
  { month: "5월", newCustomers: 105, yoy: 88 },
  { month: "6월", newCustomers: 54, yoy: 78 },
];

export default function NewCustomerChart() {
  return (
    <div className="bg-white rounded-xl border border-zinc-200 p-5">
      <div className="mb-4">
        <p className="text-sm font-semibold text-zinc-800">캠페인 신규 구매 고객 추이</p>
        <p className="text-xs text-zinc-400 mt-0.5">전년 동기 대비</p>
      </div>
      <ResponsiveContainer width="100%" height={240}>
        <ComposedChart data={data} margin={{ top: 0, right: 10, left: -10, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f4f4f5" />
          <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#71717a" }} />
          <YAxis tick={{ fontSize: 11, fill: "#71717a" }} />
          <Tooltip formatter={(v: unknown) => [`${v}명`, ""]} />
          <Legend wrapperStyle={{ fontSize: 12 }} />
          <Bar dataKey="newCustomers" name="신규 고객" fill="#f59e0b" radius={[4, 4, 0, 0]} />
          <Line type="monotone" dataKey="yoy" name="전년동기" stroke="#94a3b8" strokeWidth={2} strokeDasharray="4 2" dot={{ r: 3 }} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
