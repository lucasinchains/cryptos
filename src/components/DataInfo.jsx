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
      <div className="data-info">
        <div className="data-info-item">
          <p>Price: <span>{price}</span></p>
        </div>
        <div className="data-info-item">
          <p>Day high: <span>{dayHigh}</span></p>
        </div>
        <div className="data-info-item">
          <p>Day low: <span>{dayLow}</span></p>
        </div>
        <div className="data-info-item">
          <p>Change last 24H: <span>{dayChange}</span></p>
        </div>
      </div>
  );
};

export default DataInfo;
