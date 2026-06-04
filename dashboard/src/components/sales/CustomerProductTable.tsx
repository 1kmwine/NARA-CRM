const productData: Record<string, { name: string; region: string; qty: number; amount: string }[]> = {
  "1": [
    { name: "Château Margaux 2018", region: "보르도", qty: 8, amount: "₩6,400,000" },
    { name: "Opus One 2019", region: "캘리포니아", qty: 5, amount: "₩4,000,000" },
    { name: "Penfolds Grange 2017", region: "호주", qty: 4, amount: "₩2,000,000" },
  ],
  "2": [
    { name: "Cloudy Bay Sauvignon 2023", region: "뉴질랜드", qty: 4, amount: "₩400,000" },
    { name: "Pinot Grigio 2022", region: "이탈리아", qty: 3, amount: "₩270,000" },
    { name: "Rioja Reserva 2018", region: "스페인", qty: 2, amount: "₩180,000" },
  ],
  "3": [
    { name: "Penfolds Grange 2017", region: "호주", qty: 12, amount: "₩6,000,000" },
    { name: "Barossa Shiraz 2020", region: "호주", qty: 8, amount: "₩2,000,000" },
    { name: "Ridge Monte Bello 2018", region: "캘리포니아", qty: 6, amount: "₩1,800,000" },
  ],
  "4": [
    { name: "Sassicaia 2020", region: "이탈리아", qty: 20, amount: "₩20,000,000" },
    { name: "DRC Romanée-Conti 2016", region: "부르고뉴", qty: 5, amount: "₩15,000,000" },
    { name: "Screaming Eagle 2019", region: "캘리포니아", qty: 8, amount: "₩12,000,000" },
    { name: "Petrus 2015", region: "포므롤", qty: 6, amount: "₩9,000,000" },
  ],
  "5": [
    { name: "Château Margaux 2018", region: "보르도", qty: 10, amount: "₩8,000,000" },
    { name: "Krug Grande Cuvée", region: "샴페인", qty: 6, amount: "₩3,000,000" },
    { name: "Antinori Tignanello 2019", region: "이탈리아", qty: 8, amount: "₩2,400,000" },
  ],
};

interface CustomerProductTableProps {
  customerId: string;
}

export default function CustomerProductTable({ customerId }: CustomerProductTableProps) {
  const data = productData[customerId] ?? productData["1"];
  return (
    <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden">
      <div className="px-5 py-4 border-b border-zinc-100">
        <p className="text-sm font-semibold text-zinc-800">구매 상품 목록</p>
        <p className="text-xs text-zinc-400 mt-0.5">구매액 높은 순</p>
      </div>
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-zinc-50 border-b border-zinc-100">
            <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500">와인명</th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500">지역</th>
            <th className="px-4 py-3 text-right text-xs font-semibold text-zinc-500">수량</th>
            <th className="px-4 py-3 text-right text-xs font-semibold text-zinc-500">구매액</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="border-b border-zinc-50 hover:bg-zinc-50 transition-colors">
              <td className="px-4 py-3 font-medium text-zinc-800 text-xs">{row.name}</td>
              <td className="px-4 py-3 text-zinc-500 text-xs">{row.region}</td>
              <td className="px-4 py-3 text-right text-zinc-600 text-xs">{row.qty}병</td>
              <td className="px-4 py-3 text-right font-medium text-zinc-700 text-xs">{row.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
