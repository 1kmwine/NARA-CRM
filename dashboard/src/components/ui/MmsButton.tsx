"use client";

import { MessageSquare } from "lucide-react";

interface MmsButtonProps {
  label: string;
  count: number;
}

export function MmsButton({ label, count }: MmsButtonProps) {
  const handleClick = () => {
    alert(`MMS 발송 준비 중입니다\n대상: ${label} (${count}명)`);
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-accent-500 hover:bg-accent-600 text-white text-sm font-medium transition-colors"
    >
      <MessageSquare className="w-4 h-4" />
      {label} MMS 발송
      <span className="ml-1 bg-white/20 rounded-full px-2 py-0.5 text-xs">{count}명</span>
    </button>
  );
}
