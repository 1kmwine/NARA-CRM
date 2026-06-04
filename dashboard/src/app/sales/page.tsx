import Header from "@/components/layout/Header";
import MonthlyRevenueChart from "@/components/sales/MonthlyRevenueChart";
import MonthlyQtyChart from "@/components/sales/MonthlyQtyChart";
import TopProductsTable from "@/components/sales/TopProductsTable";
import CustomerPurchaseChart from "@/components/sales/CustomerPurchaseChart";

export default function SalesPage() {
  return (
    <>
      <Header title="판매 / 매출 현황" />
      <main className="flex-1 p-6 space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <MonthlyRevenueChart />
          <MonthlyQtyChart />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <TopProductsTable />
          <CustomerPurchaseChart />
        </div>
      </main>
    </>
  );
}
