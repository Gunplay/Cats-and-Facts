import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchCatAndFact } from '../action'

import { useHttp } from '../hooks/http.hook'

const Button = () => {
  const dispatch = useDispatch()
  const { request } = useHttp()
  return (
    <button onClick={() => dispatch(fetchCatAndFact(request))}>
      Random Cat and Fact
    </button>
  )
}

export default Button
