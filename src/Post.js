import React from 'react';
import PostHeader from './PostHeader';

const Post = ({ post }) => (
  <div className="wrapper">
    <PostHeader author={post.author} time={post.time} avatar={post.avatar} />
    <hr />
    <p className="status">{post.content}</p>
  </div>
);

export default Post;
