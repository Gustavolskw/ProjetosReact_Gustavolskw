import { useState } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Banner from './Components/Banner/Banner';
import InputBox from './Components/InputBox/InputBox';
import Time from './Components/Time/time';
import Colaborador from './Components/colaborador/colaborador';

function App() {

  const times =
    [
      {
        nome: 'Programação',
        corSecundaria: "#d9f7e9",
        corPrimaria: "#57c278"
      },
      {
        nome: 'Front-End',
        corSecundaria: "#e8f8FF",
        corPrimaria: "#82CFFA"
      },
      {
        nome: 'Data Science',
        corSecundaria: "#F0F8E2",
        corPrimaria: "#A6D157"
      },
      {
        nome: 'Devops',
        corSecundaria: "#FDE7e8",
        corPrimaria: "#e06b69"
      },
      {
        nome: 'UX e Design',
        corSecundaria: "#fae9f5",
        corPrimaria: "#db6ebf"
      },
      {
        nome: 'Mobile',
        corSecundaria: "#fff5d9",
        corPrimaria: "#ffba05"
      },
      {
        nome: ' Inovação e Gestão',
        corSecundaria: "#FFEEDF",
        corPrimaria: "#FF8A29"
      }

    ]

  const [colaboradores, setColaboradores] = useState([])
  const adicionarColaborador = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div>
      <Banner></Banner>
      <InputBox times={times.map(time => time.nome)} cadastroColaborador={colaborador => adicionarColaborador(colaborador)}></InputBox>
      {times.map(time => <Time key={time.nome} nome={time.nome} corPrimnario={time.corPrimaria} corSecundaria={time.corSecundaria}></Time>)}

    </div >
  );
}

export default App;
