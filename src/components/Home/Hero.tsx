import Image from "next/image"

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
        <h1 className="hero__title">new arrivals</h1>
      </div>
    </section>
  )
}
export default Hero
