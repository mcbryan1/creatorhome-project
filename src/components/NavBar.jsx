import React from "react";
import './components.css'
import { Link } from 'react-scroll'
import { animateScroll as scroll } from 'react-scroll'

export default function NavBar() {
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light main-nav nav-logo fixed-top">
          <Link className="navbar-brand" onClick={()=> scroll.scrollToTop()}>
            Creator Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse nav-list" id="navbarNav">
            <ul className="navbar-nav ml-auto nav">
              <li className="nav-item ">
                <Link className="nav-link link" to="images" smooth={true} duration={1000}>
                  Images <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link" to="videos" smooth={true} duration={1000}>
                  Videos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link" to="charts" smooth={true} duration={1000}>
                  Chart
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
