import './factsAboutCats.scss'
import { useSelector } from 'react-redux'

const FactsAboutCats = () => {
  const fact = useSelector((state) => state.cat.cat)

  return (
    <div>
      <div className="fact__about-cat">{fact && fact.fact}</div>
    </div>
  )
}

export default FactsAboutCats
