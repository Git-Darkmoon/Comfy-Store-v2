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
  username: string
  jwt: string
}
