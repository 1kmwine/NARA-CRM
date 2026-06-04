const vvipData = [
  { rank: 1, name: "김○○", store: "청담점", totalAmount: 12480000, count: 34 },
  { rank: 2, name: "이○○", store: "강남점", totalAmount: 10920000, count: 28 },
  { rank: 3, name: "박○○", store: "청담점", totalAmount: 9840000, count: 31 },
  { rank: 4, name: "최○○", store: "분당점", totalAmount: 8760000, count: 22 },
  { rank: 5, name: "정○○", store: "강남점", totalAmount: 7980000, count: 19 },
  { rank: 6, name: "강○○", store: "압구정점", totalAmount: 7320000, count: 17 },
  { rank: 7, name: "조○○", store: "청담점", totalAmount: 6840000, count: 15 },
];

export default function VvipRankTable() {
  return (
    <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden">
      <div className="px-5 py-4 border-b border-zinc-100">
        <p className="text-sm font-semibold text-zinc-800">전 매장 VVIP RANK</p>
        <p className="text-xs text-zinc-400 mt-0.5">누적 구매액 기준</p>
      </div>
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-zinc-50 border-b border-zinc-100">
            <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500">순위</th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500">고객명</th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500">매장</th>
            <th className="px-4 py-3 text-right text-xs font-semibold text-zinc-500">누적 구매액</th>
            <th className="px-4 py-3 text-right text-xs font-semibold text-zinc-500">구매 횟수</th>
          </tr>
        </thead>
        <tbody>
          {vvipData.map((row) => (
            <tr key={row.rank} className="border-b border-zinc-50 hover:bg-zinc-50 transition-colors">
              <td className="px-4 py-3">
                <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${
                  row.rank === 1 ? "bg-amber-100 text-amber-700" :
                  row.rank === 2 ? "bg-zinc-200 text-zinc-600" :
                  row.rank === 3 ? "bg-orange-100 text-orange-700" :
                  "text-zinc-500"
                }`}>
                  {row.rank}
                </span>
              </td>
              <td className="px-4 py-3 font-medium text-zinc-800">{row.name}</td>
              <td className="px-4 py-3 text-zinc-500">{row.store}</td>
              <td className="px-4 py-3 text-right font-medium text-zinc-800">
                ₩{row.totalAmount.toLocaleString()}
              </td>
              <td className="px-4 py-3 text-right text-zinc-600">{row.count}회</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
