import { GradeBadge } from "@/components/ui/Badge";

const gradeChanges = [
  { name: "김○○", from: "VIP", to: "VVIP", store: "청담점", amount: "₩8,400,000", direction: "up" },
  { name: "이○○", from: "일반", to: "VIP", store: "강남점", amount: "₩3,200,000", direction: "up" },
  { name: "박○○", from: "일반", to: "VIP", store: "분당점", amount: "₩3,500,000", direction: "up" },
  { name: "최○○", from: "VVIP", to: "VIP", store: "청담점", amount: "₩4,100,000", direction: "down" },
  { name: "정○○", from: "VIP", to: "일반", store: "압구정점", amount: "₩800,000", direction: "down" },
  { name: "강○○", from: "일반", to: "VIP", store: "강남점", amount: "₩3,100,000", direction: "up" },
  { name: "조○○", from: "VIP", to: "일반", store: "분당점", amount: "₩950,000", direction: "down" },
];

export default function GradeChangeTable() {
  return (
    <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden">
      <div className="px-5 py-4 border-b border-zinc-100">
        <p className="text-sm font-semibold text-zinc-800">등급 변화 고객 목록</p>
        <p className="text-xs text-zinc-400 mt-0.5">이번 달 등급이 변경된 고객</p>
      </div>
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-zinc-50 border-b border-zinc-100">
            <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500">고객명</th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500">변화</th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500">매장</th>
            <th className="px-4 py-3 text-right text-xs font-semibold text-zinc-500">이번달 구매액</th>
          </tr>
        </thead>
        <tbody>
          {gradeChanges.map((row, i) => (
            <tr key={i} className="border-b border-zinc-50 hover:bg-zinc-50 transition-colors">
              <td className="px-4 py-3 font-medium text-zinc-800">{row.name}</td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <GradeBadge grade={row.from} />
                  <span className={`text-xs font-bold ${row.direction === "up" ? "text-emerald-600" : "text-red-500"}`}>
                    {row.direction === "up" ? "▲" : "▼"}
                  </span>
                  <GradeBadge grade={row.to} />
                </div>
              </td>
              <td className="px-4 py-3 text-zinc-500">{row.store}</td>
              <td className="px-4 py-3 text-right font-medium text-zinc-700">{row.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
