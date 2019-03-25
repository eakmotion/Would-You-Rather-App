import React from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-bootstrap';

const AvatarImage = ({ users, author, style, size }) => {
  return (
    <Image
      style={style}
      width={size}
      height={size}
      src={users[author] ? users[author].avatarURL : 'http://placehold.it/100x100'}
      alt={author}
      thumbnail
      roundedCircle
    />
  );
};

const mapStateToProps = ({ users }) => {
  return { users };
};

AvatarImage.defaultProps = {
  size: 150,
  author: 'avatar image'
}

export default connect(mapStateToProps)(AvatarImage);
