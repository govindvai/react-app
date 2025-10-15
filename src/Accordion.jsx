import React, { useState } from 'react'
import { AccordionItem } from './AccordionItem';

const data = [
  {
    title: "Accordion Item #1",
    body: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
  },
  {
    title: "Accordion Item #2",
    body: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
  },
  {
    title: "Accordion Item #3",
    body: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
  },
];

export const Accordion = () => {
  const [openIndex, setOpenIndex] = useState([0,1]) 
  return (
    <div style={{width: '50%', margin: '2.5rem auto 0 '}}>
      {
        data.map((item, i)=> <AccordionItem key={i} data={item}
         isopen 
        = { openIndex.findIndex((x)=> x == i) > -1 } 
        setIsOpen={(data) => {
          console.log(data)
          if (openIndex.findIndex((x)=> x == i) > -1) {
            
            setOpenIndex((openIndex) => openIndex.filter((x)=> x !== i))
          } else {
            const cc = openIndex.map(x => x)
            cc.push(i)
            setOpenIndex(cc)
          }
        }} 
        />)
      }
    </div>
  )
}
