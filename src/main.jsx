import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.jsx'
import './index.css'
import Container1 from "./Container1.jsx";
import Container2 from "./Container2.jsx";
import Container3 from "./Container3.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Container1 />
      <Container2 />
      <Container3/>
  </React.StrictMode>,
)
