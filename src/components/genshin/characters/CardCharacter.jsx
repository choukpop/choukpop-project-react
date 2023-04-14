
import React from 'react'
import { Link } from 'react-router-dom'

function CardCharacter({ id, href, name, rary, elementId, elementName }) {
    return (
        <Link to={href + `/${id}`} className="w-[12.5%] p-4 relative flex flex-col justify-center items-center cursor-pointer transition duration-200 opacity-50 hover:opacity-100 hover:shadow-xl rounded-xl">
            <img
                className={"rounded-t-xl overflow-hidden " + (rary === 5 ? "bg-legendary-from" : "bg-rare-from")}
                width="100"
                height="100"
                src={`/images/characters/${id}.png`}
                alt={id}
            />

            <img
                className="absolute p-1 top-2 right-2 rounded-full flex items-center shadow-md"
                style={{ backgroundColor: "var(--fourth-color)" }}
                width="24"
                height="24"
                src={`/images/elements/${elementId}.png`}
                alt={elementName}
            />

            <h2
                className={"text-white p-1 text-center text-sm rounded-b-xl w-full h-[30px] " + (name.length > 10 ? "gesnhin-small-text" : "")}
                style={{ backgroundColor: "var(--fourth-color)" }}
            >
                {name}
            </h2>
        </Link>
    )
}

export default CardCharacter
