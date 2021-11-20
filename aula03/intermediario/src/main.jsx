import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

let estilo = {
margin: "20px",
background: "tomato",
color: "#fff"
};

let estilo2 = {
  margin: "20px",
  padding: "2rem",
  background: "#45dc",
  color: "#fff"
  };

let botao = <button style={estilo}>Clica aqui</button>
let botao2 = <button style={estilo2}>Clica dois</button>

const menu = [botao, botao2];
ReactDOM.render(
  menu,
  document.getElementById('root')
)
