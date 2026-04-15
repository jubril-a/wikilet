import Image from "next/image"

export default function ProductCard() {
    return (
        <a href="#" className="group hover:bg-gray-100 w-60 rounded-md shrink-0 p-2">
            <div className="aspect-square rounded-md overflow-hidden">
                <Image className="transition-transform duration-500 group-hover:scale-115" src="/images/product.jpg" width={280} height={280} alt="" />
            </div>
            <div className="p-2">
                <p className="text-sm text-gray-700 mb-1">Vacation Rental</p>

                <h3 className="font-bold text-primary-1 group-hover:text-blue-600">Azure Horizon Villa</h3>
                <p className="text-sm text-gray-700 mb-1">Amalfi Coast, Italy</p>

                <p className="text-gray-700 text-sm"><span className="text-gray-800 font-extrabold tracking-tight text-lg">₦45,000</span>/night</p>
            </div>
        </a>
    )
}