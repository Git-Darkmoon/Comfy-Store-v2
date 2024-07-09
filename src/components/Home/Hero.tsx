import Image from "next/image"
import Link from "next/link"

function Hero() {
  return (
    <section className="hero">
      <Image
        src={"/assets/heroBed.webp"}
        alt="Hero Bedroom image"
        width={1000}
        height={1000}
        priority
        className="hero__img"
      />
      <div className="hero__content">
        <p className="hero__subtitle">What you are waiting for</p>
        <Link href="/products">
          <h1 className="hero__title">new arrivals</h1>
        </Link>
      </div>
    </section>
  )
}
export default Hero
