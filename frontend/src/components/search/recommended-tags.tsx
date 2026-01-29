"use client"

interface RecommendedTagsProps {
  onTagClick: (tag: string) => void
}

export function RecommendedTags({ onTagClick }: RecommendedTagsProps) {
  return (
    <div className="flex flex-col items-center gap-5 pt-10 animate-in fade-in duration-700">
        <div className="flex flex-wrap justify-center gap-3 max-w-[50rem]">
            {[
                "인공지능", "딥러닝", "머신러닝", "데이터 분석", "UX/UI", "프론트엔드"
            ].map((tag) => (
                <div 
                    key={tag} 
                    onClick={() => onTagClick(tag)}
                    className="border border-gray-200 rounded-[0.5rem] px-4 py-2 flex items-center justify-center bg-white cursor-pointer hover:bg-gray-50 transition-colors"
                >
                    <span className="text-gray-400 text-base font-medium"># {tag}</span>
                </div>
            ))}
        </div>
        <div className="flex flex-wrap justify-center gap-3 max-w-[40rem]">
            {[
                "리서치", "광고 트렌드", "디자인", "미디어"
            ].map((tag) => (
                <div 
                    key={tag} 
                    onClick={() => onTagClick(tag)}
                    className="border border-gray-200 rounded-[0.5rem] px-4 py-2 flex items-center justify-center bg-white cursor-pointer hover:bg-gray-50 transition-colors"
                >
                    <span className="text-gray-400 text-base font-medium"># {tag}</span>
                </div>
            ))}
        </div>
    </div>
  )
}
