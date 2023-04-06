
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

function Sidebar() {
    const [subMenuOpen, setSubMenuOpen] = useState(null)

    return (
        <section className="genshin-sidebar fixed top-[0] left-[0] h-full z-[100] duration-500 transition-all ease-in-out">
            <div className="genshin-name-details py-4 w-full flex items-center justify-center">
                <Link className="genshin-name text-4xl text-white font-semibold duration-500 ease-in-out delay-100" to="/">ChouKpop</Link>
            </div>

            <ul className="genshin-nav-links w-full h-full py-4 px-0">
                <li className="relative list-none duration-500 ease-in-out">
                    <Link className="genshin-link-name text-2xl font-semibold text-white duration-500 ease-in-out flex items-center no-underline py-4" to="/genshin">
                        <img className="w-[32px] mx-5 text-center leading-[50px] text-xl cursor-pointer duration-500 ease-in-out select-none" src="/images/home.png" alt="home" />
                        <span className="genshin-link-name select-none">Home</span>
                    </Link>
                </li>

                <li className="relative list-none duration-500 ease-in-out">
                    <Link className="genshin-link-name text-2xl font-semibold text-white duration-500 ease-in-out flex items-center no-underline py-4" to="/genshin/characters">
                        <img className="w-[32px] mx-5 text-center leading-[50px] text-xl cursor-pointer duration-500 ease-in-out select-none" src="/images/characters.png" alt="home" />
                        <span className="genshin-link-name select-none">Characters</span>
                    </Link>
                </li>

                <li className={subMenuOpen ? "relative list-none duration-500 ease-in-out showMenu" : "relative list-none duration-500 ease-in-out"}>
                    <div className="cursor-pointer flex items-center justify-between" style={subMenuOpen ? { background: "#1d1b31" } : {}} onClick={() => setSubMenuOpen(!subMenuOpen)}>
                        <Link className="genshin-link-name text-2xl font-semibold text-white duration-500 ease-in-out flex items-center no-underline py-4">
                            <img className="w-[32px] mx-5 text-center leading-[50px] text-xl cursor-pointer duration-500 ease-in-out select-none" src="/images/items.png" alt="home" />
                            <span className="genshin-link-name select-none">Database</span>
                        </Link>
                        {subMenuOpen ? <FaChevronUp className="text-white h-4 mr-5" /> : <FaChevronDown className="text-white h-4 mr-5" />}
                    </div>
                    <ul className="gesnhin-sub-menu text-white pt-2 pr-2 pb-4 pl-20 mt-[-10px] hidden">
                        <li><Link className="genshin-link-name hidden select-none">Database</Link></li>
                        <li className="my-4"><Link className="text-white text-lg font-normal py-3 px-0 opacity-50 whitespace-nowrap duration-500 ease-in-out hover:opacity-100 select-none" to="/genshin/database/items"><span className="menu-dot">●</span>Items</Link></li>
                        <li className="my-4"><Link className="text-white text-lg font-normal py-3 px-0 opacity-50 whitespace-nowrap duration-500 ease-in-out hover:opacity-100 select-none" to="/genshin/database/weapons"><span className="menu-dot">●</span>Weapons</Link></li>
                        <li className="my-4"><Link className="text-white text-lg font-normal py-3 px-0 opacity-50 whitespace-nowrap duration-500 ease-in-out hover:opacity-100 select-none" to="/genshin/database/artifacts"><span className="menu-dot">●</span>Artifacts</Link></li>
                    </ul>
                </li>

                <li className="relative list-none duration-500 ease-in-out">
                    <Link className="genshin-link-name text-2xl font-semibold text-white duration-500 ease-in-out flex items-center no-underline py-4" to="/genshin/settings">
                        <img className="w-[32px] mx-5 text-center leading-[50px] text-xl cursor-pointer duration-500 ease-in-out select-none" src="/images/settings.png" alt="home" />
                        <span className="genshin-link-name select-none">Settings</span>
                    </Link>
                </li>
            </ul>
        </section>
    )
}

export default Sidebar
