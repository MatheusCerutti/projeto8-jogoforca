
export default function Jogo(props) {
    return (
        <div className="caixona">
            <img src={`assets/forca${props.contador}.png`}></img>
            <div className="direita">
                <div className="botao"><button className="btnComecar" onClick={props.comecarjogo}>Escolher Palavra</button></div>
                <div className="palavra">{props.testepalavra.map((sub) => <div className={`underline ${props.color}`}>{sub}</div>)}</div>
            </div>
        </div>
    )
}


