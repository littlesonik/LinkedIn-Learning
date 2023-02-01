import './styles/App.css';
import Header from "./components/header"
import Dish /*{Flag}  se puede agregar un '* as D' para indicar que se importan todos los componentes del archivo Dish*/ from "./components/dish"

function App() {
  var dish = "tacos"
  var dishes = ["Tacos", "Ceviche", "Paella"];

  return (
    <div className="App">
      <Header/>
      <Dish platillo= {dish}/> {/*Le estamos traspansando una variable al componente Dish*/}
      
      Yo como {dish} {/* Como es JSX, para diferenciar que un codigo es de JS, hay que escribirlo entre llaves */}

      {/* si export con '*' para agregar el componente se escribiría como 'D.Flag',
      pero no se recomienda ya que es mas confuso al momento de leer el codigo*/}

      <ul>
        {
          dishes.map(dish=> (
          <li>{dish}</li>
          ))
        }
      </ul>
    </div>
  );
}
export default App;
