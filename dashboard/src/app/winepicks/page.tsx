import Header from "@/components/layout/Header";
import ProductCategoryChart from "@/components/winepicks/ProductCategoryChart";
import AppSalesChart from "@/components/winepicks/AppSalesChart";
import { CheckCircle } from "lucide-react";

const appCustomers = [
  { name: "김민준", grade: "VIP", lastPurchase: "2026-06-03", orders: 8, amount: "₩2,400,000" },
  { name: "박서연", grade: "일반", lastPurchase: "2026-06-02", orders: 3, amount: "₩360,000" },
  { name: "이도윤", grade: "VIP", lastPurchase: "2026-06-01", orders: 12, amount: "₩4,800,000" },
  { name: "정하은", grade: "VVIP", lastPurchase: "2026-05-30", orders: 24, amount: "₩18,000,000" },
  { name: "최준서", grade: "VIP", lastPurchase: "2026-05-28", orders: 9, amount: "₩3,600,000" },
  { name: "강지원", grade: "일반", lastPurchase: "2026-05-25", orders: 4, amount: "₩480,000" },
];

const gradeColors: Record<string, string> = {
  VVIP: "bg-amber-100 text-amber-800",
  VIP: "bg-blue-100 text-blue-800",
  일반: "bg-zinc-100 text-zinc-700",
};

export default function WinepicksPage() {
  return (
    <>
      <Header title="자사몰 연동 (와인픽스)" />
      <main className="flex-1 p-6 space-y-6">
        {/* 연동 상태 배너 */}
        <div className="flex items-center gap-3 bg-emerald-50 border border-emerald-200 rounded-xl px-5 py-3.5">
          <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
          <div>
            <p className="text-sm font-semibold text-emerald-800">와인픽스 앱 연동 중</p>
            <p className="text-xs text-emerald-600">마지막 동기화: 2026-06-04 09:00</p>
          </div>
        </div>

        {/* 차트 2열 */}
        <div className="grid grid-cols-2 gap-4">
          <ProductCategoryChart />
          <AppSalesChart />
        </div>

        {/* 앱 구매 고객 목록 */}
        <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden">
          <div className="px-5 py-4 border-b border-zinc-100">
            <p className="text-sm font-semibold text-zinc-800">앱 구매 고객 목록</p>
            <p className="text-xs text-zinc-400 mt-0.5">최근 앱 구매 고객</p>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-zinc-50 border-b border-zinc-100">
                <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500">고객명</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500">등급</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500">최근 구매</th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-zinc-500">주문 수</th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-zinc-500">구매액</th>
              </tr>
            </thead>
            <tbody>
              {appCustomers.map((c, i) => (
                <tr key={i} className="border-b border-zinc-50 hover:bg-zinc-50 transition-colors">
                  <td className="px-4 py-3 font-medium text-zinc-800">{c.name}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${gradeColors[c.grade]}`}>
                      {c.grade}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-zinc-500">{c.lastPurchase}</td>
                  <td className="px-4 py-3 text-right text-zinc-600">{c.orders}건</td>
                  <td className="px-4 py-3 text-right font-medium text-zinc-700">{c.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
