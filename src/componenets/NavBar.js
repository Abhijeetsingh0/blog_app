import React from 'react';
import {NavLink} from "react-router-dom";
import "./style.css";

function NavBar() {
    return (
        <div>
            <header className="bg-red-600">
                <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/"
                    exact  
                    className="man inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-200 "
                    activeClassName="text-red-100 bg-red-600"
                    >
                    
                       <h1>MyBlog</h1> 
                    </NavLink>
                    <NavLink to="/post" 
                    className="inflex-flex items-center py-3 px-27 my-6 ml-4 rounded text-red-100 hover:text-green-200"
                    activeClassName="text-red-100 bg-red-700"
                    >
                       <h1>Blogs </h1> 
                    </NavLink>
                    <NavLink to="/about"  
                    className="inflex-flex items-center py-3 px-3 my-6 rounded text-red-100 hover:text-green-200"
                    activeClassName="text-red-100 bg-red-700"
                    >
                        <h2>About </h2>
                    </NavLink>

                </nav>
                </div>
            </header>
        </div>
    )
}

export default NavBar
