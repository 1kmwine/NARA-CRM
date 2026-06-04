import Header from "@/components/layout/Header";
import GradeChangeFlowChart from "@/components/customers/GradeChangeFlowChart";
import GradeChangeTable from "@/components/customers/GradeChangeTable";
import { MmsButton } from "@/components/ui/MmsButton";
import Link from "next/link";

const tabs = [
  { label: "개요", href: "/segments" },
  { label: "등급변화", href: "/segments/grade-changes" },
  { label: "재방문", href: "/segments/retention" },
];

const summaryCards = [
  { grade: "VVIP", up: 8, down: 3, color: "amber" },
  { grade: "VIP", up: 24, down: 11, color: "blue" },
  { grade: "일반", up: 96, down: 42, color: "zinc" },
];

export default function GradeChangesPage() {
  return (
    <>
      <Header title="고객 세그먼트 - 등급변화" />
      <main className="flex-1 p-6 space-y-6">
        {/* 탭 */}
        <div className="flex gap-1 bg-zinc-100 p-1 rounded-lg w-fit">
          {tabs.map((tab) => (
            <Link
              key={tab.href}
              href={tab.href}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                tab.href === "/segments/grade-changes"
                  ? "bg-white text-zinc-800 shadow-sm"
                  : "text-zinc-500 hover:text-zinc-700"
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </div>

        {/* 요약 카드 */}
        <div className="grid grid-cols-3 gap-4">
          {summaryCards.map((c) => (
            <div key={c.grade} className="bg-white rounded-xl border border-zinc-200 p-5">
              <p className="text-sm font-semibold text-zinc-800 mb-3">{c.grade}</p>
              <div className="flex gap-6">
                <div>
                  <p className="text-xs text-zinc-400 mb-1">등급 상향</p>
                  <p className="text-2xl font-bold text-emerald-600">+{c.up}</p>
                </div>
                <div>
                  <p className="text-xs text-zinc-400 mb-1">등급 하향</p>
                  <p className="text-2xl font-bold text-red-500">-{c.down}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 차트 + 테이블 */}
        <div className="grid grid-cols-2 gap-4">
          <GradeChangeFlowChart />
          <GradeChangeTable />
        </div>

        {/* MMS */}
        <div className="flex flex-wrap gap-3">
          <MmsButton label="등급 상향 고객" count={128} />
          <MmsButton label="등급 하향 고객" count={56} />
        </div>
      </main>
    </>
  );
}
