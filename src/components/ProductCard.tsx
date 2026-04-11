import Image from "next/image"

export default function ProductCard() {
    return (
        <div className="w-60 rounded-md overflow-hidden shrink-0">
            <div className="aspect-square">
                <Image src="/images/product.jpg" width={280} height={280} alt="" />
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