import Nav from "./components/nav";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

library.add(faBars, faShoppingCart)

function App() {
  return (
    <div className="App">
     <Nav></Nav>
    </div>
  );
}

export default App;
