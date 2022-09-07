import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { ThemeProvider } from '@mui/material';
import theme from './MyTheme';
import ItemDetailContainer from './components/ItemDetailContainer';





function App() {
  let counter = 0
  const greeting = 'Bienvenidos'
  
  return (
    <ThemeProvider theme={theme}>
      <NavBar counter={counter}/>
      <h1 align="center"> Bahia Cripto Mining</h1>
      <ItemDetailContainer/>
    </ThemeProvider>
  );
}

export default App;
