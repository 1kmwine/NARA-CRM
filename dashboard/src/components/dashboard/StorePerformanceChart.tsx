"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { store: "청담", revenue: 142, members: 380 },
  { store: "강남", revenue: 98, members: 290 },
  { store: "한남", revenue: 87, members: 240 },
  { store: "여의도", revenue: 73, members: 198 },
  { store: "판교", revenue: 65, members: 175 },
];

export default function StorePerformanceChart() {
  return (
    <div className="bg-white rounded-xl border border-zinc-200 p-5">
      <div className="mb-4">
        <p className="text-sm font-semibold text-zinc-800">매장별 CRM 성과</p>
        <p className="text-xs text-zinc-400 mt-0.5">매출(백만원) · 구매회원수</p>
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data} margin={{ top: 0, right: 0, left: -10, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f4f4f5" />
          <XAxis dataKey="store" tick={{ fontSize: 12, fill: "#71717a" }} />
          <YAxis yAxisId="left" tick={{ fontSize: 11, fill: "#71717a" }} />
          <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11, fill: "#71717a" }} />
          <Tooltip />
          <Legend wrapperStyle={{ fontSize: 12 }} />
          <Bar yAxisId="left" dataKey="revenue" name="매출(백만)" fill="#f59e0b" radius={[3, 3, 0, 0]} />
          <Bar yAxisId="right" dataKey="members" name="구매회원" fill="#60a5fa" radius={[3, 3, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
