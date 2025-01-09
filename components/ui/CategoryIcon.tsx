import { Category } from "@prisma/client"
import Link from "next/link"

type CategoryIconProps = { category: Category }

export default function CategoryIcon({ category }: CategoryIconProps) {
  return (
    <Link href={`/category/${category.id}`}>
      <img src={category.icon} alt={category.name} className='w-8 h-8' />     
        <span className='ml-4'>{category.name}</span>
    </Link>
  )
}