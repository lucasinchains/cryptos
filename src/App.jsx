import React, { useEffect, useState } from "react"
import axios from "axios"
import Header from "./components/Header"
import Form from "./components/Form"
import VideoList from "./components/VideoList"
import Message from "./components/Message"
import DataInfo from "./components/DataInfo"
import "./styles/styles.css"
import { API_KEY } from "./components/keys/crypto-compare"
import { KEY_YT } from "./components/keys/youtube"


function App() {
  const [currency, setCurrency] = useState('');
  const [cryptocurrency, setCryptocurrency] = useState('');
  const [currencyPair, setCurrencyPair] = useState([]);

  const [data, setData] = useState([])
  const [videos, setVideos] = useState([]);

  const [error, setError] = useState(false);

  useEffect(async () => {
    if(currencyPair.length) {
      const URL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrency}&tsyms=${currency}&api_key=${API_KEY}`
      const response = await axios.get(URL);

      const responseVideos = await axios.get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            part: 'snippet',
            q: `${cryptocurrency} crypto news`,
            key: KEY_YT
          }
        }
      )

      setData([response.data.DISPLAY[`${cryptocurrency}`][`${currency}`]])
      setVideos(responseVideos.data.items)
      setCurrencyPair([])
    }
  }, [currencyPair]);
  
  const onFormSubmit = (e) => {
    e.preventDefault();

    let currencyIsEmpty = currency === "" || cryptocurrency === ""
    
    setError(currencyIsEmpty);
    setCurrencyPair([currency, cryptocurrency])
  }; 
  
  return (
    <div className='body'>
        <Header />
        <div className="row">
          <div className="column-crypto">
            {error && <Message color="red" message="All fields are required" />}
            <Form 
              setCurrency={setCurrency}
              setCryptocurrency={setCryptocurrency}
              onFormSubmit={onFormSubmit}
            />
            {data.length ? <DataInfo data={data} /> : null}
          </div>
          <div className="column-videos">
            {videos.length ? <VideoList videos={videos} /> : <Message color="yellow" message="Start a search to get the latest info" />}
          </div>
        </div>
    </div>
  )
}

export default App
