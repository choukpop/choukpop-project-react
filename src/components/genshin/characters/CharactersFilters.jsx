
import React, { useState } from 'react'

//! Data
import { characters } from '../../../data/characters'

function CharactersFilters() {
    const [elementFilter, setElementFilter] = useState(null)
    const [weaponFilter, setWeaponFilter] = useState(null)
    const [rarityFilter, setRarityFilter] = useState(null)

    function toggleElement(element) {
        setElementFilter(element)
    }

    function toggleWeapon(weapon) {
        setWeaponFilter(weapon)
    }

    function toggleRarity(rarity) {
        setRarityFilter(rarity)
    }

    return (
        <>
            {/* Elements */}
            <img
                className={"genshin-filter-item max-w-[50px] max-h-[40px] p-1 mx-1 rounded cursor-pointer duration-300 ease-in-out opacity-25 " + (elementFilter === "anemo" ? "opacity-100" : "")}
                onClick={() => toggleElement("anemo")}
                key="anemo"
                width="40"
                height="40"
                src="/images/elements/anemo.png"
                alt="anemo"
                data-type="anemo"
            />
            <img
                className={"genshin-filter-item max-w-[50px] max-h-[40px] p-1 mx-1 rounded cursor-pointer duration-300 ease-in-out opacity-25 " + (elementFilter === "cryo" ? "opacity-100" : "")}
                onClick={() => toggleElement("cryo")}
                key="cryo"
                width="40"
                height="40"
                src="/images/elements/cryo.png"
                alt="cryo"
                data-type="cryo"
            />
            <img
                className={"genshin-filter-item max-w-[50px] max-h-[40px] p-1 mx-1 rounded cursor-pointer duration-300 ease-in-out opacity-25 " + (elementFilter === "dendro" ? "opacity-100" : "")}
                onClick={() => toggleElement("dendro")}
                key="dendro"
                width="40"
                height="40"
                src="/images/elements/dendro.png"
                alt="dendro"
                data-type="dendro"
            />
            <img
                className={"genshin-filter-item max-w-[50px] max-h-[40px] p-1 mx-1 rounded cursor-pointer duration-300 ease-in-out opacity-25 " + (elementFilter === "electro" ? "opacity-100" : "")}
                onClick={() => toggleElement("electro")}
                key="electro"
                width="40"
                height="40"
                src="/images/elements/electro.png"
                alt="electro"
                data-type="electro"
            />
            <img
                className={"genshin-filter-item max-w-[50px] max-h-[40px] p-1 mx-1 rounded cursor-pointer duration-300 ease-in-out opacity-25 " + (elementFilter === "geo" ? "opacity-100" : "")}
                onClick={() => toggleElement("geo")}
                key="geo"
                width="40"
                height="40"
                src="/images/elements/geo.png"
                alt="geo"
                data-type="geo"
            />
            <img
                className={"genshin-filter-item max-w-[50px] max-h-[40px] p-1 mx-1 rounded cursor-pointer duration-300 ease-in-out opacity-25 " + (elementFilter === "hydro" ? "opacity-100" : "")}
                onClick={() => toggleElement("hydro")}
                key="hydro"
                width="40"
                height="40"
                src="/images/elements/hydro.png"
                alt="hydro"
                data-type="hydro"
            />
            <img
                className={"genshin-filter-item max-w-[50px] max-h-[40px] p-1 mx-1 rounded cursor-pointer duration-300 ease-in-out opacity-25 " + (elementFilter === "pyro" ? "opacity-100" : "")}
                onClick={() => toggleElement("pyro")}
                key="pyro"
                width="40"
                height="40"
                src="/images/elements/pyro.png"
                alt="pyro"
                data-type="pyro"
            />



            {/* Weapons */}
            <img
                className={"genshin-filter-item max-w-[50px] max-h-[40px] p-1 mx-1 rounded cursor-pointer duration-300 ease-in-out opacity-25" + (weaponFilter === "mistsplitter_reforged" ? "opacity-100" : "")}
                onClick={() => toggleWeapon("mistsplitter_reforged")}
                key="mistsplitter_reforged"
                width="40"
                height="40"
                src="/images/weapons/mistsplitter_reforged.png"
                alt="mistsplitter_reforged"
                data-type="mistsplitter_reforged"
            />
            <img
                className={"genshin-filter-item max-w-[50px] max-h-[40px] p-1 mx-1 rounded cursor-pointer duration-300 ease-in-out opacity-25" + (weaponFilter === "song_of_broken_pines" ? "opacity-100" : "")}
                onClick={() => toggleWeapon("song_of_broken_pines")}
                key="song_of_broken_pines"
                width="40"
                height="40"
                src="/images/weapons/song_of_broken_pines.png"
                alt="song_of_broken_pines"
                data-type="song_of_broken_pines"
            />
            <img
                className={"genshin-filter-item max-w-[50px] max-h-[40px] p-1 mx-1 rounded cursor-pointer duration-300 ease-in-out opacity-25" + (weaponFilter === "engulfing_lightning" ? "opacity-100" : "")}
                onClick={() => toggleWeapon("engulfing_lightning")}
                key="engulfing_lightning"
                width="40"
                height="40"
                src="/images/weapons/engulfing_lightning.png"
                alt="engulfing_lightning"
                data-type="engulfing_lightning"
            />
            <img
                className={"genshin-filter-item max-w-[50px] max-h-[40px] p-1 mx-1 rounded cursor-pointer duration-300 ease-in-out opacity-25" + (weaponFilter === "thundering_pulse" ? "opacity-100" : "")}
                onClick={() => toggleWeapon("thundering_pulse")}
                key="thundering_pulse"
                width="40"
                height="40"
                src="/images/weapons/thundering_pulse.png"
                alt="thundering_pulse"
                data-type="thundering_pulse"
            />
            <img
                className={"genshin-filter-item max-w-[50px] max-h-[40px] p-1 mx-1 rounded cursor-pointer duration-300 ease-in-out opacity-25" + (weaponFilter === "kaguras_verity" ? "opacity-100" : "")}
                onClick={() => toggleWeapon("kaguras_verity")}
                key="kaguras_verity"
                width="40"
                height="40"
                src="/images/weapons/kaguras_verity.png"
                alt="kaguras_verity"
                data-type="kaguras_verity"
            />



            {/* Rarity */}
            <img
                className={"genshin-filter-item max-w-[50px] max-h-[40px] p-1 mx-1 rounded cursor-pointer duration-300 ease-in-out opacity-25" + (rarityFilter === "rarity_4" ? "opacity-100" : "")}
                onClick={() => toggleRarity("rarity_4")}
                key="rarity_4"
                width="40"
                height="40"
                src="/images/rarity_4.png"
                alt="rarity_4"
                data-type="rarity_4"
            />
            <img
                className={"genshin-filter-item max-w-[50px] max-h-[40px] p-1 mx-1 rounded cursor-pointer duration-300 ease-in-out opacity-25" + (rarityFilter === "rarity_5" ? "opacity-100" : "")}
                onClick={() => toggleRarity("rarity_5")}
                key="rarity_5"
                width="40"
                height="40"
                src="/images/rarity_5.png"
                alt="rarity_5"
                data-type="rarity_5"
            />

        </>
    )
}

export default CharactersFilters
