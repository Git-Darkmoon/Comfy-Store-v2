import { Product } from "@/types"
import ProductCard from "../ProductCard"

const TrendingProductsData: Product[] = [
  {
    id: 1,
    name: "Light Bulb - Gold 24k",
    image: "/assets/trending/Luxury_Lightning.webp",
    price: 529,
  },
  {
    id: 2,
    name: "King Rosewood Bed",
    image: "/assets/trending/Luxury_Bedroom.webp",
    price: 2190,
  },
  {
    id: 3,
    name: "Italian High-end LR",
    image: "/assets/trending/Luxury_Living_Room.webp",
    price: 7219,
  },
]

function TrendingProducts() {
  return (
    <section>
      <header>
        <h3>Featured products</h3>

        <h1>Popular Right Now</h1>
      </header>
      <main>
        {TrendingProductsData.map((product) => {
          return <ProductCard key={product.id} {...product} />
        })}
      </main>
    </section>
  )
}
export default TrendingProducts
