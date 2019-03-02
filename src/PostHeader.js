import React from 'react';

const PostHeader = ({ author, time, avatar }) => (
  <header className="cf">
    <img className="profile-pic" alt="" src={avatar} />
    <h1 className="name">{author}</h1>
    <p className="date">{time}</p>
  </header>
);

export default PostHeader;
