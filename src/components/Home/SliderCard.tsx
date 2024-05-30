import Image from "next/image"

type SliderCardProps = {
  logo: string
}

function SliderCard({ logo }: SliderCardProps) {
  return (
    <article className="carousel__item">
      <Image src={logo} alt="Collab branding" width={240} height={100} />
    </article>
  )
}
export default SliderCard
