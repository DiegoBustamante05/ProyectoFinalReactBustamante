import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { ThemeProvider } from '@mui/material';
import theme from './MyTheme';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter , Routes, Route} from 'react-router-dom'




function App() {
  let counter = 0
  const greeting = 'Bienvenidos'
  
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <NavBar counter={counter}/>
        <h1>Bahia Cripto Mining</h1>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={greeting} />}/>
            <Route path='/categoria/:categoriaId' element={<ItemListContainer greeting={greeting} />}/>
            <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>
          </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
