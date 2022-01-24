import React, { useEffect } from "react"
import { useState } from "react"
import Form from "./components/Form"
import VideoList from "./components/VideoList"
import Error from "./components/Error"
import axios from "axios"


function App() {
  const [currency, setCurrency] = useState('');
  const [cryptocurrency, setCryptocurrency] = useState('');
  const [currencyPair, setCurrencyPair] = useState([]);
  const [isValidForm, setIsValidForm] = useState(true);

  useEffect(async () => {
    const response = await axios.get({url: 'https://min-api.cryptocompare.com/data/pricemulti', config: {
      fsyms: `${cryptocurrency}`,
      tsyms: `${currency}`,
      api_key: 'b4d53e80e4c387bd80c71b530ce5a14a273bec1d99a88fa04907cdf1c1b00ade'
    }}
    )
      console.log(response)
    }, [currencyPair]);

  const onFormSubmit = (e) => {
    e.preventDefault();
  
    if(currency === "" || cryptocurrency === "") {
      setIsValidForm(false);
      return;
    } else { 
      setCurrencyPair([currency, cryptocurrency]);
    }
  }; 
  
  
  return (
    <div>
        <header>Crypto-App: get a sense of the market.</header>
        <div className="ui grid">
          <div className="eight wide column">
            {isValidForm ? null : <Error />}
            <Form 
              setCurrency={setCurrency}
              setCryptocurrency={setCryptocurrency}
              onFormSubmit={onFormSubmit}
            />
          </div>
          <div className="eight wide column">
            <VideoList />
          </div>
        </div>
    </div>
  )
}

export default App
