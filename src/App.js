import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { ThemeProvider } from '@mui/material';
import theme from './MyTheme';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';
import Checkout from './components/Checkout';



function App() {
  let counter = 0
  const greeting = 'Bienvenidos'
  
  return (
    <CartProvider>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <NavBar counter={counter}/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={greeting} />}/>
            <Route path='/categoria/:categoriaId' element={<ItemListContainer greeting={greeting} />}/>
            <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
          </Routes>
      </BrowserRouter>
    </ThemeProvider>
    </CartProvider>
  );
}

export default App;
