
import React from 'react'

import Sidebar from '../../components/genshin/sidebar/Sidebar'

function GenshinSettings() {
    return (
        <>
            <Sidebar />

            <section className="genshin-main-section relative duration-300 ease-in-out p-8">
                <span className="text-white text-6xl font-black">Settings</span>
            </section>
        </>
    )
}

export default GenshinSettings
