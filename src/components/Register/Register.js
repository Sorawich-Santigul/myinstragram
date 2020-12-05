import React from 'react';


const Register = ({onRouteChange}) => {
  return (
    <div className="">
        <div className="form-div container">
          <form >
            <h4 style={{display: 'flex', justifyContent: 'center'}}>Register</h4>
            <input placeholder="name" type="text" />
            <input placeholder="Email" type="text" />
            <input placeholder="Password" type="password" />
            <input placeholder="Profile picture" type="file" />
            <button 
            className="button-primary"
            onClick={() => onRouteChange('Home')}
            >Submit</button>
          </form>
        </div>

        <div>

        </div>
    </div>   
  );
}

export default Register;