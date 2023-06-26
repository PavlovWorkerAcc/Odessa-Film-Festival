import React from "react";
import logo from "../../img/logo.png"

const head = () => {
    return (
        <header>
            <div className="Header_Container">
                <div className="Header_Logo">
                    <img src={logo} alt="Header_logo" />
                </div>

                <nav className="Header_Navigation">
                    <ul>
                        <li>Головна</li>
                        <li>Про Фестиваль</li>
                        <li>Партнери</li>
                        <li>Новини</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default head