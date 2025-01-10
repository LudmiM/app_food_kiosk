import { create } from "zustand";
import { OrderItem } from "./types";
import { Product } from "@prisma/client";

interface Store{
    order: OrderItem[];
    addToCard: (product: Product) => void;
}

export const useStore = create<Store>(() => ({
    order:[],
    addToCard: (product) => {
        console.log(product)
    }
}));