import { formatCurrency } from "@/src/utils";
import { Product } from "@prisma/client";
import Image from "next/image"

type ProductCardProps = {
    product: Product;
}
export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="border bg-white">
            <Image src={`/products/${product.image}.jpg`} alt={product.image} width={400} height={500} quality={65} />
            <div className="p-5">
                <h3 className="text-2xl font-semibold">{product.name}</h3>
                <p className="mt-5 font-black text-3xl text-amber-500">{formatCurrency(product.price)}</p>
                <button type="button" className="mt-5 bg-indigo-600 hover:bg-indigo-800 text-white w-full px-5 py-2 rounded-lg">
                    Add to cart
                </button>
            </div>
        </div>

    )
}
