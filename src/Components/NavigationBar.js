import React from 'react'

import { RiShoppingBag4Line } from 'react-icons/ri'
import './NavigationBar.css'
function NavigationBar() {
    return (
        <nav>
            {/* Section 1- Logo */}
            
            <div className="nav-logo">
                <RiShoppingBag4Line size={40} color="white" />
                <p>OneStopShop</p>
            </div>

            {/* Section 2- Links */}

            <ul className="nav-links">
                <li>
                    <a href="#">HOME</a>
                </li>
                <li>SHOP</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
            </ul>
            {/* Section 3- Login & SignOut */}
            <div className="flex gap-2">
                <button className="rounded-full bg-blue-800 text-white p-2 px-6 hover:bg-blue-500">
                    Login
                </button>
                <button className="rounded-full bg-blue-800 text-white p-2 px-4 hover:bg-blue-500">
                    SignUp
                </button>
            </div>
        </nav>
    )
}

export default NavigationBar
