import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = ({ author, time, avatar }) => (
  <header className="cf">
    <img className="profile-pic" alt="" src={avatar} />
    <h1 className="name">{author}</h1>
    <p className="date">{time}</p>
  </header>
);

PostHeader.propTypes = {
  author: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default PostHeader;
