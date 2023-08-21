import './styles.scss'

import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'

const rootEl = document.getElementById('root')
const root = ReactDom.createRoot(rootEl)

root.render(<App headerText='Hello React' isTextShown={true} />)