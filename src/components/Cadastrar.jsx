import { useState } from "react";

function Cadastrar({ addAnimal }) {
  const [url, setUrl] = useState('');
  const [raca, setRaca] = useState('');
  const [regiao, setRegiao] = useState('');
  const [descricao, setDescricao] = useState('');

  const cadastrar = () => {
    if (!url || !raca || !regiao || !descricao) {
      return;
    }

    addAnimal(url, raca, regiao, descricao);

    setUrl('');
    setRaca('');
    setRegiao('');
    setDescricao('');
  };

  return (
    <>
      <div className="cadastrar">
        <h2>Cadastrar</h2>
        <form>
          <label htmlFor="url">Imagem:</label>
          <input type="text" placeholder="Escreva o endereço da imagem" onChange={(e) => setUrl(e.target.value)} value={url} />
          
          <label htmlFor="raca">Raça:</label>
          <input type="text" placeholder="Escreva a raça do animal" onChange={(e) => setRaca(e.target.value)} value={raca} />
          
          <label htmlFor="regiao">Região:</label>
          <input type="text" placeholder="Escreva a região que o animal foi perdido" onChange={(e) => setRegiao(e.target.value)} value={regiao} />
          
          <label htmlFor="descricao">Descrição:</label>
          <input placeholder="Escreva uma descrição" onChange={(e) => setDescricao(e.target.value)} value={descricao}/>
        </form>
        <button className={'bt-adicionar'} onClick={cadastrar}>Adicionar</button>
      </div>
      <hr />
    </>
  );
}

export default Cadastrar;
