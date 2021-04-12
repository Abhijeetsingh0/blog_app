import React from 'react';
import "./style.css";
import Image from "./Image1.png";
import BottomBar from "./BottomBar";

function Home() {
    return (
        <main className="man2">
            <div className="imageContainer">
            <img src={Image} alt="homeImage"  />
            {/* <Image /> */}
            </div>
            <div>
            <BottomBar />
            </div>
        </main>
    )
        
}

export default Home
