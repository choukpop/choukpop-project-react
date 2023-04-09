
import React from 'react'
import { Link } from 'react-router-dom'

import { characters } from './../../../data/characters'

function CardCharacter() {
    // console.log(characters.raiden_shogun)
    // Object.entries(characters).forEach(entry => {
    //     const [key, value] = entry
    //     console.log(key, value)
    // })

    let id = 'raiden_shogun'
    let ownChar = true
    let rary = 4

    return (
        <Link className={"m-2 cell relative cursor-pointer transition duration-100 hover:opacity-100 hover:shadow-xl rounded-xl " + (!ownChar ? "opacity-50" : "")}>
            <div className={"w-full rounded-t-xl bg-opacity-50 overflow-hidden " + (rary === 5 ? "bg-legendary-from" : "bg-rare-from")}>
                <img className="w-full h-full" width="106" height="106" src={`/images/characters/${id}.png`} alt={characters.raiden_shogun.name} />
            </div>
            <div className="absolute top-0 right-0 bg-black bg-opacity-75 rounded-full flex items-center shadow-md text-white">
                <img className="w-4 h-4" src={`/images/elements/${characters.raiden_shogun.element.name}.png`} alt={characters.raiden_shogun.element.name} />
            </div>
            <div className="relative overflow-hidden rounded-b-xl bg-black" style={{ height: "29px" }}>
                <div className="w-full overflow-hidden absolute bottom-0">
                    <p className="text-white p-1 text-center text-sm">{characters.raiden_shogun.name}</p>
                </div>
            </div>
        </Link>
    )
}

export default CardCharacter
