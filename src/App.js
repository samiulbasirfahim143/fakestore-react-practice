import './App.css';
import Products from './Component/Products/Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Component/Navbar/Nav';
import { useState } from 'react';


function App() {
  const [count, setCount] = useState(0)
  const cartCount = () => setCount(count + 1)
  return (
    <div>
      <Nav id={count}></Nav>
      <Products cartCount={cartCount}></Products>
    </div>
  );
}

export default App;
