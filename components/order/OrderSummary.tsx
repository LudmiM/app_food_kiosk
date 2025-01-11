'use client'
import { useStore } from "@/src/store"
import ProductDetail from "./ProductDetail"

export default function OrderSummary() {
  const order = useStore((state) => state.order)
  return (
    <aside className="lg:h-screen lg:overflow-y-scroll md:w-64 lg:w-96 p-5">
        <h2 className="text-4xl text-center font-black">Mi pedido</h2>

        {order.length === 0 ? <p className="text-center my-10">El carrito esta vacio</p> : (
          <div className="mt-5">
              {order.map((item, index) => (
                <ProductDetail key={index} item={item} />
              ))}

          </div>
        )}
    </aside>
  )
}
