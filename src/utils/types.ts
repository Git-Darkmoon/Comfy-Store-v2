export type Product = {
  id: number
  name: string
  image: string
  price: number
}

export type Testimonial = {
  id: number
  rating: number
  text: string
  customer: string
}

export type User = {
  // username: string
  // jwt: string
  identifier: string
  password: string
}

export type userLoginAPIResponse = {
  readonly jwt: string
  readonly user: UserResponse
}

export type UserResponse = {
  readonly id: number
  readonly username: string
  readonly email: string
  readonly provider: string
  readonly confirmed: boolean
  readonly blocked: boolean
  readonly createdAt: Date
  readonly updatedAt: Date
}

export type loginCredentials = {
  identifier: string
  password: string
}

export type ProductsAPIResponse = {
  readonly data: ProductData[]
  readonly meta: Meta
}

export type ProductData = {
  readonly id: number
  readonly attributes: Attributes
}

export type Attributes = {
  readonly title: string
  readonly company: string
  readonly description: string
  readonly featured: boolean
  readonly createdAt: Date
  readonly updatedAt: Date
  readonly publishedAt: Date
  readonly category: string
  readonly image: string
  readonly price: string
  readonly shipping: boolean
  readonly colors: Color[]
}

export type Color = "#33FF57" | "#3366FF" | "#FF5733" | "#FFFF00"

export type Meta = {
  readonly pagination: Pagination
  readonly categories: string[]
  readonly companies: string[]
}

export type Pagination = {
  readonly page: number
  readonly pageSize: number
  readonly pageCount: number
  readonly total: number
}
