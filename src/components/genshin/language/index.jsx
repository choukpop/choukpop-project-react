
import { useTranslation } from "react-i18next"

const languageOptions = [
    {
        name: "English",
        value: "en"
    },
    {
        name: "Portugues",
        value: "pt"
    }
]

function Language() {
    const { i18n } = useTranslation()

    return (
        <select onChange={(event) => { i18n.changeLanguage(event.target.value) }} className="outline-none rounded-md px-4 py-1 bg-transparent border-none text-white">
            {languageOptions.map(languageOptions => (
                <option key={languageOptions.value} value={languageOptions.value}>{languageOptions.name}</option>
            ))}
        </select>
    )
}

export default Language
