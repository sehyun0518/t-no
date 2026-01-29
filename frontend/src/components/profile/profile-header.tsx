"use client"

export function ProfileHeader() {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-[1.75rem] font-bold text-gray-500 leading-[1.6]">내 정보</h1>
      <p className="text-gray-300 font-medium text-base leading-[1.6]">
        회원님의 소중한 정보를 안전하게 관리해드릴게요
      </p>
    </div>
  )
}
