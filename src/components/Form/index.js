import Dropdown from "../Dropdown";
import Textcomponent from "../TextComponent";
import Bottom from "../Bottom";
import { useState } from 'react'
import "./Form.css";
const Form = (props) => {
  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

  const theSave = (evento) => {
    evento.preventDefault()
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
      
    })
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')

  }
  return (
    <section className="form">
      <form onSubmit={theSave}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <Textcomponent valor={nome} aoAlterado={valor => setNome(valor)} obrigatorio={true} label="Nome" placeholder="Digite seu Nome" />
        <Textcomponent valor={cargo} aoAlterado={valor => setCargo(valor)} obrigatorio={true} label="Cargo" placeholder="Digite seu Cargo" />
        <Textcomponent valor={imagem} aoAlterado={valor => setImagem(valor)} obrigatorio={true}
          label="Imagem"
          placeholder="Digite o endereço da imagem"
        />
        <Dropdown valor={time} aoAlterado={valor => setTime(valor)} obrigatorio={true} label="Time" itens={props.cards}/>
        <Bottom>
          Criar card
        </Bottom> 
      </form>
    </section>
  );
};

export default Form;
