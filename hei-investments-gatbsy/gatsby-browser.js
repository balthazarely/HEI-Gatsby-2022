import React from 'react'
import './src/styles/global.scss'
import './src/styles/navigation.scss'

import '@fontsource/nunito-sans'

import { AnimatePresence } from 'framer-motion'
import GlobalContext from './src/context/Context'

export const wrapPageElement = ({ element }) => (
    <div>
        <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
    </div>
)

export const wrapRootElement = ({ element }) => (
    <>
        <link
            href="https://unpkg.com/maplibre-gl@1.15.2/dist/maplibre-gl.css"
            rel="stylesheet"
        />

        <GlobalContext>{element}</GlobalContext>
    </>
)
