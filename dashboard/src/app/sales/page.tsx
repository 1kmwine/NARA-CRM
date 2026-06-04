import Header from "@/components/layout/Header";

const monthlySales = [
  { month: "1월", revenue: 28400000, orders: 42 },
  { month: "2월", revenue: 31200000, orders: 48 },
  { month: "3월", revenue: 29800000, orders: 45 },
  { month: "4월", revenue: 35600000, orders: 54 },
  { month: "5월", revenue: 33900000, orders: 51 },
  { month: "6월", revenue: 38400000, orders: 58 },
];

const topWines = [
  { rank: 1, name: "Château Margaux 2018", category: "보르도", sales: 18, revenue: "₩14,400,000" },
  { rank: 2, name: "Opus One 2019", category: "캘리포니아", sales: 12, revenue: "₩9,600,000" },
  { rank: 3, name: "Penfolds Grange 2017", category: "호주", sales: 15, revenue: "₩7,500,000" },
  { rank: 4, name: "Sassicaia 2020", category: "이탈리아", sales: 10, revenue: "₩6,000,000" },
  { rank: 5, name: "DRC Romanée-Conti 2016", category: "부르고뉴", sales: 3, revenue: "₩5,700,000" },
];

const maxRevenue = Math.max(...monthlySales.map((m) => m.revenue));

export default function SalesPage() {
  return (
    <>
      <Header title="판매/매출 현황" />
      <main className="flex-1 p-6 space-y-6">
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white rounded-xl border border-zinc-200 p-5">
            <p className="text-xs text-zinc-500 font-medium">이번달 매출</p>
            <p className="text-2xl font-bold text-zinc-900 mt-1">₩38,400,000</p>
            <p className="text-xs text-emerald-600 mt-1">+13.3% 전월 대비</p>
          </div>
          <div className="bg-white rounded-xl border border-zinc-200 p-5">
            <p className="text-xs text-zinc-500 font-medium">이번달 주문</p>
            <p className="text-2xl font-bold text-zinc-900 mt-1">58건</p>
            <p className="text-xs text-emerald-600 mt-1">+13.7% 전월 대비</p>
          </div>
          <div className="bg-white rounded-xl border border-zinc-200 p-5">
            <p className="text-xs text-zinc-500 font-medium">평균 주문금액</p>
            <p className="text-2xl font-bold text-zinc-900 mt-1">₩662,069</p>
            <p className="text-xs text-zinc-400 mt-1">전월 대비 -0.4%</p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-zinc-200 p-6">
          <h2 className="text-sm font-semibold text-zinc-800 mb-4">월별 매출 추이</h2>
          <div className="flex items-end gap-3 h-40">
            {monthlySales.map((m) => {
              const height = Math.round((m.revenue / maxRevenue) * 100);
              return (
                <div key={m.month} className="flex-1 flex flex-col items-center gap-1">
                  <span className="text-xs text-zinc-500">{(m.revenue / 10000000).toFixed(1)}천</span>
                  <div
                    className="w-full bg-amber-400 rounded-t-md transition-all"
                    style={{ height: `${height}%` }}
                  />
                  <span className="text-xs text-zinc-500">{m.month}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-zinc-200">
          <div className="px-6 py-4 border-b border-zinc-100">
            <h2 className="text-sm font-semibold text-zinc-800">판매 상위 와인 TOP 5</h2>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-zinc-500 border-b border-zinc-100">
                <th className="px-6 py-3 font-medium">순위</th>
                <th className="px-6 py-3 font-medium">와인명</th>
                <th className="px-6 py-3 font-medium">카테고리</th>
                <th className="px-6 py-3 font-medium">판매수</th>
                <th className="px-6 py-3 font-medium">매출</th>
              </tr>
            </thead>
            <tbody>
              {topWines.map((w) => (
                <tr key={w.rank} className="border-b border-zinc-50 hover:bg-zinc-50 transition-colors">
                  <td className="px-6 py-3 font-bold text-zinc-400">#{w.rank}</td>
                  <td className="px-6 py-3 font-medium text-zinc-800">{w.name}</td>
                  <td className="px-6 py-3 text-zinc-500">{w.category}</td>
                  <td className="px-6 py-3 text-zinc-600">{w.sales}병</td>
                  <td className="px-6 py-3 font-medium text-zinc-700">{w.revenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
