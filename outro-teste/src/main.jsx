import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

let nome = "Diógenes";
var teste = `Olá, ${nome}, bem vindo ao Diógenes`;

function minhaFuncao() {
  return teste;
}

ReactDOM.render(
  minhaFuncao(),
  document.getElementById('root')
)
