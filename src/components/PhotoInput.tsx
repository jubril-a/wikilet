import { PhotoIcon } from '@heroicons/react/24/outline'

export default function photoInput() {
  return (
    <div className="flex gap-4 w-full border border-gray-200 rounded-md p-4 mb-2">
      <PhotoIcon className="size-6" />
      <input type="file" />
    </div>
  )
}