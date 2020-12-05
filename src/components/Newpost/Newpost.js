import React from 'react';


const Newpost = ({onRouteChange}) => {
  return (
    <div
    style={{display: 'flex', justifyContent: 'center'}}
    >
      <button 
      className=""
      onClick={() => onRouteChange('Createpost')}
      >Add Newpost</button>
    </div>
  );
}

export default Newpost;