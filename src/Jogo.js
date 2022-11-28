
export default function Jogo(props) {
    return (
        <div className="caixona">
            <img src={`assets/forca${props.contador}.png`} data-test="game-image"></img>
            <div className="direita">
                <div className="botao"><button className="btnComecar" onClick={props.comecarjogo} data-test="choose-word">Escolher Palavra</button></div>
                <div className="palavra" data-test="word" data-answer={props.dataanswer}>{props.testepalavra.map((sub) => <div className={`underline ${props.color}`}>{sub}</div>)}</div>
            </div>
        </div>
    )
}


