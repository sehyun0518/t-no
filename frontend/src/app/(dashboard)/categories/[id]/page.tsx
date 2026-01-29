"use client"

import { useState } from "react"
import { CategoryHeader } from "@/components/category/category-header"
import { CategoryFilterBar } from "@/components/category/category-filter-bar"
import { CategoryThesisGrid } from "@/components/category/category-thesis-grid"

export default function CategoryDetailPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState("전체")
  const [selectedIds, setSelectedIds] = useState<string[]>([])
  const categoryName = decodeURIComponent(params.id || "카테고리")

  const tabs = ["전체", "인공지능", "딥러닝", "머신러닝"]
  // Mock items
  const items = ["1", "2", "3", "4", "5", "6"]

  const toggleSelect = (id: string) => {
    setSelectedIds(prev => 
        prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    )
  }

  const isEditMode = selectedIds.length > 0

  return (
    <div className="flex flex-col items-center justify-start min-h-full bg-white pt-20 px-4">
      <div className="w-full max-w-[60rem] flex flex-col gap-10 pb-20">
        
        {/* Header Section */}
        <div className="flex flex-col gap-6 w-full">
            <CategoryHeader title={categoryName} count={20} />

            <CategoryFilterBar 
                activeTab={activeTab}
                tabs={tabs}
                onTabChange={setActiveTab}
                isEditMode={isEditMode}
                selectedCount={selectedIds.length}
                onSelectAll={() => setSelectedIds(items)}
                onClearSelection={() => setSelectedIds([])}
            />
        </div>

        {/* Paper Grid */}
        <CategoryThesisGrid 
            items={items}
            selectedIds={selectedIds}
            onToggleSelect={toggleSelect}
        />
      </div>
    </div>
  )
}
