import React, { useState } from 'react'
import data from './content/section'
   
const ChooseYourMs = () => {
  const [cards, setCards] = useState(data)

  return (
    <main className="main">
      {cards.map((card) => {
        const { id, text, image } = card

        return (
          <blockquote key={id} className="choose">
            <img src={image} alt="card" className='card'/>
            <h4>
              {text}
            </h4>
          </blockquote>
        )
      })}
    </main>
  )
}
export default ChooseYourMs
