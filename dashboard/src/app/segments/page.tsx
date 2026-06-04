import Header from "@/components/layout/Header";
import GradeShareDonut from "@/components/customers/GradeShareDonut";
import MemberChangeStats from "@/components/customers/MemberChangeStats";
import VvipRankTable from "@/components/customers/VvipRankTable";
import MemberTrendLine from "@/components/customers/MemberTrendLine";
import { MmsButton } from "@/components/ui/MmsButton";
import Link from "next/link";

const tabs = [
  { label: "개요", href: "/segments" },
  { label: "등급변화", href: "/segments/grade-changes" },
  { label: "재방문", href: "/segments/retention" },
];

export default function SegmentsPage() {
  return (
    <>
      <Header title="고객 세그먼트 분석" />
      <main className="flex-1 p-6 space-y-6">
        {/* 탭 */}
        <div className="flex gap-1 bg-zinc-100 p-1 rounded-lg w-fit">
          {tabs.map((tab) => (
            <Link
              key={tab.href}
              href={tab.href}
              className="px-4 py-2 rounded-md text-sm font-medium bg-white text-zinc-800 shadow-sm"
            >
              {tab.label}
            </Link>
          ))}
        </div>

        {/* Row 1 */}
        <div className="grid grid-cols-2 gap-4">
          <GradeShareDonut />
          <MemberChangeStats />
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-2 gap-4">
          <VvipRankTable />
          <MemberTrendLine />
        </div>

        {/* MMS 버튼 */}
        <div className="flex flex-wrap gap-3">
          <MmsButton label="VVIP" count={142} />
          <MmsButton label="VIP" count={489} />
          <MmsButton label="일반" count={1876} />
          <MmsButton label="임직원" count={340} />
        </div>
      </main>
    </>
  );
}
