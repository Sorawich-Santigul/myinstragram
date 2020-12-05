import React from 'react';
import './Signin.css';

const Signin = ({onRouteChange}) => {
  return (
   <div className="">
        <div className="form-div container">
          <form >
            <h4 style={{display: 'flex', justifyContent: 'center'}}>Login</h4>
            <input placeholder="Email" type="text" />
            <input placeholder="Password" type="password" />
            <button 
            className="button-primary"
            onClick={() => onRouteChange('Home')}
            >Submit</button>
          </form>
        </div>
    </div>      
  );
}

export default Signin;