import Header from "@/components/layout/Header";
import { Users, TrendingUp, MessageSquare, Wine } from "lucide-react";

const kpiCards = [
  { label: "전체 고객", value: "284", change: "+12", icon: Users, color: "text-blue-600 bg-blue-50" },
  { label: "이번달 매출", value: "₩38,400,000", change: "+8.2%", icon: TrendingUp, color: "text-emerald-600 bg-emerald-50" },
  { label: "이번달 상담", value: "47", change: "+5", icon: MessageSquare, color: "text-purple-600 bg-purple-50" },
  { label: "보유 와인 종류", value: "136", change: "-3", icon: Wine, color: "text-amber-600 bg-amber-50" },
];

const recentConsultations = [
  { customer: "김민준", wine: "Château Margaux 2018", date: "2026-06-03", staff: "이지현" },
  { customer: "박서연", wine: "Opus One 2019", date: "2026-06-03", staff: "최현우" },
  { customer: "이도윤", wine: "Penfolds Grange 2017", date: "2026-06-02", staff: "이지현" },
  { customer: "정하은", wine: "Sassicaia 2020", date: "2026-06-02", staff: "박민서" },
  { customer: "최준서", wine: "DRC Romanée-Conti 2016", date: "2026-06-01", staff: "최현우" },
];

export default function DashboardPage() {
  return (
    <>
      <Header title="대시보드" />
      <main className="flex-1 p-6 space-y-6">
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
          {kpiCards.map((card) => (
            <div key={card.label} className="bg-white rounded-xl border border-zinc-200 p-5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs text-zinc-500 font-medium">{card.label}</p>
                  <p className="text-2xl font-bold text-zinc-900 mt-1">{card.value}</p>
                  <p className="text-xs text-emerald-600 mt-1 font-medium">{card.change} 전월 대비</p>
                </div>
                <div className={`p-2.5 rounded-lg ${card.color}`}>
                  <card.icon className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl border border-zinc-200">
          <div className="px-6 py-4 border-b border-zinc-100">
            <h2 className="text-sm font-semibold text-zinc-800">최근 상담 이력</h2>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-zinc-500 border-b border-zinc-100">
                <th className="px-6 py-3 font-medium">고객명</th>
                <th className="px-6 py-3 font-medium">와인</th>
                <th className="px-6 py-3 font-medium">날짜</th>
                <th className="px-6 py-3 font-medium">담당자</th>
              </tr>
            </thead>
            <tbody>
              {recentConsultations.map((row, i) => (
                <tr key={i} className="border-b border-zinc-50 hover:bg-zinc-50 transition-colors">
                  <td className="px-6 py-3 font-medium text-zinc-800">{row.customer}</td>
                  <td className="px-6 py-3 text-zinc-600">{row.wine}</td>
                  <td className="px-6 py-3 text-zinc-500">{row.date}</td>
                  <td className="px-6 py-3 text-zinc-600">{row.staff}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
