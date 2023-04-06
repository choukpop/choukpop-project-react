import { Route, Routes } from "react-router-dom"

import { NotFound } from "./NotFound"
import Home from "./pages/Home"
import GenshinHome from "./pages/genshin/GenshinHome"

import './styles/globals.css'

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/genshin" element={<GenshinHome />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}

export default App
