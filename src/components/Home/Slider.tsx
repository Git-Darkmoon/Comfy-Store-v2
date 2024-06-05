import SliderCard from "./SliderCard"

type SliderCardProps = {
  readonly id: number
  readonly logo: string
}

// BE CAREFUL WITH THIS DATA: The amount of items here must
// match the amount of items in the "$carousel__number-of-items"
// variable in the file "./Slider.scss" or the slider will not work properly

const SliderData: SliderCardProps[] = [
  {
    id: 1,
    logo: "/assets/carousel/logo-ethan.webp",
  },
  {
    id: 2,
    logo: "/assets/carousel/logo-herman.webp",
  },
  {
    id: 3,
    logo: "/assets/carousel/logo-crate.webp",
  },
  {
    id: 4,
    logo: "/assets/carousel/logoipsum004.webp",
  },
  {
    id: 5,
    logo: "/assets/carousel/logo-knoll.webp",
  },
  {
    id: 6,
    logo: "/assets/carousel/logo-west.webp",
  },
]

function Slider() {
  return (
    <section className="carousel">
      {SliderData.map((sliderItem) => {
        return <SliderCard key={sliderItem.id} {...sliderItem} />
      })}
    </section>
  )
}
export default Slider
