"use client"

import { ProfileHeader } from "@/components/profile/profile-header"
import { ProfileForm } from "@/components/profile/profile-form"
import { ProfileActions } from "@/components/profile/profile-actions"

export default function ProfilePage() {
  return (
    <div className="flex flex-col items-center justify-start min-h-full bg-white pt-[7.5rem] px-4">
      <div className="w-full max-w-[56.875rem] flex flex-col gap-10 pb-20">
        <ProfileHeader />
        <ProfileForm />
        <ProfileActions />
      </div>
    </div>
  )
}