import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';

const Post = ({ post }) => (
  <div className="wrapper">
    <PostHeader author={post.author} time={post.time} avatar={post.avatar} />
    <hr />
    <p className="status">{post.content}</p>
  </div>
);

Post.propTypes = {
  post: PropTypes.shape({
    author: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
