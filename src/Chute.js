export default function Chute(props) {
    return (
        <div className="chute">
            <div className="texto">Já sei a palavra!</div>
            <input type="text" onChange={(event) => props.setImput(event.target.value)} value={props.textoImput} disabled={props.disabled} ></input>
            <button className="btnChute jogon" onClick={props.chutar}>Chutar</button>
        </div>
    )
}