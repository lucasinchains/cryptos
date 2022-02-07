import React, { useEffect, useState } from "react"
import axios from "axios"
import Header from "./components/Header"
import Form from "./components/Form"
import VideoList from "./components/VideoList"
import Error from "./components/Error"
import DataInfo from "./components/DataInfo"
import Message from "./components/Message"
import { API_KEY } from "./components/apis/crypto-compare"
import { KEY_YT } from "./components/apis/youtube"


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
    
    if(currency === "" || cryptocurrency === "") {
      setError(true);
      return;
    } else {
      setError(false);
      setCurrencyPair([currency, cryptocurrency]);
    }
  }; 
  
  return (
    <div>
        <Header />
        <div className="ui grid">
          <div className="eight wide column">
            {error && <Error />}
            <Form 
              setCurrency={setCurrency}
              setCryptocurrency={setCryptocurrency}
              onFormSubmit={onFormSubmit}
            />
            <br></br>
            <br></br>
            {data.length ? <DataInfo data={data} /> : null}
          </div>
          <div className="eight wide column">
            {videos.length ? <VideoList videos={videos} /> : <Message message='Start a search to get the lastest updates' />}
          </div>
        </div>
    </div>
  )
}

export default App
