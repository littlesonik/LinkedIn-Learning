import './styles/App.css';
import Header from "./components/header"
import Dish, {Flag} /* se puede agregar un '* as D' para indicar que se importan todos los componentes del archivo Dish*/ from "./components/dish"

function App() {
  return (
    <div className="App">
      <Header/>
      <Dish/>
      <Flag/>
      {/* si export con '*' para agregar el componente se escribiría como 'D.Flag',
      pero no se recomienda ya que es mas confuso al momento de leer el codigo*/}
    </div>
  );
}
export default App;
