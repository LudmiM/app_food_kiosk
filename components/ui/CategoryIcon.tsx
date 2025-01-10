"use client"
import { Category } from "@prisma/client"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"

type CategoryIconProps = { category: Category }

export default function CategoryIcon({ category }: CategoryIconProps) {
    const params = useParams<{category:string}>()
    return (
        <Link href={`/orders/${category.slug}`} className={`${category.slug === params.category ? 'bg-amber-400' : ''} generic-flex gap-4 w-full border-t border-gray-200 py-4`} >
            <div className="w-16 h-16 relative">
                <Image src={`/icon_${category.slug}.svg`} alt={category.name} fill />
            </div>
            <span className='ml-4 text-xl font-medium'>{category.name}</span>
        </Link >
    )
}