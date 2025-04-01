import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from './loader'

const API_KEY = "fwEi723jB8PS7U5w8bRS2oXkzyadHZSH"
const Tag = () => {

    const [gif, setGif] = useState('')
    const [loading, setLoading] = useState(false)
    const [tag, setTag] = useState('')
    
    async function fetchData() {
        setLoading(true)
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;;
        const {data} = await axios.get(url);
        // console.log(data);
        const imgSrc = data?.data?.images?.downsized_large?.url;
        // console.log(imgSrc);
        setGif(imgSrc);
        setLoading(false)
    }

    function changeHandler(event) {
        setTag(event.target.value)
    }

    useEffect( () => {
        fetchData()
    }, [])

    function clickHandler() {
        fetchData();
    }
  return (
    <div className='w-1/2 bg-red-400 rounded-lg mt-5 border-black flex flex-col items-center gap-y-5'>
      <h1 className='text-3xl font-bold'>Desired {tag} Gif</h1>
      {
        loading ? (<Loader />) : (<img src={gif} width="450" />)
      }
      <input 
      className='w-1/2 mb-2 mt-2 bg-white opacity-7 rounded-md p-1 text-center'
      onChange={changeHandler}
      value={tag}
      
      />
      <button className='w-1/2 mb-2 mt-2 bg-white opacity-7 rounded-md p-1' onClick={clickHandler}>Generate</button>
    </div>
  )
}

export default Tag
