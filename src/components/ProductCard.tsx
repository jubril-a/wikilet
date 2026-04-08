import Image from "next/image"

export default function ProductCard() {
    return (
        <div className="w-70 rounded-m overflow-hidden shrink-0">
            <div className="aspect-square">
                <Image src="/images/product.jpg" width={280} height={280} alt="" />
            </div>
            <div className="p-2">
                <p className="text-sm text-gray-700 mb-2">Vacation Rental</p>

                <h3 className="font-bold text-lg text-primary-1">Azure Horizon Villa</h3>
                <p className="text-sm text-gray-700 mb-2">Amalfi Coast, Italy</p>

                <p className="text-gray-700"><span className="text-[#1050a3] font-black text-2xl">$450</span>/ night</p>
            </div>
        </div>
    )
}