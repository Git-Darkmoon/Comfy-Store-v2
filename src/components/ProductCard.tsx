import { Product } from "@/utils/types"
import Image from "next/image"

function ProductCard({ image, name, price }: Product) {
  return (
    <article className="product-card">
      <Image
        priority
        className="product-card__image"
        src={image}
        alt={name}
        width={240}
        height={240}
      />
      <h3 className="product-card__name">{name}</h3>
      <p className="product-card__price">${price}</p>
    </article>
  )
}
export default ProductCard
