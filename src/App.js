//importando os componentes criados
import Header from "./components/Header";
import Main from "./components/Main";
import './App.css'; //importando o arquivo de folhas de estilo

export default function App() {
  return (
    <div>
      { /* renderizando o componente Header */}
      <Header />
      { /* renderizando o componente Main */}
      <Main />
    </div>
  );
}