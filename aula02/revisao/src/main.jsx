import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

let site = "Diógenes se aventurando no React";

//Novo objeto classe Date
let hoje = new Date();
//Apenas a data
site = hoje.toLocaleDateString();
hoje.setHours(0, 0, 0);
//Data e hora
site = hoje.toLocaleString();

//Exercicio dia da semana
let today = new Date();
const semana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta"];
let dia = today.getDay();
const diaSemana = semana[dia];
const texto = `Hoje é ${diaSemana} sim!`;
//

//Operador ternario



ReactDOM.render(
  texto, document.getElementById('root')

)
