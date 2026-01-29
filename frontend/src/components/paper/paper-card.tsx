import Image from "next/image"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface PaperCardProps {
  title: string
  description?: string
  thumbnailUrl?: string
  tags?: string[]
  className?: string
}

export function PaperCard({
  title,
  description,
  thumbnailUrl = "/placeholder-paper.jpg",
  tags = [],
  className,
}: PaperCardProps) {
  return (
    <Card className={cn("group overflow-hidden rounded-[1rem] shadow-[0_0.25rem_2.5rem_0_rgba(0,0,0,0.05)] border-none bg-white min-w-[18.125rem] w-full flex flex-col hover:translate-y-[-2px] transition-all duration-200 cursor-pointer", className)}>
      {/* Thumbnail */}
      <div className="relative h-[10.2rem] w-full bg-gray-100 shrink-0 flex items-center justify-center overflow-hidden">
        {thumbnailUrl !== "/placeholder-paper.jpg" ? (
             <Image
             src={thumbnailUrl}
             alt={title}
             fill
             className="object-cover"
           />
        ) : (
            // Placeholder for Paper (Abstract representation)
            <div className="flex flex-col items-center gap-2 opacity-20">
                <div className="w-12 h-16 border-2 border-gray-400 bg-white rounded-sm"></div>
                <div className="w-12 h-16 border-2 border-gray-400 bg-white rounded-sm -mt-12 ml-4"></div>
            </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col p-5 gap-4 h-full">
        <div className="space-y-2">
            <h3 className="font-bold text-base leading-[1.6] text-gray-500 line-clamp-2">
            {title}
            </h3>
            {description && (
            <p className="font-medium text-sm leading-[1.6] text-gray-300 line-clamp-2">
                {description}
            </p>
            )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag, index) => (
            <div 
              key={index} 
              className="bg-gray-100 px-2.5 py-1.5 rounded-[0.5rem] flex items-center justify-center"
            >
              <span className="text-gray-400 text-xs font-medium leading-none">
                # {tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}