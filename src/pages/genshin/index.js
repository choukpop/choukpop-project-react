
import React from 'react'

import Sidebar from '../../components/genshin/Sidebar'
import Language from '../../components/language'

function GenshinIndex() {
    return (
        <>
            <Sidebar />

            <section className="main-section relative h-screen duration-500 ease-in-out">
                <span className="text-black text-6xl font-black">Index</span>

                <Language />
            </section>
        </>
    )
}

export default GenshinIndex
