"use client"

import { useState } from "react"
import { SearchHeader } from "@/components/search/search-header"
import { SearchResults } from "@/components/search/search-results"
import { RecommendedTags } from "@/components/search/recommended-tags"

export default function SearchPage() {
  const [hasSearched, setHasSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setHasSearched(true)
    }
  }

  const handleTagClick = (tag: string) => {
    setSearchQuery(tag);
    setHasSearched(true);
  }

  return (
    <div className={`flex flex-col items-center justify-start min-h-full bg-white px-4 transition-all duration-500 ${hasSearched ? "pt-10" : "pt-[10rem]"}`}>
      <div className="w-full max-w-[64rem] flex flex-col items-center gap-[3.75rem]">
        {/* Header & Search Section */}
        <SearchHeader 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            handleSearch={handleSearch}
            hasSearched={hasSearched}
        />

        {/* Conditional Content: Results or Recommended Tags */}
        {hasSearched ? (
            <SearchResults />
        ) : (
            <RecommendedTags onTagClick={handleTagClick} />
        )}
      </div>
    </div>
  )
}