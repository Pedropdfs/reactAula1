
import './Textcomponent.css'

const Textcomponent = (props) => {
const Placeholder = `${props.placeholder}...`

const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value)
}
return (
    <div className="text-component">
        <label>{props.label}</label>
        <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={Placeholder}/>
    </div>
)
}

export default Textcomponent