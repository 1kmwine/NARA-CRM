import Header from "@/components/layout/Header";
import SalesRankTable from "@/components/sales/SalesRankTable";
import YoyCompareBar from "@/components/sales/YoyCompareBar";
import Link from "next/link";

const tabs = [
  { label: "TOP 20", href: "/sales" },
  { label: "월별 매출", href: "/sales/monthly" },
  { label: "고객별 분석", href: "/sales/customer" },
];

export default function SalesPage() {
  return (
    <>
      <Header title="판매 / 매출 현황" />
      <main className="flex-1 p-6 space-y-6">
        {/* 탭 */}
        <div className="flex gap-1 bg-zinc-100 p-1 rounded-lg w-fit">
          {tabs.map((tab) => (
            <Link
              key={tab.href}
              href={tab.href}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                tab.href === "/sales"
                  ? "bg-white text-zinc-800 shadow-sm"
                  : "text-zinc-500 hover:text-zinc-700"
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <SalesRankTable />
          <YoyCompareBar />
        </div>
      </main>
    </>
  );
}
