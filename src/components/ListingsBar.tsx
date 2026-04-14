'use client'

import { AdjustmentsHorizontalIcon } from "@heroicons/react/20/solid"
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

function ProductCard() {
    return (
        <div className="mb-2">
            <div className="aspect-4/3 overflow-hidden rounded-md">
                <Image className="w-full object-cover object-center" src="/images/product.jpg" width={280} height={280} alt="" />
            </div>
            <div className="p-2">
                <p className="text-sm text-gray-700 mb-1">Vacation Rental</p>

                <h3 className="font-bold text-primary-1">Azure Horizon Villa</h3>
                <p className="text-sm text-gray-700 mb-1">Amalfi Coast, Italy</p>

                <p className="text-gray-700 text-sm"><span className="text-[#1050a3] font-black text-xl">$450</span>/night</p>
            </div>
        </div>
    )
}

function ListingsHead({state}: {state:[boolean, Dispatch<SetStateAction<boolean>>]}) {

    const [isOpen, setIsOpen] = state

    return (
        <div className="flex justify-between items-center gap-4 border-b border-gray-200 py-4 mb-8 flex-wrap">
            <h2 className="text-xl font-bold shrink-0">1,256 Properties found</h2>
            <button onClick={() => {setIsOpen(!isOpen)}} className="text-gray-800 font-bold text-sm border border-gray-200 rounded-md hover:bg-gray-100 px-3 py-1 flex items-center gap-2 cursor-pointer min-[860px]:hidden">
                Filters
                <AdjustmentsHorizontalIcon className="size-5" />
            </button>
        </div>
    )
}

export default function ListingsBar({state}: {state:[boolean, Dispatch<SetStateAction<boolean>>]}) {
  return (
    <div className="grow">
      <ListingsHead state={state} />
      <main className="grid gap-3 min-[580px]:gap-4 min-[480px]:grid-cols-2">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </main>
    </div>
  );
}