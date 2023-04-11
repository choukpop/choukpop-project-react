
import React from 'react'

import Sidebar from './../../components/genshin/Sidebar'

function GenshinIndex() {
    return (
        <div className="genshin-body">
            <Sidebar />

            <section className="main-section relative h-screen duration-500 ease-in-out">
                <span className="text-black text-6xl font-black">Index</span>
            </section>
        </div>
    )
}

export default GenshinIndex
