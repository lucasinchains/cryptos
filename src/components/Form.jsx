import React from 'react';

const Form = ({setCurrency, setCryptocurrency, onFormSubmit}) => {
    

  return (
    <div>
        <form onSubmit={onFormSubmit}>
            <label htmlFor="currency-list">Choose currency: </label>
            <select name="currency-list" id="currency-list" onChange={e => setCurrency(e.target.value)}>
                <option value="">--Select--</option>
                <option value='USD'>USD</option>
                <option value='EUR'>EUR</option>
                <option value='GBP'>GBP</option>
            </select>
            <br></br>
            <label htmlFor="crypto-list">Choose cryptocurrency: </label>
            <select name="crypto-list" id="crypto-list" onChange={e => setCryptocurrency(e.target.value)}>
                <option value="">--Select--</option>
                <option value="BTC">Bitcoin</option>
                <option value="ETH">Ethereum</option>
                <option value="BNB">BNB</option>
                <option value="ADA">Cardano</option>
                <option value="SOL">Solana</option>
                <option value="XRP">XRP</option>
                <option value="LUNA">Terra</option>
                <option value="DOGE">Dogecoin</option>
                <option value="DOT">Polkadot</option>
                <option value="AVAX">Avalanche</option>
            </select>
            <br></br>
            <input type="submit" value="Submit"/>
        </form>
    </div>
);
};

export default Form;
