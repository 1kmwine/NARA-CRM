interface GradeBadgeProps {
  grade: string;
}

export function GradeBadge({ grade }: GradeBadgeProps) {
  const colorMap: Record<string, string> = {
    VVIP: "bg-amber-100 text-amber-700 border border-amber-200",
    VIP: "bg-blue-100 text-blue-700 border border-blue-200",
    일반: "bg-zinc-100 text-zinc-600 border border-zinc-200",
    임직원: "bg-purple-100 text-purple-700 border border-purple-200",
  };
  const cls = colorMap[grade] ?? "bg-zinc-100 text-zinc-600 border border-zinc-200";
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${cls}`}>
      {grade}
    </span>
  );
}
