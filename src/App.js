import React from "react"
//import Letras from "./Components/Letras"

function App() {
  const [modojogo,setJogo]= React.useState("jogoff")
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  return (
    <>
      <div className="caixona">
        <img src="assets/forca0.png"></img>
        <div className="direita">
          <div className="botao"><button className="btnComecar" onClick={comecarjogo}>Escolher Palavra</button></div>
          <div className="palavra">quarentena</div>
        </div>
      </div>
      <div className="teclado">
            <div className="caixadeletras">
                {alfabeto.map((alf) => <Teste letraAtual={alf}></Teste>)}
            </div>
            <div className="chute">
              <div className="texto">Já sei a palavra!</div>
              <input type="text"></input>
              <button className = "btnChute jogon" >Chutar</button>
            </div>
        </div>
     
      

    </>
  );

  function Teste(props) {
    
    return (
        <div className={`caixaLetra + ${modojogo}`}>
            <div className="letraDentro">{props.letraAtual}</div>
        </div>
    )

}

function comecarjogo(){
  let comecarjogo = "caixaLetra jogon"
  setJogo(comecarjogo)
}

}

export default App;
