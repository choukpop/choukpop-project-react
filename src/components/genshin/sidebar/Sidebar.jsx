
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

//! Components
import SidebarItem from './SidebarItem'
import SidebarMoreItem from './SidebarMoreItem'
import Language from '../../language/index'

function Sidebar() {
    const { t } = useTranslation()

    return (
        <section className="genshin-sidebar fixed top-0 left-0 h-full z-[100] duration-300 transition-all ease-in-out">
            <Link to="/" className="genshin-name-details py-4 w-full flex items-center justify-center">
                <h1 className="genshin-name text-3xl font-black text-white py-4 relative z-10">
                    Genshin
                </h1>
            </Link>

            <ul className="genshin-nav-links w-full h-full py-4 px-0">
                <SidebarItem
                    image="/images/home.png"
                    label={t('sidebar.home')}
                    href="/genshin/home"
                />

                <SidebarItem
                    image="/images/characters.png"
                    label={t('sidebar.characters')}
                    href="/genshin/characters"
                />

                <SidebarMoreItem
                    image="/images/items.png"
                    label={t('sidebar.database.name')}
                    items={[
                        { label: t('sidebar.database.items'), href: "/genshin/database/items" },
                        { label: t('sidebar.database.weapons'), href: "/genshin/database/weapons" },
                        { label: t('sidebar.database.artifacts'), href: "/genshin/database/artifacts" },
                    ]}
                />

                <SidebarItem
                    image="/images/settings.png"
                    label={t('sidebar.settings')}
                    href="/genshin/settings"
                />

                <li className="genshin-language fixed bottom-8 flex justify-center duration-300 ease-in-out mx-auto">
                    <Language />
                </li>
            </ul>
        </section>
    )
}

export default Sidebar
