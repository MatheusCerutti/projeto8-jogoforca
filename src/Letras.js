export default function Letas(props) {
   return (
    <div className="caixadeletras" disabled={props.disabled}>
        {props.alfabeto.map((alf) => <Teste letraAtual={alf} novoarray={props.novoarray} modojogo={props.modojogo} riscarLetra={props.riscarLetra}></Teste>)}
    </div>
   ) 
}


function Teste(props) {

    return (
      <div className={`caixaLetra ${props.novoarray.includes(props.letraAtual) ? "jogoff" : props.modojogo}`} onClick={() => props.riscarLetra(props.letraAtual)} data-test="letter" disabled={`${props.novoarray.includes(props.letraAtual) ? "disabled" : ""}`}>
        <div className="letraDentro" key="letra">{props.letraAtual}</div>
      </div>
    )

  }