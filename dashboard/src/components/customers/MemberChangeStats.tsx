import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { GradeBadge } from "@/components/ui/Badge";

const changes = [
  { grade: "VVIP", added: 8, removed: 3, total: 142 },
  { grade: "VIP", added: 24, removed: 11, total: 489 },
  { grade: "일반", added: 96, removed: 42, total: 1876 },
  { grade: "임직원", added: 2, removed: 0, total: 340 },
];

export default function MemberChangeStats() {
  return (
    <div className="bg-white rounded-xl border border-zinc-200 p-5">
      <div className="mb-4">
        <p className="text-sm font-semibold text-zinc-800">전월 대비 등급별 변화</p>
        <p className="text-xs text-zinc-400 mt-0.5">신규 편입 / 이탈 인원</p>
      </div>
      <div className="space-y-3">
        {changes.map((c) => (
          <div key={c.grade} className="flex items-center justify-between py-2.5 px-3 rounded-lg bg-zinc-50">
            <div className="flex items-center gap-3">
              <GradeBadge grade={c.grade} />
              <span className="text-xs text-zinc-500">{c.total.toLocaleString()}명</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-emerald-600">
                <ArrowUpRight className="w-4 h-4" />
                <span className="text-sm font-semibold">+{c.added}</span>
              </div>
              <div className="flex items-center gap-1 text-red-500">
                <ArrowDownRight className="w-4 h-4" />
                <span className="text-sm font-semibold">-{c.removed}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
