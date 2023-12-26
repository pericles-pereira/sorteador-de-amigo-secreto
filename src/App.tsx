import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Layout from './components/Layout';
import Configuracao from './pages/Configuracao';
import Sorteio from './pages/Sorteio';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={ <Layout /> }>
            <Route index element={ <Configuracao /> } />
            <Route path='sorteio' element={ <Sorteio /> } />
          </Route>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
