import React, { useEffect, useState } from 'react'
import './factsAboutCats.scss'
import { useHttp } from '../hooks/http.hook'

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
