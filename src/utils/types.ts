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
