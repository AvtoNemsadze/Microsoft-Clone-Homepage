import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import dataslide from './content/dataslide.js';


function Slider() {
  const [image, setImage] = useState(dataslide);
  const [index, setIndex] = React.useState(0);

  // for dots
    const moveDot = index => {
      setIndex(index)
    }
  

  useEffect(() => {
    const lastIndex = image.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, image]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 12000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  

  return (
    <section className="section">
      <div className="section-center2">
        {image.map((person, personIndex) => {
          const { id, image} = person;

          let position = 'nextSlide';
          if (personIndex === index) {
            position = 'activeSlide';
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === image.length - 1)
          ) {
            position = 'lastSlide';
          }
        
          return (
            <article className={position} key={id}>
              <img src={image} alt='' className="person-img" />
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)} style={{background:'gray', border:'none'}}>
          <FiChevronLeft />
        </button>

        <button className="next" onClick={() => setIndex(index + 1)} style={{background:'gray', border:'none'}}>
          <FiChevronRight />
        </button>
      </div>

      <div className='mt-10 ml-10 justify-around'>
      <p className='slide-p'>
        This six-part, behind-the-scenes series covers the microsoft video<br />
        game console's scrappy beginnings-glitches and all.
      </p>
        <h1 className='slide-text'>Power On: The Story of Xbox</h1>
        {/* <h2>Take charge in the new<br/> year with Microsoft 365</h2> just for responsive */}
  
  <button className='mybtn' style={{background:'white'}}>
    <span style={{color:'black'}}>Watch now for free</span>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 74 74" height="34" width="34">
      <path fill="black" d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"></path>
    </svg>
  </button>

        {/* for responsive */}
  {/* <button className='mybtn2'>
    <span>Choose your<br/> Microsoft 365</span>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 74 74" height="34" width="34">
      <path fill="white" d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"></path>
    </svg>
  </button> */}

    </div>

        {/* for dots */}
      <div className="container-dots">
                {Array.from({length: 2}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={setImage === index + 1 ? "dots active" : "dots"}
                    ></div>
                ))}
            </div>
    </section>
  );
}

export default Slider;