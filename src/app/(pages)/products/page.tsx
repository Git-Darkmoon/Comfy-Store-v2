"use client"

import ProductCard from "@/components/ProductCard"
import { useAppSelector, useGetProducts } from "@/lib/hooks"
import { type ProductData } from "@/utils/types"

function ProductsPage() {
  const { data: AllProductsResponse, isLoading, isError } = useGetProducts()
  const { user } = useAppSelector((state) => state.user)

  if (isLoading) {
    return <p>Loading...</p>
  }
  if (isError) {
    return <p>Something went wrong</p>
  }

  if (!user) {
    return (
      <section className="products">
        <p>Login to see products</p>
      </section>
    )
  }

  return (
    <section className="products">
      <aside className="products__filters">algo</aside>
      <main className="products__container">
        {AllProductsResponse?.data?.map((eachProduct: ProductData) => {
          return <ProductCard key={eachProduct.id} {...eachProduct} />
        })}
      </main>
    </section>
  )
}
export default ProductsPage
