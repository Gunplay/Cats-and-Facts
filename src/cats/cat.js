import React, { useState } from 'react'
import './cat.scss'

const Cat = ({ cat }) => {
  return (
    <div>
      <img
        src={cat ? cat : 'https://cdn2.thecatapi.com/images/2kh.jpg'}
        alt="Random Cat"
        className="cat__main-picture"
      />
    </div>
  )
}

export default Cat
