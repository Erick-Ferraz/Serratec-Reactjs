import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Diogenes + React</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            Número de Diógenes: {count}
          </button>
        </p>
        <p>
          Edite <code>Diogenes.jsx</code> e crie novos Diógenes.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Diogenes
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Diogenes Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
