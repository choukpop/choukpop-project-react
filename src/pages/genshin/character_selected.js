
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

//! Components
import Sidebar from '../../components/genshin/sidebar/Sidebar'

//! Data
// import { characters } from '../../data/characters'
import { builds } from '../../data/build'

function GenshinCharacter() {
    const [character, setCharacter] = useState("")

    // get id char from url
    const { id } = useParams()
    const currentCharacter = id

    async function getSelectedCharacter(id) {
        const _data = await import(`../../data/characterData/${id}.json`)
        setCharacter(_data.default)
    }











    // get current lang 'en'or 'pt'
    // const { i18n } = useTranslation()

    // async function changeLocale(locale) {
    //     const _data = await import(`../../data/artifacts/${locale}.json`)
    //     console.log(_data.default)
    // }

    // let currentLang = i18n.language
    // useEffect(() => {
    //     changeLocale(currentLang)
    // }, [currentLang])

    useEffect(() => {
        getSelectedCharacter(currentCharacter)
    }, [currentCharacter])

    return (
        <>
            <Sidebar />

            <section className="genshin-main-section mx-auto relative duration-300 ease-in-out" style={{ backgroundColor: "var(--secondary-color)" }}>
                <div className="flex flex-wrap flex-col mx-0">
                    <span className="text-white text-6xl font-black">Character: {id}</span>
                    {/* <img src={`/images/skills/${id}/talent_1.png`} alt={`${id}_talent`} /> */}
                </div>
            </section >
        </>
    )
}

export default GenshinCharacter
