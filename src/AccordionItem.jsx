import React from 'react'

export const AccordionItem = ({data, isopen, setIsOpen}) => {
    const {title, body} = data; 
  return (
    <div style={{border: '1px solid black'}} >
        <div style={{fontWeight: '700', fontSize: '14px', padding: '0.5rem', background: 'lightGrey', display: 'flex', justifyContent: 'space-between' }}
        onClick={()=> setIsOpen('data passed Clicked ' + title)}>
            <span>{title}</span>
            { isopen && <span>up</span>}
            { !isopen && <span>down</span>}
        </div>
        { isopen && <div style={{padding: '0.5rem'}}>{body}</div>}
    </div>
  )
}
