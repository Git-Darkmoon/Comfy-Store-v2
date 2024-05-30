import SliderCard from "./SliderCard"

const SliderData = [
  {
    id: 1,
    logo: "/assets/carousel/logoipsum001.webp",
  },
  {
    id: 2,
    logo: "/assets/carousel/logoipsum002.webp",
  },
  {
    id: 3,
    logo: "/assets/carousel/logoipsum003.webp",
  },
  {
    id: 4,
    logo: "/assets/carousel/logoipsum004.webp",
  },
  {
    id: 5,
    logo: "/assets/carousel/logoipsum005.webp",
  },
  {
    id: 6,
    logo: "/assets/carousel/logoipsum006.webp",
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
