import React from 'react';

const DataInfo = ({data}) => {

    const dataObject = {
        price: data[0]['PRICE'],
        dayHigh: data[0]['HIGHDAY'],
        dayLow: data[0]['LOWDAY'],
        dayChange: data[0]['CHANGE24HOUR']
    };

    const {price, dayHigh, dayLow, dayChange} = dataObject;

  return (
      <div>
          <ul>
              <li>Price: {price}</li>
              <li>Day high: {dayHigh}</li>
              <li>Day low:{dayLow}</li>
              <li>Change last 24H:{dayChange}</li>
          </ul>
      </div>
  );
};

export default DataInfo;
