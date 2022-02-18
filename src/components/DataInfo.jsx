import React from 'react';

const DataInfo = ({data}) => {

    const dataInfo = [
        {price: data[0]['PRICE'], tag: 'Price'},
        {price: data[0]['HIGHDAY'], tag: 'Day High'},
        {price: data[0]['LOWDAY'], tag: 'Day Low'},
        {price: data[0]['CHANGE24HOUR'], tag: 'Day Change'}
    ];

  return (
      <div className="data-info">
        <div className="data-info-item">
          {dataInfo.map(infoItem => <p key={infoItem.tag}>{infoItem.tag}: <span>{infoItem.price}</span></p>)}
        </div>
      </div>
  );
};

export default DataInfo;
