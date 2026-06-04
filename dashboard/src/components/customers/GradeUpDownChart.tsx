"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { grade: "일반→VIP", up: 34, down: -18 },
  { grade: "VIP→VVIP", up: 12, down: -5 },
  { grade: "VVIP→VIP", up: 0, down: -5 },
  { grade: "VIP→일반", up: 0, down: -18 },
];

export default function GradeUpDownChart() {
  return (
    <div className="bg-white rounded-xl border border-zinc-200 p-5">
      <div className="mb-4">
        <p className="text-sm font-semibold text-zinc-800">등급 변화 추이</p>
        <p className="text-xs text-zinc-400 mt-0.5">전월 대비 상향/하향 회원수</p>
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data} margin={{ top: 0, right: 0, left: -10, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f4f4f5" />
          <XAxis dataKey="grade" tick={{ fontSize: 10, fill: "#71717a" }} />
          <YAxis tick={{ fontSize: 11, fill: "#71717a" }} />
          <Tooltip />
          <Legend wrapperStyle={{ fontSize: 12 }} />
          <Bar dataKey="up" name="상향" fill="#34d399" radius={[4, 4, 0, 0]} />
          <Bar dataKey="down" name="하향" fill="#f87171" radius={[0, 0, 4, 4]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
