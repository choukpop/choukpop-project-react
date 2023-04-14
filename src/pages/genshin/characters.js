
import React, { useEffect, useState } from 'react'

//! Components
import Sidebar from '../../components/genshin/sidebar/Sidebar'
import CardCharacter from '../../components/genshin/characters/CardCharacter'
import CharactersFilters from '../../components/genshin/characters/CharactersFilters'

//! Data
import { characters } from '../../data/characters'

function GenshinCharacters() {
    const [dataCharacters, setDataCharacters] = useState(characters)

    return (
        <>
            <Sidebar />
            <div className="genshin-sidebar fixed top-0 right-0 h-full z-[100]"></div>

            <section className="genshin-main-section mx-auto relative duration-300 ease-in-out" style={{ backgroundColor: "var(--secondary-color)" }}>
                <div className="flex flex-wrap flex-col mx-0">
                    <div className="text-white text-6xl font-black">
                        <h1>Characters</h1>
                    </div>

                    {/* Not Work */}
                    <div className="mb-5 w-full p-1 rounded" style={{ backgroundColor: "var(--third-color)" }}>
                        <div className="flex flex-wrap justify-center items-center h-full">
                            <CharactersFilters />
                        </div>
                    </div>

                    <div className="rounded flex flex-wrap" style={{ backgroundColor: "var(--third-color)" }}>
                        {Object.values(dataCharacters).map((item) =>
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
