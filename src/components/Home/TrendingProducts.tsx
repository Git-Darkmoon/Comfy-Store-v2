import { Product } from "@/types"
import ProductCard from "../ProductCard"

const TrendingProductsData: Product[] = [
  {
    id: 1,
    name: "24k Gold Light Bulb ",
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
    name: "Italian Living Room",
    image: "/assets/trending/Luxury_Living_Room.webp",
    price: 7219,
  },
]

function TrendingProducts() {
  return (
    <section className="trending">
      <header className="trending__header">
        <h3>Featured products</h3>

        <h1>Popular Right Now</h1>
      </header>
      <main className="trending__products">
        {TrendingProductsData.map((product) => {
          return <ProductCard key={product.id} {...product} />
        })}
      </main>
    </section>
  )
}
export default TrendingProducts
