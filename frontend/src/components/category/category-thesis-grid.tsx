"use client"

import { ThesisCard } from "@/components/thesis/thesis-card"

interface CategoryThesisGridProps {
  items: string[]
  selectedIds: string[]
  onToggleSelect: (id: string) => void
}

export function CategoryThesisGrid({ items, selectedIds, onToggleSelect }: CategoryThesisGridProps) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 w-full">
          {items.map((i) => (
              <ThesisCard 
                  key={i}
                  id={`${i}`}
                  variant="category"
                  isSelected={selectedIds.includes(`${i}`)}
                  onSelect={() => onToggleSelect(`${i}`)}
                  title="디자인 현실적인 고민 무엇이든 물어보세요 | 공부법? 포트폴리오? 좋은 커리어?"
                  description="디자인 현실적인 고민 무엇이든 물어보세요 | 공부법? 포트폴리오? 좋은 커리어?"
                  tags={["디자인", "인공지능"]}
              />
          ))}
      </div>

      {/* More Button */}
      <div className="flex justify-center mt-10">
          <button className="text-gray-400 font-medium text-xl hover:text-gray-500 transition-colors">
              더보기
          </button>
      </div>
    </>
  )
}
