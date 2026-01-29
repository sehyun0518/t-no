"use client"

export function CategoryHeader({ title, count }: { title: string, count: number }) {
  return (
    <div className="flex items-center gap-3">
        <h1 className="text-[1.75rem] font-bold text-gray-500 leading-[1.6]">
            {title}
        </h1>
        <div className="bg-gray-100 px-2.5 py-1 rounded-lg h-8 flex items-center justify-center min-w-[2.5rem]">
            <span className="text-gray-300 font-bold text-base">{count}</span>
        </div>
    </div>
  )
}
