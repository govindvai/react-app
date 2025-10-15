import React from 'react'

export const Shimmer = () => {
  return (
      Array(10).fill(0).map((n,i)=>(
        <div key={i} className="meme-card">
        <div style={{width:'256px', height:'256px', background: 'lightgray'}}>
        </div>
        <p style={{height:'18px', background: 'lightgray'}}></p>
      </div>
      ))
  )
}
