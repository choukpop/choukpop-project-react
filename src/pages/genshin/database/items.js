
import React from 'react'

import Sidebar from '../../../components/genshin/sidebar/Sidebar'

function GenshinItems() {
    return (
        <>
            <Sidebar />

            <section className="main-section relative h-screen duration-500 ease-in-out">
                <span className="text-white text-6xl font-black">Items</span>
            </section>
        </>
    )
}

export default GenshinItems
