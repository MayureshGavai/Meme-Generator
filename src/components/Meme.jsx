// import React from 'react'
import { useState, useEffect } from "react"




const Meme = () => {
  
    // const [memeImage, setMemeImage] = useState("");

    const apiUrl = "https://api.imgflip.com/get_memes"

    const [meme, setMeme] = useState({
        topText : "",
        bottomText : "",
        randomImage: "https://i.imgflip.com/23ls.jpg"
    })

    const [allMemes, setAllMemes] = useState([])

    useEffect(() =>{
         fetch(apiUrl)
        .then (res=>(res.json()))
        .then(data=>(setAllMemes(data.data.memes)))
    },[])

    const getMemeImage= () =>{
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme =>({
            ...prevMeme, 
            randomImage : url
        }))
    }

    const handleChange= (e)=> {
        const {name, value} =e.target 
        setMeme(prevMeme => ({
            ...prevMeme,
            [name] : value
        }))
    }


    return (
    <div>
        <div className="form">
                <input type="text" placeholder="Top Text" name="topText" value={meme.topText} onChange={handleChange}/>
                <input type="text" placeholder="Bottom Text" name="bottomText" value={meme.bottomText} onChange={handleChange} />
                <button onClick={getMemeImage} >
                    Get a new meme image 🪟
                </button>
        </div>
        <div className="meme">
            <img src={meme.randomImage} className="meme-img"/>
            <h2 className="meme-text top">{meme.topText}</h2>
            <h2 className="meme-text bottom">{meme.bottomText}</h2>
        </div>
        <h5>Made with ❤️ by Mayuresh Gavai </h5>
    </div>
  )
}

export default Meme
