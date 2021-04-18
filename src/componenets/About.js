import React from 'react'
import BottomBar from './BottomBar';

export default function About(){
    return(
        <main className="postBg">
        <div className='px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full whiteClo'>
        <h2>Hey, my name is Abhijeet Singh, I am self taught web developer and currently pursuing my bachelor's of technology degree from Jabalpur engineering college, Jabalpur (M.P). To know more click here.</h2>
        <h2> The purpose of this site to share my experience in different technologies I used and my likes and dislikes about them. Hope you find something interesting :)</h2>
        </div>
        <BottomBar/>
        </main>
    )
}