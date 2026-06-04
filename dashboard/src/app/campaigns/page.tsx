import Header from "@/components/layout/Header";
import CampaignRankTable from "@/components/campaigns/CampaignRankTable";
import NewCustomerChart from "@/components/campaigns/NewCustomerChart";

export default function CampaignsPage() {
  return (
    <>
      <Header title="캠페인 현황" />
      <main className="flex-1 p-6 space-y-6">
        {/* KPI 카드 */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white rounded-xl border border-zinc-200 p-5">
            <p className="text-xs text-zinc-500 mb-1">이번달 신규 구매 고객</p>
            <p className="text-3xl font-bold text-zinc-800">54<span className="text-sm font-normal text-zinc-400 ml-1">명</span></p>
            <p className="text-xs text-emerald-600 mt-1">+31% 전월 대비</p>
          </div>
          <div className="bg-white rounded-xl border border-zinc-200 p-5">
            <p className="text-xs text-zinc-500 mb-1">연간 캠페인 수</p>
            <p className="text-3xl font-bold text-zinc-800">10<span className="text-sm font-normal text-zinc-400 ml-1">건</span></p>
            <p className="text-xs text-zinc-400 mt-1">2026년 기준</p>
          </div>
          <div className="bg-white rounded-xl border border-zinc-200 p-5">
            <p className="text-xs text-zinc-500 mb-1">캠페인 총 매출</p>
            <p className="text-2xl font-bold text-zinc-800">₩119.8M</p>
            <p className="text-xs text-emerald-600 mt-1">+18% 전년 대비</p>
          </div>
        </div>

        {/* 차트 + 테이블 */}
        <div className="grid grid-cols-2 gap-4">
          <NewCustomerChart />
          <CampaignRankTable />
        </div>
      </main>
    </>
  );
}
