
import React from 'react'

import Sidebar from '../../../components/genshin/sidebar/Sidebar'

function GenshinItems() {
    return (
        <>
            <Sidebar />

            <section className="genshin-main-section relative duration-300 ease-in-out p-8">
                <span className="text-white text-6xl font-black">Items</span>
            </section>
        </>
    )
}

export default GenshinItems
