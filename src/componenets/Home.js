import React from 'react';
import "./style.css";
import Image from '../img1.jpg'

function Home() {
    return (
        <main>
            <div className="imageContainer">
            <img src={Image} alt="home image"  />
            {/* <Image /> */}
            <div className="caption center">This site is all about the bloging and vloging</div>
            </div>
        </main>
    )
        
}

export default Home
