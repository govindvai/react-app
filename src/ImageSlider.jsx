import React, { useEffect, useState } from 'react'

  const images = [
    "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
    "https://piktochart.com/wp-content/uploads/2023/04/large-29.jpg",
    "https://i.pinimg.com/originals/2b/66/01/2b66016d5a1e2d230ecce59f8e673382.png",
    "https://i.pinimg.com/736x/5f/09/47/5f0947219a7f446e804e7e0055089fad.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoKMpEfmuwzKmwyl4reX0NW7-Ixgn1DCz6IvxSYpq_CQ&s",
  ];

export const ImageSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const prevSlide = () => {
        setActiveIndex((index)=> (index === 0 ? images.length - 1 : index - 1));
    }
    const nextSlide = () => {
        setActiveIndex((index)=> (index === images.length - 1 ? 0 : index + 1));
    }

    useEffect(()=> {
       const i = setInterval(() => {
            nextSlide();
        }, 3000);
        return clearInterval(i)
    }, [])

  return (
    <div>ImageSlider
        <div style={{ display:'flex', justifyContent: 'center', alignItems: 'center', height: '400px', position: 'relative'}}>
        <button onClick={prevSlide} >Prev</button>
    
            <img width='800px'  src={images[activeIndex]} alt="image" />
      
        <button onClick={nextSlide} >Next</button>

        </div>
    </div>
  )
}
