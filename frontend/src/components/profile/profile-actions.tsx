"use client"

import { Button } from "@/components/ui/button"

export function ProfileActions() {
  return (
    <div className="flex justify-end gap-3 pt-5">
        <Button variant="outline" className="h-14 px-8 rounded-xl border-gray-200 text-gray-400 font-bold hover:bg-gray-50 transition-colors">
            회원 탈퇴
        </Button>
        <Button className="h-14 px-10 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-300 font-bold transition-colors shadow-none">
            수정 완료
        </Button>
    </div>
  )
}
