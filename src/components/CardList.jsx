import Card from "./Card"

const CardList = ({ data }) => {
  const cards = data.map((cardData) => (
    <Card
      key={cardData.id}
      {...cardData}
    />
  ))

  return (
    <section className="card-list container">
      {cards}
    </section>
  )
}

export default CardList;