
import React from 'react'

import Sidebar from '../../components/genshin/Sidebar'
import CardCharacter from '../../components/genshin/characters/CardCharacter'

function GenshinCharacters() {
    return (
        <>
            <Sidebar />

            <section className="main-section relative h-screen duration-500 ease-in-out">
                <span className="text-black text-6xl font-black">Characters</span>

                <div class="px-4 md:pl-6 md:pr-4 flex flex-wrap max-w-screen-xl mt-2">
                    <CardCharacter />
                </div>
            </section>
        </>
    )
}

export default GenshinCharacters
