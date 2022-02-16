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
  // data is not used
  const [data, setData] = useState([])
  const [error, setError] = useState(false);

  /* Hardly recommend to separate the have helper functions to hit the API
  Example: have an crypto-compare.service.js where you make the api call."" 
  This way you separate the presentation layer with the business logic layer. 
  */

  useEffect(async () => {
    if(currencyPair.length > 0) {
      const URL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrency}&tsyms=${currency}&api_key=${API_KEY}`
      const response = await axios.get(URL);
      setData(response.data.DISPLAY)
    }
  }, [currencyPair]
  );
  
 // I NEED TO RESET THE FORM AFTER SUBMIT BUT HOW? VALUES IN Form.jsx ARE STATIC STRINGS
  const onFormSubmit = (e) => {
    e.preventDefault();
    /*
    Same logic is to do this: 
      let currencyIsEmpty = currency === "" || cryptocurrency === ""
      setError(currencyIsEmpty)
      !currencyIsEmpty && setCurrencyPair([currency, cryptocurrency])
     */
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
            {currencyPair.length ? <DataInfo /> : null}
          </div>
          <div className="eight wide column">
            <VideoList />
          </div>
        </div>
    </div>
  )
}

export default App
