"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import { ThesisHeader } from "@/components/thesis/thesis-header"
import { ThesisPdfViewer } from "@/components/thesis/thesis-pdf-viewer"
import { ThesisSummarySidebar } from "@/components/thesis/thesis-summary-sidebar"

export default function ThesisDetailPage() {
  return (
    <div className="flex flex-row h-full w-full overflow-hidden bg-white">
        {/* CENTER: Main Paper Content */}
        <ScrollArea className="flex-1 h-full border-r border-gray-100">
            <div className="flex flex-col gap-0 max-w-[60rem] mx-auto pb-20">
                <ThesisHeader />
                <ThesisPdfViewer />
            </div>
        </ScrollArea>

        {/* RIGHT: Summary & AI Analysis */}
        <ThesisSummarySidebar />
    </div>
  )
}