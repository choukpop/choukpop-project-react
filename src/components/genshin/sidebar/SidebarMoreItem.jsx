
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

//! Icons
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

function SidebarMoreItem({ image, label, items }) {
    const [subMenuOpen, setSubMenuOpen] = useState(null)

    return (
        <li className={"relative list-none duration-300 ease-in-out " + (!subMenuOpen ? "" : "show-menu")}>
            <div className="cursor-pointer flex items-center justify-between" onClick={() => setSubMenuOpen(!subMenuOpen)}>
                <Link className="genshin-link-name text-white opacity-50 hover:opacity-100 text-xl font-semibold py-4 duration-300 ease-in-out flex items-center no-underline">
                    <img className="w-[32px] mx-5 text-center leading-[50px] text-xl cursor-pointer duration-300 ease-in-out select-none" src={image} alt={label} />
                    <span className="genshin-link-name select-none">{label}</span>

                    {subMenuOpen ? <FaChevronUp className="h-4 ml-4" /> : <FaChevronDown className="h-4 ml-4" />}
                </Link>
            </div>

            <ul className="gesnhin-sub-menu pl-20 hidden">
                {items.map((item) =>
                    <li className="my-4 opacity-50 hover:opacity-100 duration-300 ease-in-out cursor-pointer">
                        <Link
                            to={item.href}
                            className="text-white text-lg font-normal py-2 px-0 whitespace-nowrap select-none"
                        >
                            <span className="mr-4">●</span>
                            {item.label}
                        </Link>
                    </li>
                )}
            </ul>
        </li>
    )
}

export default SidebarMoreItem
