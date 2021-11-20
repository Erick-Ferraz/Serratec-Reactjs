import NomeMusica from "./NomeMusica";

function MusicaPreferida() {
    return (
        <div>   
            <NomeMusica artista="AC/DC" musica="Highway to Hell"/>
            <NomeMusica artista="Led Zeppelin" musica="Stairway to Heaven"/> 
            <NomeMusica artista="Nirvana" musica="Smells"/>
            <NomeMusica artista="Tears for fears" musica="Woman in chains" /> 
        </div>
    )
}

export default MusicaPreferida;