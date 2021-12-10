//importando os componentes criados
import Header from "./components/Header";
import Main from "./components/Main";

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