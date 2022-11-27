import Letras from "./Components/Letras"

function App() {
  return (
    <>
      <div className="caixona">
        <img src="assets/forca0.png"></img>
        <div className="direita">
          <div className="botao"><button>Escolher Palavra</button></div>
          <div className="palavra">quarentena</div>
        </div>
      </div>
      <Letras></Letras>

    </>
  );
}

export default App;
