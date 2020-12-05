import React from 'react';


const Createpost = ({onRouteChange}) => {
  return (
    <div>
      <form >
            <h4 style={{display: 'flex', justifyContent: 'center'}}>Create New Post</h4>
            <input placeholder="write your caption" type="text" />
            <h6 style={{display: 'flex', justifyContent: 'center'}}>Select Picture</h6>
            <input placeholder="Profile picture" type="file" />
            <button 
            className="button-primary"
            onClick={() => onRouteChange('Home')}
            >Submit</button>
       </form>

    </div>
  );
}

export default Createpost;