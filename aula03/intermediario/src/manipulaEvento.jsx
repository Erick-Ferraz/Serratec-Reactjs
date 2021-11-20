import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

function manipulador() {
  alert("Seu nome é Diógenes")
}

let botao = <button onClick={manipulador}>Clica aqui</button>

ReactDOM.render(
  botao,
  document.getElementById('root')
)
