"use client"

import { Edit3 } from "lucide-react"

export function ContentInput({ className }: { className?: string }) {
  return (
    <div className={`flex gap-3 items-start relative w-full group ${className}`}>
      <div className="flex flex-1 items-start relative bg-white/50 p-3 rounded-lg border border-gray-100 group-hover:border-green-200 transition-colors">
        <p className="flex-1 font-medium leading-[1.6] text-gray-500 text-sm whitespace-pre-wrap">
          이 논문의 주요 기여점은 생성형 AI가 디지털 광고 시장에 미치는 영향을 정량적으로 분석했다는 점입니다.
        </p>
        <button className="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-100 rounded text-gray-400 transition-all">
            <Edit3 className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
