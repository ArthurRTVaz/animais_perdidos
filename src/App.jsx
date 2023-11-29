import { useState } from 'react'
import './App.css'
import Cadastrar from './components/Cadastrar'
import Listagem from './components/Listagem'

function App() {

  const [lista, setLista] = useState([
    {id: 1, url: "https://pm1.aminoapps.com/6434/36a290a925f1ae788e0e545f3e8bfbafcad7e4ff_hq.jpg", raca: "Cachorro", regiao: "Lençóis Paulista", descricao: "Texto descritivo", statuss: false},
  ])

  const addAnimal = (txt_url, txt_raca, txt_regiao, txt_descricao) => {
    const newLista = [...lista, {
      id: Math.floor(Math.random()*100000),
      url: txt_url,
      raca: txt_raca,
      regiao: txt_regiao,
      descricao: txt_descricao,
      statuss: false
    }]
    setLista(newLista);
  }
  const removerAnimal = (id) => {
    const newLista = [...lista].filter(item => 
      item.id !== id
      )
    setLista(newLista);
  }
  const alterarStatus = (id) => {
    const newLista = lista.map((item) =>
      item.id === id ? { ...item, statuss: !item.statuss } : item
    );
    setLista(newLista);
  };


  return (
    <>
    <div className='app'>
      <h1>Lista de Animais Perdidos</h1>
      <hr />
      <Cadastrar addAnimal={addAnimal}/>
      {
        lista
        .map((item) => (
          <Listagem item={item} removerAnimal={removerAnimal} alterarStatus={alterarStatus}/>
        ))
      }
    </div>
    </>
  )
}

export default App
