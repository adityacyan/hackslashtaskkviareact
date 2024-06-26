import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.jsx'
import './index.css'

import Body from "./Body.jsx";
import Button from "./Button.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Body />
      <Button/>
  </React.StrictMode>,
)
