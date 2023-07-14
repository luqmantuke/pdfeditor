import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import PDFEdit from './components/PDFEdit';
function App() {
  return (
      <ChakraProvider>
     <PDFEdit />
    </ChakraProvider>
  );
}

export default App;
