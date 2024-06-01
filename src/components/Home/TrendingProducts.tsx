import { Product } from "@/types"
import ProductCard from "../ProductCard"
import SectionTitle from "../SectionTitle"

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
      <SectionTitle title="Popular Right Now" subtitle="Featured products" />
      <main className="trending__products">
        {TrendingProductsData.map((product) => {
          return <ProductCard key={product.id} {...product} />
        })}
      </main>
    </section>
  )
}
export default TrendingProducts
