export default function Letras() {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    return (
        <div className="teclado">
            <div className="caixadeletras">
                {alfabeto.map((alf) => <Teste letraAtual={alf}></Teste>)}
            </div>
            <div className="chute"></div>
        </div>
    )
}


function Teste(props) {
    return (
        <div className="caixaLetra">
            <div className="letraDentro">{props.letraAtual}</div>
        </div>
    )


}