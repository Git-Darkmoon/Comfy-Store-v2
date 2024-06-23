"use client"

import { useGetProducts } from "@/lib/hooks"
import { type ProductData } from "@/utils/types"
import { Image } from "antd"

function ProductsPage() {
  const { data, isLoading, isError } = useGetProducts()

  const products = data?.data

  console.log(products)

  if (isLoading) {
    return <p>Loading...</p>
  }
  if (isError) {
    return <p>Something went wrong</p>
  }

  return (
    <main>
      {products?.map((eachProduct: ProductData) => {
        return (
          <article key={eachProduct.id}>
            <Image
              width={240}
              height={240}
              src={eachProduct.attributes.image}
              alt={eachProduct.attributes.title}
            />
            <h1>{eachProduct.attributes.title}</h1>
            <p>{eachProduct.attributes.description}</p>
          </article>
        )
      })}
    </main>
  )
}
export default ProductsPage
