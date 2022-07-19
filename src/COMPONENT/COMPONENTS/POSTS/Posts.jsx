import React from 'react';
import './Posts.css'
import { PostsData } from '../../../Data/PostData'
import Post from '../POST/Post';

function Posts() {
    return (
        <div className="Posts">
            {PostsData.map((post, id)=>{
                return <Post data={post} id={id}/>
            })}
        </div>
    );
}

export default Posts;