import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Title from './Components/Title.jsx'
import CVForm from './Components/CVForm.jsx'
import './index.css'
import './Styles/CVForm.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CVForm />
    <Title />
  </React.StrictMode>,
)
