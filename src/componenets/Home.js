import React from 'react';
import "./style.css";
import Imagee from "../image/Image1.png";
import BottomBar from "./BottomBar";

function Home() {
    return (
        <main className="man2">
            <div className="imageContainer">
            <img src={Imagee} alt="homeImage"  />
            {/* <Image /> */}
            </div>
            <div>
            <BottomBar />
            </div>
        </main>
    )
        
}

export default Home
