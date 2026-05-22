'use client'

import { useState } from 'react'
import { TrashIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

type Props = {
    name: string
    value?: string
    onChange?: (base64: string) => void
}

export default function PhotoInput({ name, value, onChange }: Props) {
    const [base64, setBase64] = useState<string>(value ?? "")
    const [fileName, setFileName] = useState<string>("")
    const [fileSize, setFileSize] = useState<string>("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return

        setFileName(file.name)
        setFileSize((file.size / (1024 * 1024)).toFixed(1) + " MB")

        const reader = new FileReader()
        reader.onload = () => {
            const result = reader.result as string
            setBase64(result)
            onChange?.(result)
        }
        reader.readAsDataURL(file)
    }

    const handleClear = () => {
        setBase64("")
        setFileName("")
        setFileSize("")
        onChange?.("")
    }

    return (
        <div className="flex items-center gap-3 w-full border border-gray-200 rounded-lg p-3 mb-2 bg-white">
            {base64 ? (
                <Image
                    width={40}
                    height={40}
                    src={base64}
                    alt="preview"
                    className="w-10 h-10 rounded-md object-cover shrink-0"
                />
            ) : (
                <div className="w-10 h-10 rounded-md bg-red-50 border border-red-100 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 3h18M3 3v18" />
                    </svg>
                </div>
            )}

            <div className="flex-1 min-w-0">
                {base64 ? (
                    <>
                        <p className="text-sm text-gray-700 truncate">{fileName}</p>
                        <p className="text-xs text-gray-400">{fileSize}</p>
                    </>
                ) : (
                    <label className="cursor-pointer">
                        <p className="text-sm text-gray-400">Click to upload a photo</p>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleChange}
                            className="hidden"
                        />
                    </label>
                )}
            </div>

            {base64 ? (
                <button
                    type="button"
                    onClick={handleClear}
                    className="text-gray-300 hover:text-red-400 transition-colors shrink-0"
                    aria-label="Remove image"
                >
                    <TrashIcon className="w-5 h-5" />
                </button>
            ) : null}

            <input type="hidden" name={name} value={base64} />
        </div>
    )
}