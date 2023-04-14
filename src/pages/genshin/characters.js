
import React from 'react'

//! Components
import Sidebar from '../../components/genshin/sidebar/Sidebar'
import CardCharacter from '../../components/genshin/characters/CardCharacter'

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
            <div className="genshin-sidebar fixed top-0 right-0 h-full z-[100]"></div>

            <section className="genshin-main-section mx-auto relative duration-300 ease-in-out" style={{ backgroundColor: "var(--secondary-color)" }}>
                <div className="flex flex-wrap mx-0">
                    <div className="text-white text-6xl font-black">
                        <h1>Characters</h1>
                    </div>

                    {/* Add Filters */}

                    <div className=""></div>

                    <div className="rounded flex flex-wrap" style={{ backgroundColor: "var(--third-color)" }}>
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
                </div>
            </section>
        </>
    )
}

export default GenshinCharacters
