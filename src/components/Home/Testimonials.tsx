import { Testimonial } from "@/types"
import TestimonialCard from "./TestimonialCard"
import SectionTitle from "../SectionTitle"
const allTestimonials: Testimonial[] = [
  {
    id: 1,
    rating: 5,
    text: "My living space became a haven of opulence and comfort, surpassing my expectations every day.",
    customer: "Sarah W.",
  },
  {
    id: 2,
    rating: 4.5,
    text: "Transformed my home into a sanctuary of elegance and relaxation, exceeding all expectations.",
    customer: "Michael K.",
  },
  {
    id: 3,
    rating: 5,
    text: "Redefined the ambiance of my home, bringing indulgence and comfort to a whole new level.",
    customer: "Emily S.",
  },
  {
    id: 4,
    rating: 4,
    text: "The exquisite craftsmanship and attention to detail have truly transformed my dining area into a luxurious space where every meal feels like a special occasion.",
    customer: "David L.",
  },
  {
    id: 5,
    rating: 4.8,
    text: "Added opulence and a haven of comfort to my home, a remarkable transformation.",
    customer: "Jessica P.",
  },
  {
    id: 6,
    rating: 4.7,
    text: "Completely redefined my living environment with impeccable luxury and comfort.",
    customer: "Alex M.",
  },
]

function Testimonials() {
  return (
    <section className="testimonials">
      <SectionTitle subtitle="some of our clients" title="Testimonials" />
      <div className="testimonials__wrapper">
        {allTestimonials.map((testimonial) => {
          return <TestimonialCard key={testimonial.id} {...testimonial} />
        })}
      </div>
    </section>
  )
}
export default Testimonials
