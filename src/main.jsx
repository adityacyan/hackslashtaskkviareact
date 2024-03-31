import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.jsx'
import './index.css'
import Container1 from "./Container1.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Container1 />
  </React.StrictMode>,
)
