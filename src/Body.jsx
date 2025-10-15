import { useEffect, useState } from "react";
import MemeCard from "./MemeCard";
import { Shimmer } from "./Shimmer";


function Body() {
  const [memes, setMemes] = useState([]);
  const [showShimmer, setShowShimmer] = useState(false);

  const fectMeme = async ()=> {
    setShowShimmer(true);
    const meme =  await fetch("https://meme-api.com/gimme/20");
    const jsonMeme = await meme.json();
    console.log(jsonMeme);
    console.log(memes)
    setShowShimmer(false);
    setMemes((memes)=> [...memes, ...jsonMeme.memes] );
    
    
  }

  useEffect(() => {
    fectMeme();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleScroll = ()=> {
    if(window.scrollY + window.innerHeight >= document.body.scrollHeight) {
      fectMeme();
    }
  }


  
  return (
    <>
    <h1>Body World</h1>
    <div className="meme-container">
      
      {  memes.map((meme, i) => (
          <MemeCard  key={i} meme={meme}  />
      ))
    }
      { showShimmer && <Shimmer /> }
    </div>

    </>
  )
}

export default Body
