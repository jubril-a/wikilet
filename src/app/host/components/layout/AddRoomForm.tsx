'use client';
import { createRoom } from '@/src/features/property/actions';
import { useTransition } from 'react';
import { useRouter } from 'next/navigation';

export default function AddRoomForm({ propertyId }: { propertyId: string}) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    startTransition(async () => {
      const result = await createRoom(formData, propertyId);
      router.refresh()
    });
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-light text-gray-900 tracking-tight mb-3">Add a Room</h2>

      <form onSubmit={handleSubmit} className="flex items-stretch justify-between gap-0 bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm px-4 py-3">
        <div className='flex'>
          <div className="flex items-center gap-2 px-4 py-3 border-r border-gray-100">
            <svg className="w-4 h-4 text-gray-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <select name="roomType" className="border-none outline-none text-sm text-gray-600 bg-transparent cursor-pointer w-full focus:text-gray-900">
              <option value="" disabled>Room type</option>
              <option value="single">Single</option>
              <option value="double">Double</option>
              <option value="suite">Suite</option>
            </select>
          </div>

          <div className="flex items-center gap-2 px-4 py-3 border-r border-gray-100 w-36">
            <svg className="w-4 h-4 text-gray-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" />
            </svg>
            <input
              name="capacity"
              type="number"
              placeholder="Capacity"
              min={1}
              className="border-none outline-none text-sm text-gray-600 bg-transparent w-full placeholder:text-gray-400 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:text-gray-900"
            />
          </div>

          <div className="flex items-center gap-2 px-4 py-3 border-r border-gray-100 w-36">
            <span className="text-gray-300 text-sm shrink-0">$</span>
            <input
              name="basePrice"
              type="number"
              placeholder="Price"
              min={0}
              className="border-none outline-none text-sm text-gray-600 bg-transparent w-full placeholder:text-gray-400 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:text-gray-900"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="bg-primary-1 text-white text-sm font-medium px-6 cursor-pointer hover:bg-primary-2 hover:text-primary-1 rounded-md transition-colors disabled:opacity-40 whitespace-nowrap tracking-wide"
        >
          {isPending ? 'Adding…' : 'Add Room'}
        </button>

      </form>
    </div>
  );
}