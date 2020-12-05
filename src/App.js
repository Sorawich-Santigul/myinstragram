import React, { Component } from 'react';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Navigation from './components/Navigation/Navigation';
import Newfeed from './components/Newfeed/Newfeed';
import Newpost from './components/Newpost/Newpost';
import Createpost from './components/Createpost/Createpost';
import Bio from './components/Bio/Bio';
import {Feedlist} from './Feedlist';

class App extends Component {
  constructor() {
    super();
  this.state= {
    route:'Register',
    user:{
      name:'Alex',
      email:"Alex@gmail.com",
      profilepic:'https://www.pennmedicine.org/-/media/images/miscellaneous/smiles/womans_face_and_shoulders_640299760.ashx',
      post:0
    },
    isSignedIn:false,
    Post:[],
  }
  }

  onRouteChange = (route) => {
    if (route === "Home" ){
      this.setState({isSignedIn: true});
    }else if(route==="Signout"){
      this.setState({isSignedIn: false});
    }
    this.setState({route: route});
  }


 render(){

  const timeline = Feedlist.filter(feed =>{
      return feed.email.toLowerCase().includes(this.state.user.email.toLowerCase());
    })

  return (
    <div className="App">
     <Navigation 
     onRouteChange={this.onRouteChange}
     route={this.state.route}
     />
     {
      this.state.route==='Createpost'
       ?
        <Createpost onRouteChange={this.onRouteChange}/>
       :
       (
       this.state.route==='Home'
        ? 
        <div className="home">
         <div className='feed'>
          <Newfeed Feedlist={Feedlist}/>
         </div> 
         <Newpost onRouteChange={this.onRouteChange}/>
        </div>
        :(
         this.state.route==="Register"
         ?
         <div>
          <Register 
          onRouteChange={this.onRouteChange}
          />
         </div>
         :
         (
          this.state.route==="Profile"
          ?
          <div>
            <Bio 
            user={this.state.user}
            timeline={timeline}
            />
            <Newpost onRouteChange={this.onRouteChange}/>
          </div>
         :
         <div>
          <Signin 
          onRouteChange={this.onRouteChange}
          />
        </div>
         )
        )    
       )
    }
    </div>
  );} 
  
}

export default App;
