import Header from "@/components/layout/Header";
import GradeUpDownChart from "@/components/customers/GradeUpDownChart";
import VisitRetentionChart from "@/components/customers/VisitRetentionChart";
import GradeCustomerBarChart from "@/components/customers/GradeCustomerBarChart";
import GradeSalesBarChart from "@/components/customers/GradeSalesBarChart";
import { ArrowUpRight, ArrowDownRight, MessageSquare } from "lucide-react";

const gradeChanges = [
  { grade: "VVIP", up: 12, down: 5, color: "text-amber-600 bg-amber-50" },
  { grade: "VIP", up: 34, down: 18, color: "text-blue-600 bg-blue-50" },
  { grade: "일반", up: 58, down: 29, color: "text-zinc-600 bg-zinc-100" },
];

export default function SegmentsPage() {
  return (
    <>
      <Header title="고객 세그먼트 분석" />
      <main className="flex-1 p-6 space-y-6">

        {/* 등급 변화 요약 */}
        <div className="grid grid-cols-3 gap-4">
          {gradeChanges.map((g) => (
            <div key={g.grade} className="bg-white rounded-xl border border-zinc-200 p-5">
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${g.color}`}>{g.grade}</span>
                <button className="flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-600">
                  <MessageSquare className="w-3.5 h-3.5" /> MMS 발송
                </button>
              </div>
              <div className="flex gap-6">
                <div>
                  <div className="flex items-center gap-1 text-emerald-600">
                    <ArrowUpRight className="w-4 h-4" />
                    <span className="text-lg font-bold">{g.up}명</span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-0.5">등급 상향</p>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-red-500">
                    <ArrowDownRight className="w-4 h-4" />
                    <span className="text-lg font-bold">{g.down}명</span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-0.5">등급 하향</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 차트 2열 그리드 */}
        <div className="grid grid-cols-2 gap-4">
          <GradeCustomerBarChart />
          <GradeSalesBarChart />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <GradeUpDownChart />
          <VisitRetentionChart />
        </div>
      </main>
    </>
  );
}
