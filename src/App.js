import './App.css'
import Cat from './cats/cat'
import FactsAboutCats from './factsAboutCats/factsAboutCats'
import Button from './button/button'
import Spinner from './spinner/Spinner'

import { catFetching, catFetched, fetchCatAndFact } from './action'

import { useHttp } from './hooks/http.hook'
import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createSelector } from 'reselect'

function App() {
  const dispatch = useDispatch()
  const { request } = useHttp()

  const cat = useSelector((state) => state.cat.cat)
  console.log('cat', cat)
  const isLoading = useSelector((state) => state.cat.catLoadingStatus)
  console.log('isLoading', isLoading)

  useEffect(() => {
    dispatch(fetchCatAndFact(request))
  }, [])

  return (
    <div className="App">
      {isLoading === 'loading' ? (
        <Spinner />
      ) : (
        <>
          <Cat />
          <FactsAboutCats />
        </>
      )}
      <Button />
    </div>
  )
}

export default App
