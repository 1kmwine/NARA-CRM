import { ChevronRight } from "lucide-react";

const products = [
  { rank: 1, name: "Château Margaux 2018", region: "보르도", qty: 38, revenue: "₩30,400,000" },
  { rank: 2, name: "Opus One 2019", region: "캘리포니아", qty: 24, revenue: "₩19,200,000" },
  { rank: 3, name: "Penfolds Grange 2017", region: "호주", qty: 31, revenue: "₩15,500,000" },
  { rank: 4, name: "Sassicaia 2020", region: "이탈리아", qty: 20, revenue: "₩12,000,000" },
  { rank: 5, name: "DRC Romanée-Conti 2016", region: "부르고뉴", qty: 6, revenue: "₩11,400,000" },
];

export default function TopProductsTable() {
  return (
    <div className="bg-white rounded-xl border border-zinc-200">
      <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-100">
        <div>
          <p className="text-sm font-semibold text-zinc-800">판매 TOP 20</p>
          <p className="text-xs text-zinc-400 mt-0.5">이번달 판매량 기준</p>
        </div>
        <button className="text-xs text-accent-600 font-medium hover:underline flex items-center gap-1">
          전체 보기 <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-xs text-zinc-400 border-b border-zinc-50">
            <th className="px-5 py-2.5 font-medium w-8">#</th>
            <th className="px-5 py-2.5 font-medium">와인</th>
            <th className="px-5 py-2.5 font-medium text-right">수량</th>
            <th className="px-5 py-2.5 font-medium text-right">매출</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.rank} className="border-b border-zinc-50 hover:bg-zinc-50 transition-colors">
              <td className="px-5 py-2.5 text-xs font-bold text-zinc-300">#{p.rank}</td>
              <td className="px-5 py-2.5">
                <p className="font-medium text-zinc-800 text-xs">{p.name}</p>
                <p className="text-xs text-zinc-400">{p.region}</p>
              </td>
              <td className="px-5 py-2.5 text-right text-zinc-600 text-xs">{p.qty}병</td>
              <td className="px-5 py-2.5 text-right font-medium text-zinc-700 text-xs">{p.revenue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
