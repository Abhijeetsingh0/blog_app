import React,{useState , useEffect} from 'react';
import {Link} from 'react-router-dom';
import sanityClient from "../client";
import BottomBar from "./BottomBar";

function Post() {

    const [ postData , setPost ] = useState(null);

    useEffect(()=>{
        sanityClient.fetch(`*[_type=="post"]{
            title,
            author->{name},
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`).then((data)=>setPost(data))
        .catch(console.error);
        
    }, [] )


    return (
       <main className="bg-green-100 min-h-screen p-12 postBg">
           <section className="container mx-auto">
               <h1 className="text-5xl flex justify-center cursive "> Welcome to blog page :) </h1>
               <h2 className="text-lg flex justify-center text-gray-800 mb-12">Hope you find my blogs helpful ! </h2>
               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                {postData && postData.map((post, index)=>(

                   <article>
                       <Link to={"/post/" +post.slug.current} key={post.slug.current}>
                       <span className=" block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-600" key={index}>
                           <img 
                            src={post.mainImage.asset.url}
                            alt={post.mainImage.alt}
                            className="w-full rounded-r object-cover absolute"
                           />
                           <span className="block relative h-full flex justify-end items-end pr-4 pb-4" key={index}>
                               <h3 className="text-white-800 text-lg font-bold px-5 bg-blue-600 text-red-100 bg-opacity-75 rounded">
                                   {post.title}
                               </h3>
                           </span>
                           {/* <h3 className="text-white-100 text-lg font-bold px-5 bg-blue-700 text-red-100 bg-opacity-75 rounded">
                                   {post.author.name}
                               </h3> */}
                       </span>
                       </Link>
                   </article>
                ))}
                </div>
           </section>
           <div clssName="MarginMy"></div>
           <BottomBar />
         
       </main>
    )
}

export default Post
