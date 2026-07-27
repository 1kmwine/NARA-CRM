import Header from "@/components/layout/Header";
import { Plus } from "lucide-react";

const consultations = [
  { id: 1, customer: "김민준", date: "2026-06-03", staff: "이지현", wine: "Château Margaux 2018", note: "보르도 그랑크뤼 추천 요청. 빈티지 2018, 2019 비교 상담.", result: "구매" },
  { id: 2, customer: "박서연", date: "2026-06-03", staff: "최현우", wine: "Opus One 2019", note: "선물용 고급 와인 탐색. 캘리포니아 프리미엄 라인업 안내.", result: "구매" },
  { id: 3, customer: "이도윤", date: "2026-06-02", staff: "이지현", wine: "Penfolds Grange 2017", note: "호주 쉬라즈 컬렉션 관심. 다음 방문 시 시음 행사 안내.", result: "재방문 예약" },
  { id: 4, customer: "정하은", date: "2026-06-02", staff: "박민서", wine: "Sassicaia 2020", note: "이탈리아 슈퍼투스칸 전 빈티지 구비 현황 문의. 2019, 2020 재고 확인.", result: "구매" },
  { id: 5, customer: "최준서", date: "2026-06-01", staff: "최현우", wine: "DRC Romanée-Conti 2016", note: "부르고뉴 DRC 라인업 상담. 투자 목적 와인 선택 조언 요청.", result: "검토중" },
];

const resultColors: Record<string, string> = {
  구매: "bg-emerald-100 text-emerald-800",
  "재방문 예약": "bg-blue-100 text-blue-800",
  검토중: "bg-amber-100 text-amber-800",
};

export default function ConsultationsPage() {
  return (
    <>
      <Header title="상담 이력" />
      <main className="flex-1 p-6">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-zinc-500">총 {consultations.length}건의 상담 이력</p>
          <button className="flex items-center gap-2 px-4 py-2 bg-accent-500 text-white text-sm font-medium rounded-lg hover:bg-accent-600 transition-colors">
            <Plus className="w-4 h-4" />
            상담 등록
          </button>
        </div>

        <div className="space-y-3">
          {consultations.map((c) => (
            <div key={c.id} className="bg-white rounded-xl border border-zinc-200 p-5 hover:border-zinc-300 transition-colors cursor-pointer">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-zinc-200 flex items-center justify-center text-sm font-bold text-zinc-600 shrink-0">
                    {c.customer[0]}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-zinc-800 text-sm">{c.customer}</span>
                      <span className="text-xs text-zinc-400">{c.date}</span>
                      <span className="text-xs text-zinc-400">· 담당: {c.staff}</span>
                    </div>
                    <p className="text-xs font-medium text-amber-700 mt-0.5">{c.wine}</p>
                    <p className="text-sm text-zinc-600 mt-1.5">{c.note}</p>
                  </div>
                </div>
                <span className={`px-2.5 py-1 rounded-full text-xs font-medium shrink-0 ${resultColors[c.result]}`}>
                  {c.result}
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
