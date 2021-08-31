import React from 'react'
import { NavLink } from 'react-router-dom';
import Me from './Me.png';
import Logo from './Logo.png'

const Home = () => {

    const Aboutme = (e) => {
        e.preventDefault();
        window.location.href = "https://drive.google.com/file/d/1oGJbo4MFqXCC_E5C-XjRqnNuJIb6jCro/view"
    }

    const followme = (e) => {
        e.preventDefault();
        window.location.href = "https://www.linkedin.com/in/prateeksingh1301/"
    }

    return (
        <>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <title>Prateek Portfolio</title>
            </head>
            <body>
                <header>
                    <nav>
                        <div className="navbar">
                            <div className="logo">
                                <img src={Logo} alt=""></img>
                            </div>
                            <div className="menu">
                                <NavLink exact activeClassName="active-link" className="Bar" to="/">Home</NavLink>
                                <NavLink exact activeClassName="active-link" className="Bar" to="/projects">Projects</NavLink>
                                <NavLink exact activeClassName="active-link" className="Bar" to="/contact">Contact</NavLink>
                            </div>
                            <div className="search-box">
                                <input type="text" placeholder="Search Here"></input>
                                <a href="google.com"><i className="fa fa-search"></i></a>
                            </div>
                        </div>
                    </nav>
                    <div className="content">
                        <div className="text-content">
                            <div className="text">Hello, It's Me </div>
                            <div class="name">Prateek Singh</div>
                            <div class="Language">
                                <div class="Language">
                                    <span>And I'm a</span>
                                    <div class="typing-text">
                                        <span class="one">WebDevloper,</span>
                                        <span class="two">Gamer.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="buttons" >
                                <button onClick={Aboutme}>About Me</button>
                                <button onClick={followme}>Follow Me</button>
                            </div>
                        </div>
                        <div className="boy">
                            <img src={Me} alt="MyImg"></img>
                        </div>
                    </div>
                    <div class="media-icons">
                        <a href="https://www.linkedin.com/in/prateeksingh1301/" id="aboutme" rel="noreferrer" target="_blank" ><i class="fa fa-linkedin"></i></a>
                        <a href="https://github.com/Prateeksingh13" id="followme" rel="noreferrer" target="_blank" ><i class="fa fa-github"></i></a>
                    </div>
                </header>
            </body>
        </>
    )
}


export default Home;