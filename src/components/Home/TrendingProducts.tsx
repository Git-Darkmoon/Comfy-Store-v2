"use client"

import { useGetFeaturedProducts } from "@/lib/hooks"
import ProductCard from "../ProductCard"
import SectionTitle from "../SectionTitle"
import { ProductData } from "@/utils/types"

function TrendingProducts() {
  const { data, isLoading, isError } = useGetFeaturedProducts()

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Something went wrong</p>
  }

  return (
    <section className="trending">
      <SectionTitle title="Popular Right Now" subtitle="Featured products" />
      <main className="trending__products">
        {data?.data?.map((product: ProductData) => {
          return <ProductCard key={product.id} {...product} />
        })}
      </main>
    </section>
  )
}
export default TrendingProducts
