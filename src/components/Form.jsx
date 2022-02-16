import React from 'react';
import { useState } from 'react';

const Form = ({ setCurrency, setCryptocurrency, onFormSubmit }) => {
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
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Form;
// too much code. If you have too much code, then you will have a bigger probability of getting bugs
// Possible refactor


// In another file 
// const currencies = ['USD', 'EUR', 'GBP']
// const cryptocurrencies = [
//     { currencyName: 'Bitcoin', value: 'BTC' },
//     { currencyName: 'Ethereum', value: 'ETH' },
//     { currencyName: 'BNB', value: 'BNB' },
//     { currencyName: 'Cardano', value: 'ADA' },
//     { currencyName: 'Solana', value: 'SOL' },
//     { currencyName: 'XRP', value: 'XRP' },
//     { currencyName: 'Terra', value: 'LUNA' },
//     { currencyName: 'Dogecoin', value: 'DOGE' },
//     { currencyName: 'Polkadot', value: 'DOT' },
//     { currencyName: 'Avalanche', value: 'AVAX' },
// ]

// This way Form is agnostic and extensible in with an array
// const Form = ({ setCurrency, setCryptocurrency, onFormSubmit }) => {
//     return (
//         <div>
//             <form onSubmit={onFormSubmit}>
//                 <label htmlFor="currency-list">Choose currency: </label>
//                 <select name="currency-list" id="currency-list" onChange={e => setCurrency(e.target.value)}>
//                     <option value="">--Select--</option>
//                     {currencies.map(currency => <option value={currency}>{currency}</option>)}
//                 </select>
//                 <br></br>
//                 <label htmlFor="crypto-list">Choose cryptocurrency: </label>
//                 <select name="crypto-list" id="crypto-list" onChange={e => setCryptocurrency(e.target.value)}>
//                     <option value="">--Select--</option>
//                     {cryptocurrencies.map(({ currencyName, value }) => <option value={value}>{currencyName}</option>)}
//                 </select>
//                 <br></br>
//                 <input type="submit" value="Submit" />
//             </form>
//         </div>
//     );
// };

