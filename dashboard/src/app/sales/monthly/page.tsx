import Header from "@/components/layout/Header";
import MonthlyRevenueChart from "@/components/sales/MonthlyRevenueChart";
import MonthlyQtyChart from "@/components/sales/MonthlyQtyChart";
import Link from "next/link";

const tabs = [
  { label: "TOP 20", href: "/sales" },
  { label: "월별 매출", href: "/sales/monthly" },
  { label: "고객별 분석", href: "/sales/customer" },
];

const monthlySummary = [
  { month: "1월", revenue: "₩284M", qty: 892, mom: "-", yoy: "+13.1%" },
  { month: "2월", revenue: "₩312M", qty: 978, mom: "+9.9%", yoy: "+12.2%" },
  { month: "3월", revenue: "₩298M", qty: 934, mom: "-4.5%", yoy: "+12.5%" },
  { month: "4월", revenue: "₩356M", qty: 1124, mom: "+19.5%", yoy: "+14.8%" },
  { month: "5월", revenue: "₩339M", qty: 1063, mom: "-4.8%", yoy: "+14.9%" },
  { month: "6월", revenue: "₩384M", qty: 1198, mom: "+13.3%", yoy: "+14.9%" },
];

export default function MonthlyPage() {
  return (
    <>
      <Header title="판매 - 월별 매출" />
      <main className="flex-1 p-6 space-y-6">
        {/* 탭 */}
        <div className="flex gap-1 bg-zinc-100 p-1 rounded-lg w-fit">
          {tabs.map((tab) => (
            <Link
              key={tab.href}
              href={tab.href}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                tab.href === "/sales/monthly"
                  ? "bg-white text-zinc-800 shadow-sm"
                  : "text-zinc-500 hover:text-zinc-700"
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </div>

        {/* 차트 2열 */}
        <div className="grid grid-cols-2 gap-4">
          <MonthlyRevenueChart />
          <MonthlyQtyChart />
        </div>

        {/* 요약 테이블 */}
        <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden">
          <div className="px-5 py-4 border-b border-zinc-100">
            <p className="text-sm font-semibold text-zinc-800">월별 매출 요약</p>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-zinc-50 border-b border-zinc-100">
                <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500">월</th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-zinc-500">매출</th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-zinc-500">수량</th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-zinc-500">전월대비</th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-zinc-500">전년대비</th>
              </tr>
            </thead>
            <tbody>
              {monthlySummary.map((row) => (
                <tr key={row.month} className="border-b border-zinc-50 hover:bg-zinc-50 transition-colors">
                  <td className="px-4 py-3 font-medium text-zinc-800">{row.month}</td>
                  <td className="px-4 py-3 text-right font-medium text-zinc-700">{row.revenue}</td>
                  <td className="px-4 py-3 text-right text-zinc-600">{row.qty.toLocaleString()}병</td>
                  <td className={`px-4 py-3 text-right text-xs font-semibold ${
                    row.mom === "-" ? "text-zinc-400" :
                    row.mom.startsWith("+") ? "text-emerald-600" : "text-red-500"
                  }`}>{row.mom}</td>
                  <td className={`px-4 py-3 text-right text-xs font-semibold ${
                    row.yoy === "-" ? "text-zinc-400" :
                    row.yoy.startsWith("+") ? "text-emerald-600" : "text-red-500"
                  }`}>{row.yoy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
