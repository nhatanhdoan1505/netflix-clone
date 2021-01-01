import React, { useState, useEffect } from 'react'
import "./Nav.css"


function Nav() {
    const [scroll, setScroll] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                setScroll(true)
            }else{
                setScroll(false)
            }
        })
        return () => {
            window.removeEventListener("scroll")
        }
    }, [])

    return (
        <div className = {`nav ${scroll && "nav__black"}`}>
            <img className = "nav__logo" src = "//upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png" alt = "Netflix Logo"></img>
            <img className = "nav__avatar" src = "https://occ-0-395-325.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABequx-MvIejXXMUQrRY6Wb_V4KvsRCZF4BZwbEZonU0bxy6hqMsUjntlXVaAOuMPGQu6HVojxyj5p4qTHHPfSP0.png?r=fcc" alt = "Netflix log"></img>
        </div>
    )
}

export default Nav
