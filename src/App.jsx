import React from "react"
import { useState } from "react"
import Form from "./components/Form"
import VideoList from "./components/VideoList"
import Error from "./components/Error"

function App() {
  const [currency, setCurrency] = useState('');
  const [cryptocurrency, setCryptocurrency] = useState('');
  const [currencyPair, setCurrencyPair] = useState([]);
  const [isValidForm, setIsValidForm] = useState(true);

  const onFormSubmit = (e) => {
    e.preventDefault();
  
    if(currency === "" || cryptocurrency === "") {
      setIsValidForm(false);
      return;
    } else { 
      setIsValidForm(true);
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
