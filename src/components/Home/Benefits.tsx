import { IconType } from "react-icons"
import { FaCreditCard, FaHandHoldingUsd, FaShippingFast } from "react-icons/fa"
import BenefitsCard from "./BenefitsCard"
import { FaShieldHalved } from "react-icons/fa6"
import SectionTitle from "../SectionTitle"

export type benefitsProps = {
  icon: IconType
  title: string
  text: string
}

const benefitsData: benefitsProps[] = [
  {
    icon: FaShippingFast,
    title: "Swift Shipping",
    text: "Get your orders delivered swiftly and securely, ensuring you receive your products in no time.",
  },
  {
    icon: FaCreditCard,
    title: "Secure Payments",
    text: "Enjoy peace of mind with our secure and hassle-free payment options, making your shopping experience smooth and secure.",
  },
  {
    icon: FaShieldHalved,
    title: "Trusted Retailer",
    text: "Shop with confidence knowing that you're choosing a trusted retailer known for reliability and exceptional customer service.",
  },
  {
    icon: FaHandHoldingUsd,
    title: "Competitive Pricing",
    text: " Discover competitive prices without compromising on quality, ensuring you get the best value for your money.",
  },
]

function Benefits() {
  return (
    <section className="benefits">
      <SectionTitle title="Why choose us" subtitle="Shop your way" />
      <div className="benefits__wrapper">
        {benefitsData.map((benefit) => {
          return <BenefitsCard key={benefit.title} {...benefit} />
        })}
      </div>
    </section>
  )
}
export default Benefits
