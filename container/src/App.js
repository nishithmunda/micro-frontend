import React from 'react';
import MarketingApp from './components/MarketingApp';

export default () => {
  console.log("MarketingApp",MarketingApp)
  return (
    <div>
      <h1>Market Place</h1>
      <hr />
      <MarketingApp />
    </div>
  );
};
