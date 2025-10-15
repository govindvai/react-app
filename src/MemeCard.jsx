import { useEffect, useState } from "react";


function MemeCard({meme}) {

  
  return (
    <>
      <div className="meme-card">
          <img src={meme.url} alt={meme.subreddit} width={"256px"} height={"256px"} />
          <p>{meme.author}</p>
        </div>

    </>
  )
}

export default MemeCard
