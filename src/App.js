import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Survey from './pages/Survey/Survey';
import CreateCart from './pages/CreateCart/CreateCart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element ={<Home/>}/>
            <Route path='/survey/:title' element ={<Survey/>}/>
            <Route path='/card'element={<CreateCart/>}/>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
