
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

//! Components
import Language from './../language'

//! Icons
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

function Sidebar() {
    const [subMenuOpen, setSubMenuOpen] = useState(null)
    const { t } = useTranslation()

    return (
        <section className="genshin-sidebar fixed top-[0] left-[0] h-full z-[100] duration-500 transition-all ease-in-out">
            <div className="genshin-name-details py-4 w-full flex items-center justify-center">
                <Link className="genshin-name text-white opacity-50 hover:opacity-100 text-4xl font-semibold duration-500 ease-in-out delay-100" to="/">ChouKpop</Link>
            </div>

            <ul className="genshin-nav-links w-full h-full py-4 px-0">
                <li className="relative list-none duration-500 ease-in-out">
                    <Link className="genshin-link-name text-white opacity-50 hover:opacity-100 text-xl font-semibold duration-500 ease-in-out flex items-center no-underline py-4" to="/genshin">
                        <img className="w-[32px] mx-5 text-center leading-[50px] text-xl cursor-pointer duration-500 ease-in-out select-none" src="/images/home.png" alt="home" />
                        <span className="genshin-link-name select-none">{t('sidebar.home')}</span>
                    </Link>
                </li>

                <li className="relative list-none duration-500 ease-in-out">
                    <Link className="genshin-link-name text-white opacity-50 hover:opacity-100 text-xl font-semibold duration-500 ease-in-out flex items-center no-underline py-4" to="/genshin/characters">
                        <img className="w-[32px] mx-5 text-center leading-[50px] text-xl cursor-pointer duration-500 ease-in-out select-none" src="/images/characters.png" alt="home" />
                        <span className="genshin-link-name select-none">{t('sidebar.characters')}</span>
                    </Link>
                </li>

                <li className={"relative list-none duration-500 ease-in-out " + (!subMenuOpen ? "" : "show-menu")}>
                    <div className="cursor-pointer flex items-center justify-between" onClick={() => setSubMenuOpen(!subMenuOpen)}>
                        <Link className="genshin-link-name text-white opacity-50 hover:opacity-100 text-xl font-semibold duration-500 ease-in-out flex items-center no-underline py-4">
                            <img className="w-[32px] mx-5 text-center leading-[50px] text-xl cursor-pointer duration-500 ease-in-out select-none" src="/images/items.png" alt="home" />
                            <span className="genshin-link-name select-none">{t('sidebar.database.name')}</span>

                            {subMenuOpen ? <FaChevronUp className="h-4 ml-10" /> : <FaChevronDown className="h-4 ml-10" />}
                        </Link>
                    </div>
                    <ul className="gesnhin-sub-menu pt-2 pr-2 pb-4 pl-20 mt-[-10px] hidden">
                        <li><Link className="genshin-link-name hidden select-none">{t('sidebar.database.name')}</Link></li>
                        <li className="my-4"><Link className="text-white opacity-50 hover:opacity-100 text-lg font-normal py-3 px-0 whitespace-nowrap duration-500 ease-in-out select-none" to="/genshin/database/items"><span className="mr-4">●</span>{t('sidebar.database.items')}</Link></li>
                        <li className="my-4"><Link className="text-white opacity-50 hover:opacity-100 text-lg font-normal py-3 px-0 whitespace-nowrap duration-500 ease-in-out select-none" to="/genshin/database/weapons"><span className="mr-4">●</span>{t('sidebar.database.weapons')}</Link></li>
                        <li className="my-4"><Link className="text-white opacity-50 hover:opacity-100 text-lg font-normal py-3 px-0 whitespace-nowrap duration-500 ease-in-out select-none" to="/genshin/database/artifacts"><span className="mr-4">●</span>{t('sidebar.database.artifacts')}</Link></li>
                    </ul>
                </li>

                <li className="relative list-none duration-500 ease-in-out">
                    <Link className="genshin-link-name text-white opacity-50 hover:opacity-100 text-xl font-semibold duration-500 ease-in-out flex items-center no-underline py-4" to="/genshin/settings">
                        <img className="w-[32px] mx-5 text-center leading-[50px] text-xl cursor-pointer duration-500 ease-in-out select-none" src="/images/settings.png" alt="home" />
                        <span className="genshin-link-name select-none">{t('sidebar.settings')}</span>
                    </Link>
                </li>

                <li>
                    <div className="genshin-language fixed bottom-8 flex justify-center duration-300 ease-in-out mx-auto">
                        <Language />
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default Sidebar
