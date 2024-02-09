import './Colaboradores.css'
const Colaboradores = ({nome, imagem, cargo,mykey, corDeFundo}) => {
    return (
        <div className='colaborador' key={mykey+nome}>
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
            <img src={imagem} alt={nome}/>
            </div>
            <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
        </div>
        </div>

    )
}

export default Colaboradores