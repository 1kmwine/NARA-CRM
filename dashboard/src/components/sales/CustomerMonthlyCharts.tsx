"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const customerData: Record<string, { month: string; qty: number; amount: number }[]> = {
  "1": [
    { month: "1월", qty: 3, amount: 280 },
    { month: "2월", qty: 5, amount: 420 },
    { month: "3월", qty: 2, amount: 190 },
    { month: "4월", qty: 7, amount: 640 },
    { month: "5월", qty: 4, amount: 350 },
    { month: "6월", qty: 6, amount: 510 },
  ],
  "2": [
    { month: "1월", qty: 1, amount: 80 },
    { month: "2월", qty: 2, amount: 160 },
    { month: "3월", qty: 1, amount: 90 },
    { month: "4월", qty: 3, amount: 240 },
    { month: "5월", qty: 2, amount: 180 },
    { month: "6월", qty: 2, amount: 200 },
  ],
  "3": [
    { month: "1월", qty: 4, amount: 380 },
    { month: "2월", qty: 6, amount: 540 },
    { month: "3월", qty: 5, amount: 460 },
    { month: "4월", qty: 8, amount: 720 },
    { month: "5월", qty: 6, amount: 550 },
    { month: "6월", qty: 7, amount: 640 },
  ],
  "4": [
    { month: "1월", qty: 12, amount: 1800 },
    { month: "2월", qty: 15, amount: 2200 },
    { month: "3월", qty: 10, amount: 1500 },
    { month: "4월", qty: 18, amount: 2700 },
    { month: "5월", qty: 14, amount: 2100 },
    { month: "6월", qty: 16, amount: 2400 },
  ],
  "5": [
    { month: "1월", qty: 5, amount: 450 },
    { month: "2월", qty: 7, amount: 630 },
    { month: "3월", qty: 4, amount: 360 },
    { month: "4월", qty: 9, amount: 810 },
    { month: "5월", qty: 6, amount: 540 },
    { month: "6월", qty: 8, amount: 720 },
  ],
};

interface CustomerMonthlyChartsProps {
  customerId: string;
}

export default function CustomerMonthlyCharts({ customerId }: CustomerMonthlyChartsProps) {
  const data = customerData[customerId] ?? customerData["1"];
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-white rounded-xl border border-zinc-200 p-5">
        <div className="mb-4">
          <p className="text-sm font-semibold text-zinc-800">월별 구매 수량</p>
          <p className="text-xs text-zinc-400 mt-0.5">단위: 병</p>
        </div>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data} margin={{ top: 0, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f4f4f5" />
            <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#71717a" }} />
            <YAxis tick={{ fontSize: 11, fill: "#71717a" }} />
            <Tooltip formatter={(v: unknown) => [`${v}병`, "구매 수량"]} />
            <Line type="monotone" dataKey="qty" name="수량" stroke="#f59e0b" strokeWidth={2} dot={{ r: 3 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-white rounded-xl border border-zinc-200 p-5">
        <div className="mb-4">
          <p className="text-sm font-semibold text-zinc-800">월별 구매 금액</p>
          <p className="text-xs text-zinc-400 mt-0.5">단위: 만원</p>
        </div>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data} margin={{ top: 0, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f4f4f5" />
            <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#71717a" }} />
            <YAxis tick={{ fontSize: 11, fill: "#71717a" }} />
            <Tooltip formatter={(v: unknown) => [`₩${v}만`, "구매 금액"]} />
            <Line type="monotone" dataKey="amount" name="금액" stroke="#3b82f6" strokeWidth={2} dot={{ r: 3 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
