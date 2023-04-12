
import React from 'react'

import Sidebar from '../../components/genshin/sidebar/Sidebar'
import CardCharacter from '../../components/genshin/characters/CardCharacter'

function GenshinCharacters() {
    return (
        <>
            <Sidebar />

            <section className="main-section relative h-screen duration-500 ease-in-out" style={{ backgroundColor: "var(--secondary-color)" }}>
                <span className="text-black text-6xl font-black">Characters</span>

                <div className="px-4 flex flex-wrap mt-2">
                    <CardCharacter />
                </div>
            </section>
        </>
    )
}

export default GenshinCharacters
