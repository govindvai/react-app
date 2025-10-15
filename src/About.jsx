import React from 'react'
import { LANG } from './langConstant'

export const About = ({lang}) => {
    console.log(lang);
    const data = LANG[lang]
  return (
    <>
    <div>
        <h1>{data.title}</h1>
        <p>{data.desc}</p>
      </div>
      <div>
        <h1>{data.title2}</h1>
         <p>{data.desc}</p>
      </div>
      <div>
        <h1>{data.title3}</h1>
         <p>{data.desc}</p>
      </div>
      <div>
        <h1>{data.title4}</h1>
         <p>{data.desc}</p>
      </div>
    </>
  )
}
