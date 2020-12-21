import React from 'react';
import "./style.css";
import Image from "../image/image1.png";
import BottomBar from "./BottomBar";

function Home() {
    return (
        <main className="man2">
            <div className="imageContainer">
            <img src={Image} alt="home image"  />
            {/* <Image /> */}
            <div className="caption center">
                Hey, 
                <p>I am Anshika rao and this is <span className="textSize">MyBlog</span>.</p>
                <p>Grab a cup of coffee and get ready :)</p>
            </div>
            </div>
            <div>
            <BottomBar />
            </div>
        </main>
    )
        
}

export default Home
