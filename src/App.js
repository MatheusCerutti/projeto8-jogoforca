import React from "react"
import palavras from "./palavras"
import Jogo from "./Jogo"
import Letras from "./Letras"
import Chute from "./Chute"
//import Letras from "./Components/Letras"

function App() {
  const [modojogo, setJogo] = React.useState("jogoff")
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  const [novoarray, setArray] = React.useState([])
  const [jogando, setJogando] = React.useState("off")
  const [palavrasorteada, setPalavra] = React.useState("")
  const [arraypalavrasorteada, setPalavraArray] = React.useState("")
  const [testepalavra, setUnderline] = React.useState([])
  const [contador, setContador] = React.useState(0)
  const [color, setCor] = React.useState("")
  const [textoImput, setImput] = React.useState("")
  const [chutasso, setChutasso] = React.useState([])
  const [disabled,setDisabled] = React.useState("disabled")


  return (
    <>
      <Jogo contador={contador} comecarjogo={comecarjogo} testepalavra={testepalavra} color={color}></Jogo>
      <div className="teclado">
        <Letras alfabeto={alfabeto} novoarray={novoarray} modojogo={modojogo} riscarLetra={riscarLetra}></Letras>
        <Chute setImput={setImput} textoImput={textoImput} chutar={chutar} disabled={disabled}></Chute>
      </div>
    </>
  );

  function comecarjogo() {
    let comecarjogo = "jogon"
    setJogo(comecarjogo)
    setJogando("on")
    selecionarPalavra()
    setCor("")
    setContador(0)
    setArray([])
    setDisabled("")
  }

  function selecionarPalavra() {
    const palavradavez = palavras[Math.floor(Math.random() * palavras.length)]
    const arraypalavradavez = [...palavradavez]
    setPalavra(palavradavez)
    setPalavraArray(arraypalavradavez)
    criarSublinhado(arraypalavradavez)
  }

  function criarSublinhado(array) {
    let arrayUnderline = array.map(() => "_")
    setUnderline(arrayUnderline)
  }

  function riscarLetra(letrachamada) {
    if (!novoarray.includes(letrachamada)) {
      const riscaletras = [...novoarray, letrachamada]
      if (jogando === "on") {
        setArray(riscaletras)
        if (palavrasorteada.includes(letrachamada)) {
          verificarLetra(letrachamada)
        } else {
          const novoValor = contador + 1;
          if (novoValor <= 6) {
            setContador(novoValor);
            if (novoValor === 6) {
              acabarJogo()
            }
          }

        }

      }
    }
  }

  function verificarLetra(letrachamada) {
    const novoUnderline = [...testepalavra]
    arraypalavrasorteada.forEach((letra, i) => {
      if (arraypalavrasorteada[i] === letrachamada) {
        novoUnderline[i] = letra
        if (!novoUnderline.includes("_")) {
          setCor("ganhar")
          setArray(alfabeto)
          setDisabled("disabled")
        }
      }
    })
    setUnderline(novoUnderline)
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
      setArray(alfabeto)
      setDisabled("disabled")
    } else {
      acabarJogo()
    }


  }

  function acabarJogo() {
    setUnderline(arraypalavrasorteada)
    setCor("perder")
    setContador(6)
    setArray(alfabeto)
    setDisabled("disabled")
  }

}

export default App;
