import { PhotoIcon } from '@heroicons/react/24/outline'

export default function VideoInput() {
  return (
    <div className="flex gap-4 w-full border border-gray-200 rounded-md p-4 ">
      <PhotoIcon className="size-6" />
      {/* <span className="block mb-2 text-gray-700">Select an Image</span> */}
      <input type="file" />
    </div>
  )
}