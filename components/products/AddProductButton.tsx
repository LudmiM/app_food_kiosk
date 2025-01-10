'use client'

import { useStore } from "@/src/store";
import { Product } from "@prisma/client";

type AddProductButtonProps = {
  product: Product;
}

export default function AddProductButton({ product }: AddProductButtonProps) {
  const addToCard = useStore((state) => {
    return state.addToCard
  })

  return (
    <button
      type="button"
      className="mt-5 bg-indigo-600 hover:bg-indigo-800 text-white w-full px-5 py-2 rounded-lg"
      onClick={() => addToCard(product)}
    >
      Agregar a carrito
    </button>
  )
}
