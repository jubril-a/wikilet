'use client'

import { PhotoIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function PhotoInput({ name }: { name: string }) {
    const [base64, setBase64] = useState<string>("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return

        const reader = new FileReader()
        reader.onload = () => setBase64(reader.result as string)
        reader.readAsDataURL(file)
    }

    return (
        <div className="flex gap-4 w-full border border-gray-200 rounded-md p-4 mb-2">
            <PhotoIcon className="size-6" />
            <input type="file" accept="image/*" onChange={handleChange} />
            <input type="hidden" name={name} value={base64} />
        </div>
    )
}