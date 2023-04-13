
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

//! Components
import Sidebar from '../../components/genshin/sidebar/Sidebar'
import Footbar from '../../components/genshin/Footbar'

//! Data
import { characters } from '../../data/characters'

function GenshinCharacter() {
    // get id char
    const { id } = useParams()

    // get current lang 'en'
    const { i18n } = useTranslation()

    async function changeLocale(locale) {
        const _data = await import(`../../data/artifacts/${locale}.json`)
        console.log(_data.default)
        // artifact = _data.default[id]
    }

    let currentLang = i18n.language
    useEffect(() => {
        changeLocale(currentLang)
    }, [currentLang])

    return (
        <>
            <Sidebar />

            <section className="genshin-main-section relative duration-500 ease-in-out" style={{ backgroundColor: "var(--secondary-color)" }}>
                <span className="text-white text-6xl font-black">Character: {id}</span>

                <Footbar />
            </section>
        </>
    )
}

export default GenshinCharacter
