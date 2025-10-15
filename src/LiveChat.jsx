import React from 'react'
import LiveChatVideo from './LiveChatVideo'
import LiveChatWindow from './LiveChatWindow'

const LiveChat = () => {
  return (
    <div style={{display: 'flex'}}>
        <div style={{padding:'20px', margin:"20px"}}> 
            <LiveChatVideo />
        </div>
        <div style={{padding:'20px', margin:"20px"}}>
            <LiveChatWindow></LiveChatWindow>
        </div>
    </div>
  )
}

export default LiveChat