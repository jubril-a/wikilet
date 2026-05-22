"use client"

import { useState } from "react"
import ProfileForm from "./forms/ProfileForm"
import AccountForm from "./forms/AccountForm"
import { FullProfileData } from "./page"

type Tab = "profile" | "account"

const TABS: { id: Tab; label: string; title: string; description: string }[] = [
  {
    id: "profile",
    label: "Profile Details",
    title: "Agent Profile",
    description: "Manage your professional profile and how clients see you.",
  },
  {
    id: "account",
    label: "Account Details",
    title: "Payout Account Details",
    description: "Manage the bank account where your earnings will be sent.",
  },
]

export default function AccountSettings({ profileData, hasProfile }: { profileData: FullProfileData, hasProfile:boolean }) {
  const [activeTab, setActiveTab] = useState<Tab>("profile")

  const current = TABS.find((t) => t.id === activeTab)!

  return (
    <div className="">
        <div className="pb-8 border-b border-b-gray-200 flex justify-between">
            <div>
                <h1 className="text-2xl font-bold text-primary-1 mb-1">{current.title}</h1>
                <p className="text-gray-500 text-sm">{current.description}</p>
            </div>
            <div className="flex border border-gray-200 rounded-md overflow-hidden shrink-0">
                {TABS.map((tab) => (
                    <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 text-sm font-medium transition-colors first:border-r first:border-gray-200 ${
                        activeTab === tab.id
                        ? "bg-white text-gray-900"
                        : "bg-gray-100 text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                    }`}
                    >
                    {tab.label}
                    </button>
                ))}
            </div>
        </div>
        <div className="flex min-[440px]:bg-white">
            {activeTab === "profile" && <ProfileForm initialData={profileData} hasProfile={hasProfile} />}
            {activeTab === "account" && <AccountForm />}
        </div>
    </div>
  )
}