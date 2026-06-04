"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import RetentionFunnelChart from "@/components/customers/RetentionFunnelChart";
import RetentionTable from "@/components/customers/RetentionTable";
import { MmsButton } from "@/components/ui/MmsButton";
import Link from "next/link";

const tabs = [
  { label: "개요", href: "/segments" },
  { label: "등급변화", href: "/segments/grade-changes" },
  { label: "재방문", href: "/segments/retention" },
];

const kpis = [
  { label: "30일 이내", value: 847, color: "emerald" },
  { label: "60일 이내", value: 1203, color: "blue" },
  { label: "90일 이내", value: 1580, color: "purple" },
];

type Period = "30" | "60" | "90";

export default function RetentionPage() {
  const [period, setPeriod] = useState<Period>("30");

  return (
    <>
      <Header title="고객 세그먼트 - 재방문" />
      <main className="flex-1 p-6 space-y-6">
        {/* 탭 */}
        <div className="flex gap-1 bg-zinc-100 p-1 rounded-lg w-fit">
          {tabs.map((tab) => (
            <Link
              key={tab.href}
              href={tab.href}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                tab.href === "/segments/retention"
                  ? "bg-white text-zinc-800 shadow-sm"
                  : "text-zinc-500 hover:text-zinc-700"
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </div>

        {/* KPI 카드 */}
        <div className="grid grid-cols-3 gap-4">
          {kpis.map((k) => (
            <div key={k.label} className="bg-white rounded-xl border border-zinc-200 p-5">
              <p className="text-xs text-zinc-500 mb-1">{k.label} 방문 고객</p>
              <p className="text-3xl font-bold text-zinc-800">{k.value.toLocaleString()}<span className="text-sm font-normal text-zinc-400 ml-1">명</span></p>
            </div>
          ))}
        </div>

        {/* 퍼널 차트 */}
        <RetentionFunnelChart />

        {/* 기간 탭 + 테이블 */}
        <div>
          <div className="flex gap-1 bg-zinc-100 p-1 rounded-lg w-fit mb-4">
            {(["30", "60", "90"] as Period[]).map((p) => (
              <button
                key={p}
                onClick={() => setPeriod(p)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  period === p ? "bg-white text-zinc-800 shadow-sm" : "text-zinc-500 hover:text-zinc-700"
                }`}
              >
                {p}일 이내
              </button>
            ))}
          </div>
          <RetentionTable period={period} />
        </div>

        {/* MMS */}
        <div className="flex flex-wrap gap-3">
          <MmsButton label="30일 재방문 고객" count={847} />
          <MmsButton label="60일 재방문 고객" count={1203} />
          <MmsButton label="90일 재방문 고객" count={1580} />
        </div>
      </main>
    </>
  );
}
