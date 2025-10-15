import React from 'react'

const LiveMessage = ({src, user, message}) => {
  return (
    <div style={{display:'flex'}}>
        <img style={{borderRadius:"50%"}} width='30px' height='30px' src={src} alt="image" />
        <p style={{padding: '5px', margin: '0px'}}><span style={{fontWeight: '700'}}>{user} -</span>
        <span style={{padding: '5px'}}>{message}</span></p>
    </div>
  )
}

export default LiveMessage