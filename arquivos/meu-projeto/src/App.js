import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Matheus'

  const newName = name.toUpperCase()

  function sum(a, b) {
    return a + b
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <h1>Olá React!</h1>
      <p>Meu primeiro App</p>
      <h2>Alterando o JSX</h2>
      <p>Olá, {name}</p>
      <p>Olá, {newName}</p>
      <p>Soma: {2 + 2}</p>
      <p>Soma: {sum(1, 2)}</p>
      <img src={url} alt="Minha imagem" />
    </div>
  );
}

export default App;
