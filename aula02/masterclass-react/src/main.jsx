import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

let paragrafo = (
  <div>
    <h1>Retorna apenas UM elemento</h1>
    <h3>Mas, se eu botar entre uma div</h3>
    <h4>Que aceita diversos elementos dentro dela</h4>
    <p>Aí eu consigo botar um monte de elementos, e retornar apenas um</p>
    <h2>A propria div!</h2>
    <hr />
    <textarea rows={10} />
  </div>
);
ReactDOM.render(
  paragrafo,
  document.getElementById('root')
)

// ------------------------------------------

let nome = "Diógenes";
let elemento = <p>Boa noite, {nome}</p>;

ReactDOM.render(
  elemento,
  document.getElementById('root')
)

function cliquei() {
  alert("Alerta de Diógenes")
}

let botao = <button onClick={cliquei}>Clique aqui</button>;

ReactDOM.render(
  botao,
  document.getElementById('root')
)