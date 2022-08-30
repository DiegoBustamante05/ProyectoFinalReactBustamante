import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { ThemeProvider } from '@mui/material';
import theme from './MyTheme';
import Promesas from './test/Promesas';
import ItemCount from './components/ItemCount';





function App() {
  let counter = 0
  const greeting = 'Bienvenidos'
  const onAdd = () => {
    console.log('Agregaste un producto al carrito')
  };
  

  return (
    <ThemeProvider theme={theme}>
      <NavBar counter={counter}/>
      <h1 align="center"> Bahia Cripto Mining</h1>
      <ItemListContainer greeting={greeting} />
      <ItemCount stock="5" initial={0} onAdd={onAdd}/>
    </ThemeProvider>
  );
}

export default App;
