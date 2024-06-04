import { Testimonial } from "@/types"
import { Rate } from "antd"

function TestimonialCard({ rating, text, customer }: Testimonial) {
  return (
    <article className="testimonials__card">
      <Rate
        allowHalf
        disabled
        defaultValue={rating}
        className="testimonials__rating"
      />
      <p className="testimonials__text">{text}</p>
      <hr />
      <h4 className="testimonials__customer">{customer}</h4>
    </article>
  )
}
export default TestimonialCard
