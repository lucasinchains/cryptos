import React from 'react';

const DataInfo = ({data}) => {

    const dataObject = {
        price: data[0]['PRICE'],
        dayHigh: data[0]['HIGHDAY'],
        dayLow: data[0]['LOWDAY'],
        marketCap: data[0]['MKTCAP']
    };

    const {price, dayHigh, dayLow, marketCap} = dataObject;

  return (
      <div>
          <ul>
              <li>Price: {price}</li>
              <li>Day high: {dayHigh}</li>
              <li>Day low:{dayLow}</li>
              <li>Market Cap:{marketCap}</li>
          </ul>
      </div>
  );
};

export default DataInfo;
