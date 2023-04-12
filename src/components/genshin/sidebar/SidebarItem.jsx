
import React from 'react'
import { Link } from 'react-router-dom'

function SidebarItem({ image, label, href }) {
    return (
        <li className="relative list-none opacity-50 hover:opacity-100 duration-500 ease-in-out">
            <Link
                to={href}
                className="genshin-link-name text-white text-xl font-semibold py-4 duration-300 ease-in-out flex items-center no-underline"
            >
                <img className="w-[32px] mx-5 text-center leading-[50px] text-xl cursor-pointer duration-300 ease-in-out select-none" src={image} alt={label} />
                <span className="genshin-link-name select-none">
                    {label}
                </span>
            </Link >
        </li>
    )
}

export default SidebarItem
