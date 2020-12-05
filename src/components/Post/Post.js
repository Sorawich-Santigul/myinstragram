import React from 'react';
import './Post.css';
import Like from './like.jpg';
const Post = ({name,imageurl,caption,like,profilepic}) => {
  return (
  <div className="container-Post">
    <div className="Post">
      <title>
      <img src={profilepic}
      alt="" 
      className='profilepic'/>
      <p className="captionname">{name}</p>
      </title>
      <img src={imageurl} 
      alt=''
      className='Postimg'/>
      <p className="caption">
      <div className="captionname">
      {name}
      </div>
      {caption}
      </p>
      <div className="like">
      <img className='likesign' src={Like} alt=''/>
      <p>{like}</p>
      </div>
    </div>
  </div>
  );
}

export default Post;
