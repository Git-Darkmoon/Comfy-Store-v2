import { benefitsProps } from "./Benefits"

function BenefitsCard(props: benefitsProps) {
  return (
    <article className="benefitsCard">
      <props.icon className="benefitsCard__icon" />
      <h3 className="benefitsCard__title">{props.title}</h3>
      <p className="benefitsCard__text">{props.text}</p>
    </article>
  )
}
export default BenefitsCard
