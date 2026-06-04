"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { grade: "VVIP", 상향: 8, 하향: 3 },
  { grade: "VIP", 상향: 24, 하향: 11 },
  { grade: "일반", 상향: 96, 하향: 42 },
];

export default function GradeChangeFlowChart() {
  return (
    <div className="bg-white rounded-xl border border-zinc-200 p-5">
      <div className="mb-4">
        <p className="text-sm font-semibold text-zinc-800">등급별 상향/하향 현황</p>
        <p className="text-xs text-zinc-400 mt-0.5">이번 달 등급 변화 인원</p>
      </div>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={data} margin={{ top: 0, right: 10, left: -10, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f4f4f5" />
          <XAxis dataKey="grade" tick={{ fontSize: 12, fill: "#71717a" }} />
          <YAxis tick={{ fontSize: 11, fill: "#71717a" }} />
          <Tooltip formatter={(v: unknown) => [`${v}명`, ""]} />
          <Legend wrapperStyle={{ fontSize: 12 }} />
          <Bar dataKey="상향" fill="#10b981" radius={[4, 4, 0, 0]} />
          <Bar dataKey="하향" fill="#ef4444" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
