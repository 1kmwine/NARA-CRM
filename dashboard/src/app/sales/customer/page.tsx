"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import CustomerSearchPanel, { customers } from "@/components/sales/CustomerSearchPanel";
import CustomerMonthlyCharts from "@/components/sales/CustomerMonthlyCharts";
import CustomerProductTable from "@/components/sales/CustomerProductTable";
import Link from "next/link";

const tabs = [
  { label: "TOP 20", href: "/sales" },
  { label: "월별 매출", href: "/sales/monthly" },
  { label: "고객별 분석", href: "/sales/customer" },
];

const customerStats: Record<string, { visits: number; bottles: number; avg: string }> = {
  "1": { visits: 12, bottles: 27, avg: "₩384,000" },
  "2": { visits: 6, bottles: 13, avg: "₩142,000" },
  "3": { visits: 18, bottles: 42, avg: "₩512,000" },
  "4": { visits: 24, bottles: 75, avg: "₩1,840,000" },
  "5": { visits: 15, bottles: 36, avg: "₩630,000" },
};

export default function CustomerSalesPage() {
  const [selectedId, setSelectedId] = useState("1");
  const selected = customers.find((c) => c.id === selectedId);
  const stats = customerStats[selectedId] ?? customerStats["1"];

  return (
    <>
      <Header title="판매 - 고객별 분석" />
      <main className="flex-1 p-6 space-y-6">
        {/* 탭 */}
        <div className="flex gap-1 bg-zinc-100 p-1 rounded-lg w-fit">
          {tabs.map((tab) => (
            <Link
              key={tab.href}
              href={tab.href}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                tab.href === "/sales/customer"
                  ? "bg-white text-zinc-800 shadow-sm"
                  : "text-zinc-500 hover:text-zinc-700"
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </div>

        <CustomerSearchPanel selectedId={selectedId} onSelect={setSelectedId} />

        {selected && (
          <>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-xl border border-zinc-200 p-5">
                <p className="text-xs text-zinc-500 mb-1">연 구매 횟수</p>
                <p className="text-3xl font-bold text-zinc-800">{stats.visits}<span className="text-sm font-normal text-zinc-400 ml-1">회</span></p>
              </div>
              <div className="bg-white rounded-xl border border-zinc-200 p-5">
                <p className="text-xs text-zinc-500 mb-1">구매 병수</p>
                <p className="text-3xl font-bold text-zinc-800">{stats.bottles}<span className="text-sm font-normal text-zinc-400 ml-1">병</span></p>
              </div>
              <div className="bg-white rounded-xl border border-zinc-200 p-5">
                <p className="text-xs text-zinc-500 mb-1">평균 구매 금액</p>
                <p className="text-2xl font-bold text-zinc-800">{stats.avg}</p>
              </div>
            </div>

            <CustomerMonthlyCharts customerId={selectedId} />
            <CustomerProductTable customerId={selectedId} />
          </>
        )}
      </main>
    </>
  );
}
