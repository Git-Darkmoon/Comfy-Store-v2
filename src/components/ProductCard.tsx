import { ProductData } from "@/utils/types"
import Image from "next/image"
import Link from "next/link"

function ProductCard({ id, attributes }: ProductData) {
  const { image, title, price } = attributes

  return (
    <article className="product-card">
      <Link href={`/products/${id}`}>
        <Image
          className="product-card__image"
          src={image}
          alt={title}
          width={240}
          height={240}
          loading="lazy"
        />
        <h3 className="product-card__name">{title}</h3>
        <p className="product-card__price">${price}</p>
      </Link>
    </article>
  )
}
export default ProductCard
