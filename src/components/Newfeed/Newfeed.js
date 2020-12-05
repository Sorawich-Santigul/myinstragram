import React from 'react';
import Post from '../Post/Post';



const Newfeed = ({Feedlist}) => {
	return(
     <div>
      {Feedlist.map((user,i)=>{
      	return (
			<Post  
			name={Feedlist[i].name} 
			imageurl={Feedlist[i].imageurl}
      caption={Feedlist[i].caption}
      like={Feedlist[i].like}
      profilepic={Feedlist[i].profilepicture}
			/>
	);
      })
  }
     </div>
	)
}
  

export default Newfeed;