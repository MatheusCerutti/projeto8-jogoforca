export default function Letas(props) {
   return (
    <div className="caixadeletras">
        {props.alfabeto.map((alf) => <Teste letraAtual={alf} novoarray={props.novoarray} modojogo={props.modojogo} riscarLetra={props.riscarLetra}></Teste>)}
    </div>
   ) 
}


function Teste(props) {

    return (
      <div className={`caixaLetra ${props.novoarray.includes(props.letraAtual) ? "jogoff" : props.modojogo}`} onClick={() => props.riscarLetra(props.letraAtual)} data-test="letter">
        <div className="letraDentro" key="letra">{props.letraAtual}</div>
      </div>
    )

  }