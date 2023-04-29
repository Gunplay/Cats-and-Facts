import './App.css'
import Cat from './cats/cat'
import FactsAboutCats from './factsAboutCats/factsAboutCats'
import Button from './button/button'
import { useState } from 'react'
import { useHttp } from './hooks/http.hook'

const apiUrl = process.env.REACT_APP_API_URL // RESTART NPM START
const apiKey = process.env.REACT_APP_API_KEY
const apiFact = process.env.REACT_APP_API_URL_FACT

function App() {
  const { request } = useHttp()
  const [data, setData] = useState([])

  const onHandlerRandomCatAndFact = async (e) => {
    e.preventDefault()
    // const resultCat[0].url

    try {
      const [catResult, factResult] = await Promise.all([
        request(`${apiUrl}images/search?api_key=${apiKey}`),
        request(`${apiFact}`),
      ])
      const [{ url }] = catResult
      const { fact } = factResult
      setData([url, fact])
    } catch (error) {
      console.log(error)
    }

    // const [{ url }] = await request(`${apiUrl}images/search?api_key=${apiKey}`)

    // const { fact } = await request(`${apiFact}`)
  }

  console.log('data', data)
  return (
    <div className="App">
      <Cat cat={data[0]} />
      <FactsAboutCats fact={data[1]} />
      <Button setData={setData} changeCat={onHandlerRandomCatAndFact} />
    </div>
  )
}

export default App
