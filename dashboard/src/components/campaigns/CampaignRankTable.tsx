const campaigns = [
  { rank: 1, name: "봄 와인 페어 2026", period: "2026.03-04", newCustomers: 148, revenue: "₩24,800,000" },
  { rank: 2, name: "발렌타인 데이 기프트", period: "2026.02", newCustomers: 112, revenue: "₩18,600,000" },
  { rank: 3, name: "신년 VIP 초청 시음회", period: "2026.01", newCustomers: 98, revenue: "₩15,200,000" },
  { rank: 4, name: "이탈리아 와인 위크", period: "2026.04", newCustomers: 87, revenue: "₩12,400,000" },
  { rank: 5, name: "부르고뉴 마스터클래스", period: "2026.03", newCustomers: 64, revenue: "₩11,800,000" },
  { rank: 6, name: "호주 와인 특별전", period: "2026.05", newCustomers: 76, revenue: "₩10,200,000" },
  { rank: 7, name: "여름 스파클링 프로모션", period: "2026.06", newCustomers: 54, revenue: "₩8,400,000" },
  { rank: 8, name: "아르헨티나 말벡 행사", period: "2026.05", newCustomers: 43, revenue: "₩7,200,000" },
  { rank: 9, name: "어머니날 기프트 패키지", period: "2026.05", newCustomers: 38, revenue: "₩6,800,000" },
  { rank: 10, name: "신규 입고 시음 이벤트", period: "2026.06", newCustomers: 29, revenue: "₩4,400,000" },
];

export default function CampaignRankTable() {
  return (
    <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden">
      <div className="px-5 py-4 border-b border-zinc-100">
        <p className="text-sm font-semibold text-zinc-800">캠페인 TOP 10</p>
        <p className="text-xs text-zinc-400 mt-0.5">신규 구매 고객 기준</p>
      </div>
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-zinc-50 border-b border-zinc-100">
            <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500">순위</th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500">캠페인명</th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500">기간</th>
            <th className="px-4 py-3 text-right text-xs font-semibold text-zinc-500">신규구매고객</th>
            <th className="px-4 py-3 text-right text-xs font-semibold text-zinc-500">매출</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((c) => (
            <tr key={c.rank} className="border-b border-zinc-50 hover:bg-zinc-50 transition-colors">
              <td className="px-4 py-3">
                <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${
                  c.rank <= 3 ? "bg-amber-100 text-amber-700" : "text-zinc-400"
                }`}>
                  {c.rank}
                </span>
              </td>
              <td className="px-4 py-3 font-medium text-zinc-800 text-xs">{c.name}</td>
              <td className="px-4 py-3 text-zinc-500 text-xs">{c.period}</td>
              <td className="px-4 py-3 text-right font-medium text-zinc-700 text-xs">{c.newCustomers}명</td>
              <td className="px-4 py-3 text-right font-medium text-zinc-700 text-xs">{c.revenue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
