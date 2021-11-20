import React from 'react'
import ReactDOM from 'react-dom'

const musicas = ["Sabão Crá-Crá", "Anjos", "Jorge da Capadócia", "Rompeu o couro"];
const lista = [];

for (let i = 0; i < musicas.length; i++) {
  let nome = musicas[i];
  let elemento = <li key={i}>{nome}</li>
  lista.push(elemento);
}

const final = <ol>{lista}</ol>

ReactDOM.render(
  final,
  document.getElementById('root')
)