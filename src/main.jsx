import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles.css'
import CounterApp from './CounterApp'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App title="Hola, Nicolas" subtitle={123}/> */}
    <CounterApp value={10}/>
  </React.StrictMode>,
)
