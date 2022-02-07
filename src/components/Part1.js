import React, {useState} from 'react';
import data1 from './content/data1'
import { FiChevronRight } from 'react-icons/fi';


function Part1() {
    const [cards, setCards] = useState(data1)
  return (
  <div className="section-2 md:grid grid-cols-2 xl:grid-cols-4 xl:mx-20">
      {cards.map((card)=> {
          const {id, image, title, desc, link} = card;

          return(
              <div key={id}  className="p-8">
                  <div className='fourimg'>
                      <img src={image} alt='img' className='myimg'/>
                      <h3 className="font-semibold text-xl mt-2 mb-1">
                          {title}
                        </h3>
                      <h5>{desc}</h5>
                      <buton className="cursor-pointer text-sky-800 font-semibold hover:underline flex">
                        {link} <FiChevronRight className='btn-icon mt-1.5'/>
                      </buton>
                  </div>
              </div>
          )
      })}
  </div>
  )
}

export default Part1;
