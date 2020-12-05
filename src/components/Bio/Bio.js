import React from 'react';
import Post from '../Post/Post'
import './Bio.css'


const Bio = ({user,timeline}) => {
  return (
    <div>
      <bio>
      <div className="title">
      <img src={user.profilepic}
      alt=""
      className='profilepic'
      />
      <p>{user.name}</p>
      </div>
      <p>{`${user.post} post`}</p>
      </bio>
    <timeline>
      {timeline.map((user,i)=>{
      	return (
			<Post  
			name={timeline[i].name} 
			imageurl={timeline[i].imageurl}
            caption={timeline[i].caption}
            like={timeline[i].like}
            profilepic={timeline[i].profilepicture}
			/>
	    );
        })
        }
    </timeline>

    </div>
    );
}
export default Bio;