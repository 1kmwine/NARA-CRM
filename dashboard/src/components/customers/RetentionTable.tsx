import { GradeBadge } from "@/components/ui/Badge";

const retention30 = [
  { name: "김민준", grade: "VIP", store: "청담점", lastVisit: "2026-06-03", totalAmount: "₩12,400,000" },
  { name: "박서연", grade: "일반", store: "강남점", lastVisit: "2026-06-02", totalAmount: "₩3,200,000" },
  { name: "이도윤", grade: "VIP", store: "분당점", lastVisit: "2026-06-01", totalAmount: "₩8,700,000" },
];

const retention60 = [
  ...retention30,
  { name: "정하은", grade: "VVIP", store: "청담점", lastVisit: "2026-05-15", totalAmount: "₩87,500,000" },
  { name: "최준서", grade: "VIP", store: "압구정점", lastVisit: "2026-05-10", totalAmount: "₩19,300,000" },
];

const retention90 = [
  ...retention60,
  { name: "강지원", grade: "일반", store: "강남점", lastVisit: "2026-04-28", totalAmount: "₩2,100,000" },
  { name: "조민서", grade: "VIP", store: "청담점", lastVisit: "2026-04-20", totalAmount: "₩7,800,000" },
];

export const retentionData = { "30": retention30, "60": retention60, "90": retention90 };

interface RetentionTableProps {
  period: "30" | "60" | "90";
}

export default function RetentionTable({ period }: RetentionTableProps) {
  const data = retentionData[period];
  return (
    <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden">
      <div className="px-5 py-4 border-b border-zinc-100">
        <p className="text-sm font-semibold text-zinc-800">{period}일 이내 방문 고객</p>
        <p className="text-xs text-zinc-400 mt-0.5">총 {data.length}명</p>
      </div>
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-zinc-50 border-b border-zinc-100">
            <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500">고객명</th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500">등급</th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500">매장</th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500">최근 방문</th>
            <th className="px-4 py-3 text-right text-xs font-semibold text-zinc-500">누적 구매액</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="border-b border-zinc-50 hover:bg-zinc-50 transition-colors">
              <td className="px-4 py-3 font-medium text-zinc-800">{row.name}</td>
              <td className="px-4 py-3"><GradeBadge grade={row.grade} /></td>
              <td className="px-4 py-3 text-zinc-500">{row.store}</td>
              <td className="px-4 py-3 text-zinc-500">{row.lastVisit}</td>
              <td className="px-4 py-3 text-right font-medium text-zinc-700">{row.totalAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
