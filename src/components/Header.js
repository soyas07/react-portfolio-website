import React, { useState, useEffect } from 'react'

function Header() {

    const [menuStat, setmenuStat] = useState(false)

    const handleClick = () => {
        setmenuStat(!menuStat)
    }

    // change header nav bg color when scroll
    

    return (
        <header className="">
            <nav className="margin-container">
                <ul>
                    <div className="logo">
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 266 137">
                            <text id="Portfolio" transform="translate(0 99)" fill="#fff" font-size="116" font-family="FreestyleScript-Regular, Freestyle Script"><tspan x="0" y="0">Portfolio</tspan></text>
                        </svg>
                        
                    </div>
                    <div className={menuStat ? "burger-menu close" : "burger-menu"} onClick={handleClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="22.996" viewBox="0 0 32 22.996">
                            <g id="layer1" transform="translate(-323.668 -272.694)">
                                <g id="g3837" transform="translate(325.668 274.694)">
                                    <path id="path3785-0" d="M19.668,1032.69h28" transform="translate(-19.668 -1013.694)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="4"/>
                                    <path id="path3785-0-9" d="M19.668,932.694h28" transform="translate(-19.668 -923.196)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="4"/>
                                    <path id="path3785-0-4" d="M19.668,832.694h28" transform="translate(-19.668 -832.694)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="4"/>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div className={menuStat ? "cross-menu active" : "cross-menu"} onClick={handleClick}>
                        <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path id="iconmonstr-x-mark-2" d="M23.954,21.03l-9.184-9.1,9.092-9.174L21.03-.046,11.94,9.133,2.764.045l-2.81,2.81,9.186,9.1-9.1,9.184,2.81,2.81,9.112-9.192,9.18,9.1Z" transform="translate(0.046 0.046)" fill="#fff"/>
                        </svg>
                    </div>
                    <div className="nav-hover-box"><li><a href="#">About</a></li></div>
                    <div className="nav-hover-box"><li><a href="#">Portfolio</a></li></div>
                    <div className="nav-hover-box"><li><a href="#">Contact</a></li></div>
                    <button className="nav-btn desktop">Get Started</button>
                </ul>
            </nav>
            <div className={menuStat ? "menu-items active" : "menu-items"}>
                <li><a href="#">About</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Contact</a></li>
                <button className="nav-btn">Get Started</button>
            </div>
    </header>
    )
}

export default Header
