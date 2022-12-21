import { Navbar } from "./components/Navbar";
import { ItemListConteiner } from "./components/ItemListConteiner"

function App() {


  return (
    <div>
      <Navbar />

      <ItemListConteiner greeting="En nuestra bodega, continúa la historia que nace en el viñedo. Una historia que combina trabajo artesanal, tradición y tecnología, para crear experiencias únicas a la hora de disfrutar de grandes vinos." />
     
    </div>
  );
}

export default App;
