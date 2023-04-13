
import React from 'react'

//! Components
import Sidebar from '../../components/genshin/sidebar/Sidebar'
import CardCharacter from '../../components/genshin/characters/CardCharacter'
import Footbar from '../../components/genshin/Footbar'

//! Data
import { characters } from '../../data/characters'

function GenshinCharacters() {
    // console.log(Object.entries(characters))
    // console.log(Object.entries(characters)[40][0])
    // Object.entries(characters).forEach(entry => {
    //     const [key, value] = entry
    //     console.log(key, value)
    // })

    return (
        <>
            <Sidebar />

            <section className="genshin-main-section relative duration-500 ease-in-out" style={{ backgroundColor: "var(--secondary-color)" }}>
                <span className="text-white text-6xl font-black">Characters</span>

                {/* Add Filters */}

                <div className="px-4 flex flex-wrap mt-2">
                    {Object.values(characters).map((item) =>
                        <CardCharacter
                            key={item.id}
                            id={item.id}
                            href="/genshin/characters"
                            name={item.name}
                            rary={item.rarity}
                            elementId={item.element.id}
                            elementName={item.element.name}
                        />
                    )}
                </div>

                <Footbar />
            </section>
        </>
    )
}

export default GenshinCharacters
