import React, { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import Form from "./components/Form"
import VideoList from "./components/VideoList"
import Error from "./components/Error"
import DataInfo from "./components/DataInfo"
import { API_KEY } from "./components/API"


function App() {
  const [currency, setCurrency] = useState('');
  const [cryptocurrency, setCryptocurrency] = useState('');
  const [currencyPair, setCurrencyPair] = useState([]);
  const [data, setData] = useState([])
  const [error, setError] = useState(false);

  useEffect(async () => {

    if(currencyPair.length) {
      const URL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrency}&tsyms=${currency}&api_key=${API_KEY}`
      const response = await axios.get(URL);
      setData([response.data.DISPLAY[`${cryptocurrency}`][`${currency}`]])
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
        <header>Crypto-App: get a sense of the market.</header>
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
            <VideoList />
          </div>
        </div>
    </div>
  )
}

export default App
