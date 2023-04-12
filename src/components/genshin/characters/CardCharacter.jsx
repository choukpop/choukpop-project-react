
import React from 'react'
import { Link } from 'react-router-dom'

function CardCharacter({ id, href, name, rary, elementId, elementName, ownChar, constelation }) {
    // let ownChar = true
    // let rary = 5
    let calcConst = Math.max(0, 0)

    return (
        <Link to={href + `/${id}`} className={"mx-2 my-6 w-24 h-24 relative cursor-pointer transition duration-100 hover:opacity-100 hover:shadow-xl rounded-xl " + (!ownChar ? "opacity-50" : "")}>
            <div className={"w-full rounded-t-xl bg-opacity-50 overflow-hidden " + (rary === 5 ? "bg-legendary-from" : "bg-rare-from")}>
                <img className="w-full h-full" width="106" height="106" src={`/images/characters/${id}.png`} alt={id} />
            </div>

            <div
                className={"absolute top-0 right-0 bg-black bg-opacity-75 rounded-full flex items-center shadow-md " +
                (calcConst && calcConst >= 6 ? "text-legendary-from" : "text-white")}
                style={{ padding: "4px", margin: "-10px" }}
            >
                {calcConst || calcConst >= 0 ? <span className="mx-1 text-xs font-semibold font-['Verdana']">C{calcConst}</span> : ""}
                <img className="w-4 h-4" src={`/images/elements/${elementId}.png`} alt={elementName} />
            </div>

            <div className="rounded-b-xl" style={{ height: "29px", backgroundColor: "var(--bg-item)" }}>
                <div className="w-full">
                    <p className={"text-white p-1 text-center text-sm " + (name.length > 10 ? "gesnhin-small-text" : "")}>
                        {name}
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default CardCharacter
