"use client"

import Loader from "@/components/Loader"
import ProductCard from "@/components/Products/ProductCard"
import Filters from "@/components/Products/Filters"
import { useAppSelector, useGetProducts } from "@/lib/hooks"
import { type ProductData } from "@/utils/types"

function ProductsPage() {
  const { data: AllProductsResponse, isLoading, isError } = useGetProducts()
  const { user } = useAppSelector((state) => state.user)

  if (isLoading) {
    return <Loader />
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
      <div className="filters__container">
        <Filters />
      </div>
      <main className="products__container">
        {AllProductsResponse?.data?.map((eachProduct: ProductData) => {
          return <ProductCard key={eachProduct.id} {...eachProduct} />
        })}
      </main>
    </section>
  )
}
export default ProductsPage
