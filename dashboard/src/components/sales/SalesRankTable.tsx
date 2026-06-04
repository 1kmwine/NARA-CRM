const products = [
  { rank: 1, name: "Château Margaux 2018", region: "보르도", thisMonth: 38, lastYear: 31, change: 22.6 },
  { rank: 2, name: "Opus One 2019", region: "캘리포니아", thisMonth: 24, lastYear: 28, change: -14.3 },
  { rank: 3, name: "Penfolds Grange 2017", region: "호주", thisMonth: 31, lastYear: 25, change: 24.0 },
  { rank: 4, name: "Sassicaia 2020", region: "이탈리아", thisMonth: 20, lastYear: 18, change: 11.1 },
  { rank: 5, name: "DRC Romanée-Conti 2016", region: "부르고뉴", thisMonth: 6, lastYear: 9, change: -33.3 },
  { rank: 6, name: "Screaming Eagle 2019", region: "캘리포니아", thisMonth: 14, lastYear: 10, change: 40.0 },
  { rank: 7, name: "Petrus 2015", region: "포므롤", thisMonth: 8, lastYear: 7, change: 14.3 },
  { rank: 8, name: "Krug Grande Cuvée", region: "샴페인", thisMonth: 22, lastYear: 19, change: 15.8 },
  { rank: 9, name: "Antinori Tignanello 2019", region: "이탈리아", thisMonth: 17, lastYear: 20, change: -15.0 },
  { rank: 10, name: "Ridge Monte Bello 2018", region: "캘리포니아", thisMonth: 11, lastYear: 9, change: 22.2 },
  { rank: 11, name: "Caymus Cabernet 2021", region: "나파밸리", thisMonth: 29, lastYear: 24, change: 20.8 },
  { rank: 12, name: "Cloudy Bay Sauvignon 2023", region: "뉴질랜드", thisMonth: 42, lastYear: 35, change: 20.0 },
  { rank: 13, name: "Barossa Shiraz 2020", region: "호주", thisMonth: 18, lastYear: 15, change: 20.0 },
  { rank: 14, name: "Rioja Reserva 2018", region: "스페인", thisMonth: 15, lastYear: 17, change: -11.8 },
  { rank: 15, name: "Chianti Classico 2019", region: "이탈리아", thisMonth: 23, lastYear: 20, change: 15.0 },
  { rank: 16, name: "Pouilly-Fumé 2022", region: "루아르", thisMonth: 13, lastYear: 11, change: 18.2 },
  { rank: 17, name: "Gewurztraminer 2021", region: "알자스", thisMonth: 9, lastYear: 12, change: -25.0 },
  { rank: 18, name: "Malbec Reserva 2020", region: "아르헨티나", thisMonth: 27, lastYear: 22, change: 22.7 },
  { rank: 19, name: "Pinot Grigio 2022", region: "이탈리아", thisMonth: 35, lastYear: 31, change: 12.9 },
  { rank: 20, name: "Mosel Riesling 2021", region: "독일", thisMonth: 12, lastYear: 10, change: 20.0 },
];

export default function SalesRankTable() {
  return (
    <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden">
      <div className="px-5 py-4 border-b border-zinc-100">
        <p className="text-sm font-semibold text-zinc-800">이번달 판매 TOP 20</p>
        <p className="text-xs text-zinc-400 mt-0.5">판매 수량 기준, 전년 동기 대비</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-zinc-50 border-b border-zinc-100">
              <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500">순위</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500">와인명</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500">지역</th>
              <th className="px-4 py-3 text-right text-xs font-semibold text-zinc-500">이번달</th>
              <th className="px-4 py-3 text-right text-xs font-semibold text-zinc-500">전년동기</th>
              <th className="px-4 py-3 text-right text-xs font-semibold text-zinc-500">증감%</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.rank} className="border-b border-zinc-50 hover:bg-zinc-50 transition-colors">
                <td className="px-4 py-3">
                  <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${
                    p.rank <= 3 ? "bg-amber-100 text-amber-700" : "text-zinc-400"
                  }`}>
                    {p.rank}
                  </span>
                </td>
                <td className="px-4 py-3 font-medium text-zinc-800 text-xs">{p.name}</td>
                <td className="px-4 py-3 text-zinc-500 text-xs">{p.region}</td>
                <td className="px-4 py-3 text-right text-zinc-700 text-xs">{p.thisMonth}병</td>
                <td className="px-4 py-3 text-right text-zinc-500 text-xs">{p.lastYear}병</td>
                <td className={`px-4 py-3 text-right text-xs font-semibold ${p.change >= 0 ? "text-emerald-600" : "text-red-500"}`}>
                  {p.change >= 0 ? "+" : ""}{p.change.toFixed(1)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
