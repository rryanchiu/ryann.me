import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'

import "@fontsource/ibm-plex-mono";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/400-italic.css";
import './main.css'
import './styles/theme-transition.css'
import 'virtual:uno.css'

import Home from "./pages/home.tsx";
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Home/>
    </StrictMode>,
)
