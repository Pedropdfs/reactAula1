import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Cards from './components/Cards';


function App() {

  const card = [
    {
    nome: 'Programação',
    corPrimaria: '#57C278',
    corSecundaria: '#00C86F26'
  },
  {
    nome: 'Frontend',
    corPrimaria: '#82CFFA',
    corSecundaria: '#E8FFFF'
  },
  {
    nome: 'Devops',
    corPrimaria: '#A6D157',
    corSecundaria: '#E9FFE3'
  },
  {
    nome: 'Design',
    corPrimaria: '#DB6EBF',
    corSecundaria: '#DC6EBE26'
  },
  {
    nome: 'Inovação e gestão',
    corPrimaria: '#FF8A29',
    corSecundaria: '#FF8C2A26'
  }
  ]

  const [colaboradores, setColaboradores] = useState([])
  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }
  return (
    <div className="App">
      <Banner/>
      <Form cards={card.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      {card.map(time => <Cards 
                            key={time.nome} 
                            nome={time.nome} 
                            corSecundaria={time.corSecundaria} 
                            corPrimaria={time.corPrimaria}
                            colaboradores={colaboradores.filter(colaborador => colaborador.time == time.nome)}
                            ></Cards>)}
    </div>
  );
}

export default App;
