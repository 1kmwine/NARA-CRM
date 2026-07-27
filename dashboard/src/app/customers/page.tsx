import Header from "@/components/layout/Header";
import { Search, Plus, ChevronRight } from "lucide-react";

const customers = [
  { id: 1, name: "김민준", phone: "010-1234-5678", grade: "VIP", totalPurchase: "₩12,400,000", lastVisit: "2026-06-03", preferredWine: "보르도 레드" },
  { id: 2, name: "박서연", phone: "010-2345-6789", grade: "일반", totalPurchase: "₩3,200,000", lastVisit: "2026-06-03", preferredWine: "부르고뉴 화이트" },
  { id: 3, name: "이도윤", phone: "010-3456-7890", grade: "VIP", totalPurchase: "₩28,700,000", lastVisit: "2026-06-02", preferredWine: "호주 쉬라즈" },
  { id: 4, name: "정하은", phone: "010-4567-8901", grade: "VVIP", totalPurchase: "₩87,500,000", lastVisit: "2026-06-02", preferredWine: "이탈리아 슈퍼투스칸" },
  { id: 5, name: "최준서", phone: "010-5678-9012", grade: "VIP", totalPurchase: "₩19,300,000", lastVisit: "2026-06-01", preferredWine: "부르고뉴 레드" },
];

const gradeColors: Record<string, string> = {
  VVIP: "bg-amber-100 text-amber-800",
  VIP: "bg-blue-100 text-blue-800",
  일반: "bg-zinc-100 text-zinc-700",
};

export default function CustomersPage() {
  return (
    <>
      <Header title="고객 관리" />
      <main className="flex-1 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              placeholder="고객 이름, 연락처 검색..."
              className="pl-9 pr-4 py-2 text-sm border border-zinc-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-accent-500/40 w-64"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-accent-500 text-white text-sm font-medium rounded-lg hover:bg-accent-600 transition-colors">
            <Plus className="w-4 h-4" />
            고객 등록
          </button>
        </div>

        <div className="bg-white rounded-xl border border-zinc-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-zinc-500 border-b border-zinc-200">
                <th className="px-6 py-3 font-medium">고객명</th>
                <th className="px-6 py-3 font-medium">연락처</th>
                <th className="px-6 py-3 font-medium">등급</th>
                <th className="px-6 py-3 font-medium">누적 구매</th>
                <th className="px-6 py-3 font-medium">최근 방문</th>
                <th className="px-6 py-3 font-medium">선호 와인</th>
                <th className="px-6 py-3 font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {customers.map((c) => (
                <tr key={c.id} className="border-b border-zinc-50 hover:bg-zinc-50 transition-colors cursor-pointer">
                  <td className="px-6 py-3 font-medium text-zinc-800">{c.name}</td>
                  <td className="px-6 py-3 text-zinc-600">{c.phone}</td>
                  <td className="px-6 py-3">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${gradeColors[c.grade]}`}>
                      {c.grade}
                    </span>
                  </td>
                  <td className="px-6 py-3 text-zinc-700 font-medium">{c.totalPurchase}</td>
                  <td className="px-6 py-3 text-zinc-500">{c.lastVisit}</td>
                  <td className="px-6 py-3 text-zinc-600">{c.preferredWine}</td>
                  <td className="px-6 py-3">
                    <ChevronRight className="w-4 h-4 text-zinc-400" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
