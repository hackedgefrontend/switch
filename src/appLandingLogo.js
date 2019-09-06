import React from 'react';
import location from './location.png';

function AppLogo() {
  return (
      <div className="pulse appLogo">
           <img style={{height:"30px"}} src={location}/>
           <span>Switch</span>
      </div>
  );
}

export default AppLogo;
