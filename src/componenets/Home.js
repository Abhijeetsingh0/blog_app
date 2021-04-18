import React from 'react';
import "./style.css";
import Image from "./Image1.png";
import BottomBar from "./BottomBar";
import {Link} from 'react-router-dom';

function Home() {
    return (
        <main className="man2">
            <div className="imageContainer">
                <Link to='/post'>
                <img src={Image} alt="homeImage"  />
                </Link>
            {/* <Image /> */}
            </div>
            <p className="text-center" style={{fontSize:'30px'}}>Click on above image :)</p>
        <BottomBar />
        </main>
    )
}

export default Home
