import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { ThemeProvider } from '@mui/material';
import theme from './MyTheme';




function App() {
  let cart = 5
  const greeting = 'Bienvenidos'
  

  return (
    <ThemeProvider theme={theme}>
      <NavBar cart={cart}/>
      <h1 align="center"> Bahia Cripto Mining</h1>
      <ItemListContainer greeting={greeting} />
    </ThemeProvider>
  );
}

export default App;
