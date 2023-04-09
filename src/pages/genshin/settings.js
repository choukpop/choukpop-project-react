
import React from 'react'

import Sidebar from '../../components/genshin/Sidebar'

function GenshinSettings() {
    return (
        <>
            <Sidebar />

            <section className="main-section relative h-screen duration-500 ease-in-out">
                <span className="text-black text-6xl font-black">Settings</span>
            </section>
        </>
    )
}

export default GenshinSettings
