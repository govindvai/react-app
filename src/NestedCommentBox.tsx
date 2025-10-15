import React from 'react'
import { Comment } from './NestedComment';



export const NestedCommentBox = ({ username, comment, replies }: Comment) => {
  return (
    <>
          <div style={{paddingLeft: '50px'}} >
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <img width={"50px"} height={"50px"} style={{ borderRadius: '50%' }} src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png" alt="user profile" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <p style={{ fontWeight: '600' }}>{username}</p>
                  <span>{comment}</span>
              </div>
              </div>
              {
                replies && replies.map((commnet, index)=> (
                    <div style={{ borderLeft: '2px solid black'}}>
                        <NestedCommentBox key={index} username={commnet.username} comment={commnet.comment} replies={commnet.replies} />
                    </div>
                ))
              }
            </div>
            
    </>
  )
}
