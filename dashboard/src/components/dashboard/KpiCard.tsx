import { LucideIcon } from "lucide-react";

const colorMap = {
  blue: "text-blue-600 bg-blue-50",
  emerald: "text-emerald-600 bg-emerald-50",
  purple: "text-purple-600 bg-purple-50",
  amber: "text-amber-600 bg-amber-50",
  rose: "text-rose-600 bg-rose-50",
  teal: "text-teal-600 bg-teal-50",
};

interface KpiCardProps {
  label: string;
  value: string;
  change: string;
  changeLabel: string;
  icon: LucideIcon;
  color: keyof typeof colorMap;
}

export default function KpiCard({ label, value, change, changeLabel, icon: Icon, color }: KpiCardProps) {
  const isPositive = change.startsWith("+");
  return (
    <div className="bg-white rounded-xl border border-zinc-200 p-4">
      <div className="flex items-start justify-between mb-3">
        <p className="text-xs text-zinc-500 font-medium leading-tight">{label}</p>
        <div className={`p-1.5 rounded-lg ${colorMap[color]}`}>
          <Icon className="w-3.5 h-3.5" />
        </div>
      </div>
      <p className="text-xl font-bold text-zinc-900">{value}</p>
      <p className={`text-xs mt-1 font-medium ${isPositive ? "text-emerald-600" : "text-red-500"}`}>
        {change} <span className="text-zinc-400 font-normal">{changeLabel}</span>
      </p>
    </div>
  );
}
