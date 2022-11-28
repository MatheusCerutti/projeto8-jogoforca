import React from "react"
import palavras from "./palavras"
import palavra from "./palavras"
//import Letras from "./Components/Letras"

function App() {
  const [modojogo, setJogo] = React.useState("jogoff")
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  const [novoarray, setArray] = React.useState([])
  const [jogando, setJogando] = React.useState("off")
  const [palavrasorteada, setPalavra] = React.useState("")
  const [arraypalavrasorteada, setPalavraArray] = React.useState("")
  const palavrabackup = [...palavrasorteada]
  const [testepalavra, setUnderline] = React.useState([])
  const palavrasublinhada = palavrabackup.map(() => "_")
  const [contador, setContador] = React.useState(0)
  const [color, setCor] = React.useState("")
  const [textoImput, setImput] = React.useState("")
  const [chutasso, setChutasso] = React.useState([])


  return (
    <>
      <div className="caixona">
        <img src={`assets/forca${contador}.png`}></img>
        <div className="direita">
          <div className="botao"><button className="btnComecar" onClick={comecarjogo}>Escolher Palavra</button></div>
          <div className="palavra">{testepalavra.map((sub) => <div className={`underline ${color}`}>{sub}</div>)}</div>
        </div>
      </div>
      <div className="teclado">
        <div className="caixadeletras">
          {alfabeto.map((alf) => <Teste letraAtual={alf} key={alf}></Teste>)}
        </div>
        <div className="chute">
          <div className="texto">Já sei a palavra! {palavrasorteada}</div>
          <input type="text" onChange={(event) => setImput(event.target.value)} value={textoImput}></input>
          <button className="btnChute jogon" onClick={chutar}>Chutar</button>
        </div>
      </div>



    </>
  );

  function Teste(props) {

    return (
      <div className={`caixaLetra ${novoarray.includes(props.letraAtual) ? "jogoff" : modojogo}`} onClick={() => riscarLetra(props.letraAtual)}>
        <div className="letraDentro" key="letra">{props.letraAtual}</div>
      </div>
    )

  }

  function chutar() {
    const palavrachutada = [...textoImput]
    verificarChute(palavrachutada)
    setImput("")
  }

  function verificarChute(palavrachutada) {
    const arraydochute = []
    arraypalavrasorteada.forEach((letra, i) => {
      if (arraypalavrasorteada[i] === palavrachutada[i]) {
        arraydochute.push("certo")
        setChutasso(arraydochute)
      } else {
        arraydochute.push("errado")
        setChutasso(arraydochute)
      }
    })

    if (!arraydochute.includes("errado")) {
      setCor("ganhar")
      setUnderline(arraypalavrasorteada)
    } else {
      acabarJogo()
    }


  }


  function riscarLetra(letrachamada) {
    console.log(palavrasorteada)
    console.log(palavrabackup)
    console.log(testepalavra)

    const riscaletras = [...novoarray, letrachamada]
    if (jogando === "on") {
      setArray(riscaletras)
      if (palavrasorteada.includes(letrachamada)) {
        console.log("tem essa letra")
        verificarLetra(letrachamada)
      } else {
        const novoValor = contador + 1;
        setContador(novoValor);
        if (novoValor === 6) {
          acabarJogo()
        }
      }

    }
  }

  function acabarJogo() {
    setUnderline(arraypalavrasorteada)
    setCor("perder")
    setContador(6)

    console.log("Jogo Acabou")
  }

  function verificarLetra(letrachamada) {
    const novaPalavrajogo = [...testepalavra]
    palavrabackup.forEach((letra, i) => {
      if (palavrabackup[i] === letrachamada) {
        novaPalavrajogo[i] = letra
        if (!novaPalavrajogo.includes("_")) {
          setCor("ganhar")
        }
      }
    })

    setUnderline(novaPalavrajogo)
    console.log(testepalavra)



    /*palavrasorteada.forEach((letra,i) => {
      if(palavrasorteada[i]===letrachamada){
        testepalavra[i] = letra
      }
    });
        setUnderline(testepalavra)*/
  }

  function comecarjogo() {
    let comecarjogo = "jogon"
    setJogo(comecarjogo)
    setJogando("on")
    selecionarPalavra()
  }

  function selecionarPalavra() {
    const palavradavez = palavras[Math.floor(Math.random() * palavras.length)]
    const arraypalavradavez = [...palavradavez]
    setPalavra(palavradavez)
    setPalavraArray(arraypalavradavez)
    criarSublinhado(arraypalavradavez)
  }

  function criarSublinhado(array) {
    let biribu = array.map(() => "_")
    setUnderline(biribu)
  }


}

export default App;
