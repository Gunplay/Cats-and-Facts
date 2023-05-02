import React from 'react'
import './cat.scss'
import { useSelector } from 'react-redux'

const Cat = () => {
  const catUrl = useSelector((state) => state.cat.cat)
  console.log('catUrl', catUrl)

  return <img src={catUrl && catUrl.url} alt="cat" />
}

export default Cat
