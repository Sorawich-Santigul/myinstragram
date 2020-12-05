import React from 'react';
import Profile from './profile.png'
import Logo from './logo.jpg'
import './Navigation.css'

const Navigation = ({onRouteChange,route}) => {
if (route==='Home' || route==="Createpost")
{
   return (
    <div className="Navbar" style={{display: 'flex', justifyContent: 'flex-end'}}>
      <img  className="logosign"  
      src={Logo}
      alt=""
      />
      <img  className="peoplesign"
       src={Profile}
       onClick={()=>onRouteChange('Profile')}
       alt=""
       />
      <p
      className="Navlink"
      onClick={() => onRouteChange('Signout')}
      >Sign out</p>
    </div>
    );
}else if(route==="Profile"){
  return(
    <div className='Navbar' style={{display: 'flex', justifyContent: 'flex-end'}}>
      <p 
      className="Navlink"
      onClick={() => onRouteChange('Home')}
      >Home</p>
      <p
      className="Navlink"
      onClick={() => onRouteChange('Signout')}
      >Signout</p>
    </div>)
}else
{
  return (
    <div className='Navbar' style={{display: 'flex', justifyContent: 'flex-end'}}>
      <p
      className="Navlink"
      onClick={() => onRouteChange('Signin')}
      >Signin</p>
      <p
      className="Navlink"
      onClick={() => onRouteChange('Register')}
      >Register</p>
    </div>
    );
}

}
  


export default Navigation;