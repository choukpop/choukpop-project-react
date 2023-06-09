
import { Route, Routes } from 'react-router-dom'

//! Import CSS
import './styles/globals.css'

import { NotFound } from './NotFound'
import Home from './pages/Home'

//! JS Pages
import GenshinHome from './pages/genshin/index'
import GenshinCharacters from './pages/genshin/characters'
import GenshinCharacterSelected from './pages/genshin/character_selected'
import GenshinItems from './pages/genshin/database/items'
import GenshinWeapons from './pages/genshin/database/weapons'
import GenshinArtifacts from './pages/genshin/database/artifacts'
import GenshinSettings from './pages/genshin/settings'

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                
                {/* Genshin Impact Page */}
                <Route path="/genshin" element={<GenshinHome />} />
                <Route path="/genshin/characters">
                    <Route index element={<GenshinCharacters />} />
                    <Route path=":id" element={<GenshinCharacterSelected />} />
                </Route>

                <Route path="/genshin/database/items" element={<GenshinItems />} />
                <Route path="/genshin/database/weapons" element={<GenshinWeapons />} />
                <Route path="/genshin/database/artifacts" element={<GenshinArtifacts />} />

                <Route path="/genshin/settings" element={<GenshinSettings />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}

export default App
