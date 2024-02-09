import Colaboradores from '../Colaboradores'
import './Cards.css'
const Cards = (props) => {
    return (
        props.colaboradores.length>0 && <section className='cards' style={{backgroundColor: props.corSecundaria }}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradoes'>
            {props.colaboradores.map(colaborador => <Colaboradores corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} />)}
            </div> 
        </section>
  
    )
}
export default Cards