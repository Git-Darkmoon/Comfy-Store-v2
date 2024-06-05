import Image from "next/image"

function About() {
  return (
    <section className="about">
      <div className="about__content">
        <h1 className="about__content-title">
          A Symphony of Style and Serenity in comfort
        </h1>
        <p className="about__content-text">
          Where luxury and comfort converge to create a haven for discerning
          individuals seeking to transform their living spaces. Established with
          a passion for redefining the essence of home, Comfy Store curates an
          exclusive collection of high-end furniture that embodies the perfect
          balance between sophistication and tranquility. Our meticulously
          crafted pieces are designed to elevate your lifestyle, reflecting the
          epitome of quiet luxury. Each item in our selection tells a story of
          timeless elegance, showcasing not just furniture, but an expression of
          refined taste and superior craftsmanship.
        </p>
      </div>
      <Image
        src={"/assets/about/comfyStore_aboutImg.webp"}
        alt="Luxury Italian Dining table for the about section"
        width={1000}
        height={1000}
        className="about__img"
        priority
      />
    </section>
  )
}
export default About
