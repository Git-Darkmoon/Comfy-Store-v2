type sectionTitleProps = {
  readonly title: string
  readonly subtitle: string
}

function SectionTitle({ title, subtitle }: sectionTitleProps) {
  return (
    <header className="section">
      <h3 className="section__subtitle">{subtitle}</h3>

      <h1 className="section__title">{title}</h1>
    </header>
  )
}
export default SectionTitle
