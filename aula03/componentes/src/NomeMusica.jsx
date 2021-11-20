import Rotulo from "./Rotulo"

function NomeMusica(props) {
    let estilo = {
        margin: "20px",
        background: "#abc",
        border: "1px solid #000",
        textAlign: "center"
    }
    
    return <div style={estilo}>
        <Rotulo titulo="Artista: " />
        {props.artista}
        <br />
        <Rotulo titulo="Música: " />
        {props.musica}
    </div>
}

export default NomeMusica;