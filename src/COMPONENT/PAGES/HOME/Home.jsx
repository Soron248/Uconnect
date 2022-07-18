import React from 'react'
import './Home.css';
import ProfileSide from '../../COMPONENTS/PROFILESIDE/Profileside';
import PostSide from '../../COMPONENTS/POSTSIDE/PostSide';
import RightSide from '../../COMPONENTS/RIGHTSIDE/RightSide';

const Home = () =>{
    return (
        <div className="Home">
            <div className="blur" style={{ top: '-18%', right: '0' }}></div>
            <div className="blur" style={{ top: '36%', left: '-8rem' }}></div>
            <div className="HomePage">
                <ProfileSide/>
                <PostSide/>
                <RightSide/>
            </div>
        </div>
    )
}

export default Home 