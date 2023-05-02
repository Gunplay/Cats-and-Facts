import './factsAboutCats.scss'

const FactsAboutCats = ({ fact }) => {
  return (
    <div>
      <div className="fact__about-cat">
        {fact ? fact : "A tiger's stripes are like fingerprints"}
      </div>
    </div>
  )
}

export default FactsAboutCats
