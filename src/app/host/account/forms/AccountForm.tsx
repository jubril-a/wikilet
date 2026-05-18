"use client"

import { useState, useTransition } from "react"
// import { updatePayoutAccount } from "../../../features/account/actions"

type PayoutSchedule = "weekly" | "monthly" | "after_each_booking"

interface PayoutAccountForm {
  accountName: string
  accountNumber: string
  bankName: string
  payoutSchedule: PayoutSchedule
}

interface PayoutAccountProps {
  initialData?: PayoutAccountForm
}

const DEFAULT_FORM: PayoutAccountForm = {
  accountName: "",
  accountNumber: "",
  bankName: "",
  payoutSchedule: "monthly",
}

const PAYOUT_SCHEDULES: { value: PayoutSchedule; label: string; description: string }[] = [
  {
    value: "weekly",
    label: "Weekly",
    description: "Receive payouts every Monday for the previous week's bookings.",
  },
  {
    value: "monthly",
    label: "Monthly",
    description: "Receive a single payout on the 1st of each month.",
  },
  {
    value: "after_each_booking",
    label: "After each booking",
    description: "Receive a payout automatically after every completed booking.",
  },
]

const inputClass =
  "px-2 rounded-md bg-gray-200 hover:bg-gray-100 hover:border-gray-200 focus:bg-transparent border border-transparent focus:border-gray-300 focus:outline-0 h-11 w-full"

export default function AccountForm({ initialData }: PayoutAccountProps) {
  const [form, setForm] = useState<PayoutAccountForm>(initialData ?? DEFAULT_FORM)
  const [saved, setSaved] = useState<PayoutAccountForm>(initialData ?? DEFAULT_FORM)
  const [error, setError] = useState<string | null>(null)
  const [toastVisible, setToastVisible] = useState(false)
  const [isPending, startTransition] = useTransition()

  const isDirty =
    form.accountName !== saved.accountName ||
    form.accountNumber !== saved.accountNumber ||
    form.bankName !== saved.bankName ||
    form.payoutSchedule !== saved.payoutSchedule

  const handleSave = () => {
    setError(null)

    const formData = new FormData()
    formData.set("accountName", form.accountName)
    formData.set("accountNumber", form.accountNumber)
    formData.set("bankName", form.bankName)
    formData.set("payoutSchedule", form.payoutSchedule)

    startTransition(async () => {
      try {
        // await updatePayoutAccount(formData)
        setSaved(form)
        setToastVisible(true)
        setTimeout(() => setToastVisible(false), 2500)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong")
      }
    })
  }

  return (
    <div className="w-full max-w-2xl mx-auto px-6 py-6 min-[440px]:py-18">

      {/* ── Bank Details ── */}
      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
        Bank Details
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">

        {/* Account name */}
        <label className="sm:col-span-2">
          <span className="block mb-2 text-gray-700">Account name</span>
          <input
            type="text"
            value={form.accountName}
            onChange={(e) => setForm((f) => ({ ...f, accountName: e.target.value }))}
            className={inputClass}
          />
        </label>

        {/* Account number */}
        <label>
          <span className="block mb-2 text-gray-700">Account number</span>
          <input
            type="text"
            value={form.accountNumber}
            onChange={(e) => setForm((f) => ({ ...f, accountNumber: e.target.value }))}
            className={inputClass}
          />
        </label>

        {/* Bank name */}
        <label>
          <span className="block mb-2 text-gray-700">Bank name</span>
          <input
            type="text"
            value={form.bankName}
            onChange={(e) => setForm((f) => ({ ...f, bankName: e.target.value }))}
            className={inputClass}
          />
        </label>

      </div>

      <div className="border-b border-gray-200 mb-6" />

      {/* ── Payout Schedule ── */}
      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
        Preferred Payout Schedule
      </p>

      <div className="flex flex-col gap-3 mb-6">
        {PAYOUT_SCHEDULES.map(({ value, label, description }) => {
          const selected = form.payoutSchedule === value
          return (
            <button
              key={value}
              type="button"
              onClick={() => setForm((f) => ({ ...f, payoutSchedule: value }))}
              className={`flex items-start gap-3 w-full text-left px-4 py-3.5 rounded-md border transition-all ${
                selected
                  ? "border-primary-1 bg-primary-1"
                  : "border-gray-200 bg-gray-200 hover:bg-gray-100 hover:border-gray-300"
              }`}
            >
              {/* Radio indicator */}
              <span
                className={`mt-0.5 w-4 h-4 rounded-full border-2 shrink-0 flex items-center justify-center transition-all ${
                  selected ? "border-white" : "border-gray-400"
                }`}
              >
                {selected && (
                  <span className="w-2 h-2 rounded-full bg-white block" />
                )}
              </span>

              <span>
                <span
                  className={`block text-sm font-medium ${
                    selected ? "text-white" : "text-gray-800"
                  }`}
                >
                  {label}
                </span>
                <span className={`block text-xs text-gray-500 mt-0.5 ${
                    selected ? "text-white/70" : "text-gray-800"
                  }`}>{description}</span>
              </span>
            </button>
          )
        })}
      </div>

      {/* Error */}
      {error && <p className="mt-4 text-sm text-red-500">{error}</p>}

      {/* Save button */}
      <div className="flex justify-end mt-6">
        <button
          onClick={handleSave}
          disabled={!isDirty || isPending}
          className={`text-sm font-medium px-5 py-2.5 rounded-md transition-all ${
            isDirty && !isPending
              ? "bg-primary-1 text-white hover:bg-primary-1/90 cursor-pointer"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          {isPending ? "Saving..." : "Save changes"}
        </button>
      </div>

      {/* Toast */}
      {toastVisible && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-sm px-4 py-2 rounded-md shadow whitespace-nowrap">
          Changes saved
        </div>
      )}
    </div>
  )
}