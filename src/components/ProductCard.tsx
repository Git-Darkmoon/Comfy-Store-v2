import { Product } from "@/types"
import Image from "next/image"

function ProductCard({ image, name, price }: Product) {
  return (
    <article>
      <Image src={image} alt={name} width={240} height={240} />
      <h3>{name}</h3>
      <p>${price}</p>
    </article>
  )
}
export default ProductCard
