import Header from "@/components/layout/Header";
import KpiCard from "@/components/dashboard/KpiCard";
import GradeDistributionChart from "@/components/dashboard/GradeDistributionChart";
import StorePerformanceChart from "@/components/dashboard/StorePerformanceChart";
import GradeRevenueChart from "@/components/dashboard/GradeRevenueChart";
import MemberTrendChart from "@/components/dashboard/MemberTrendChart";
import { Users, ShoppingBag, UserPlus, CreditCard, Repeat, TrendingUp } from "lucide-react";

const kpis = [
  { label: "전체 회원수", value: "2,847", change: "+128", changeLabel: "전월 대비", icon: Users, color: "blue" as const },
  { label: "구매 회원수", value: "1,203", change: "+64", changeLabel: "전월 대비", icon: ShoppingBag, color: "emerald" as const },
  { label: "신규 회원", value: "128", change: "+23", changeLabel: "전월 대비", icon: UserPlus, color: "purple" as const },
  { label: "객단가", value: "₩384,000", change: "+8.2%", changeLabel: "전월 대비", icon: CreditCard, color: "amber" as const },
  { label: "구매빈도", value: "2.4회", change: "+0.3", changeLabel: "전월 대비", icon: Repeat, color: "rose" as const },
  { label: "방문율(구매율)", value: "42.3%", change: "+3.1%p", changeLabel: "전월 대비", icon: TrendingUp, color: "teal" as const },
];

export default function DashboardPage() {
  return (
    <>
      <Header title="CRM 종합 현황" />
      <main className="flex-1 p-6 space-y-6">
        {/* KPI 카드 */}
        <div className="grid grid-cols-3 xl:grid-cols-6 gap-4">
          {kpis.map((kpi) => (
            <KpiCard key={kpi.label} {...kpi} />
          ))}
        </div>

        {/* 차트 2열 그리드 — Amplitude 스타일 */}
        <div className="grid grid-cols-2 gap-4">
          <GradeDistributionChart />
          <StorePerformanceChart />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <MemberTrendChart />
          <GradeRevenueChart />
        </div>
      </main>
    </>
  );
}
