import React from 'react';
import Posts from '../POSTS/Posts';
import PostShare from '../POSTSHARE/PostShare';
import './PostSide.css'

function PostSide(props) {
    return (
        <div className="PostSide">
          <PostShare/>
          <Posts/>
        </div>
    );
}

export default PostSide;