import React from 'react';
import {Link} from "react-router-dom";
import "./style.css";

function NavBar() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-red-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link to='/'>
            <p
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-4 whitespace-nowrap uppercase text-white"
            >
            <i className="fa fa-fw fa-home"></i> MyBlogs
            </p>
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
            <i className="fa fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link to='/about'>
                <p
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  <span className="ml-2"><i className="fa fa-drivers-license-o"></i><span style={{padding:'3px'}}></span>About</span>
                </p>
                </Link>
              </li>
              <li className="nav-item">
              <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="https://github.com/Abhijeetsingh0"
                >
                  <span className="ml-2"><i className="fa fa-github"></i><span style={{padding:'3px'}}></span>GitHub</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="https://www.instagram.com/uchiha__boi_/"
                >
                  <span className="ml-2"><i className="fa fa-instagram"></i><span style={{padding:'3px'}}></span>Instagram</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
    )
}

export default NavBar
