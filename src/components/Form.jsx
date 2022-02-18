import React from 'react';

const Form = ({setCurrency, setCryptocurrency, onFormSubmit}) => {
    

    const currencies = [
        { currencyName: '--Select--', value: '' },
        { currencyName: 'US Dollar', value: 'USD' },
        { currencyName: 'Euro', value: 'EUR' },
        { currencyName: 'GBP', value: 'GBP' }
    ];

    const cryptocurrencies = [
        { currencyName: '--Select--', value: '' },
        { currencyName: 'Bitcoin', value: 'BTC' },
        { currencyName: 'Ethereum', value: 'ETH' },
        { currencyName: 'BNB', value: 'BNB' },
        { currencyName: 'Cardano', value: 'ADA' },
        { currencyName: 'Solana', value: 'SOL' },
        { currencyName: 'XRP', value: 'XRP' },
        { currencyName: 'Terra', value: 'LUNA' },
        { currencyName: 'Dogecoin', value: 'DOGE' },
        { currencyName: 'Polkadot', value: 'DOT' },
        { currencyName: 'Avalanche', value: 'AVAX' },
    ];

  return (
    <div className='form'>
        <form onSubmit={onFormSubmit}>
            <div className="form-component">
                <label htmlFor="currency-list" className="label">Choose currency: </label>
                <select className="select" name="currency-list" id="currency-list" onChange={e => setCurrency(e.target.value)}>
                    {currencies.map(currency => <option value={currency.value}>{currency.currencyName}</option>)}
                </select>
            </div>
            <div className="form-component">
                <label htmlFor="crypto-list" className="label">Choose cryptocurrency: </label>
                <select className="select" name="crypto-list" id="crypto-list" onChange={e => setCryptocurrency(e.target.value)}>
                    {cryptocurrencies.map(cryptocurrency => <option value={cryptocurrency.value}>{cryptocurrency.currencyName}</option>)}
                </select>
            </div>
            <input className="medium-button" type='submit' value="Search Market" />
        </form>
    </div>
);
};

export default Form;
