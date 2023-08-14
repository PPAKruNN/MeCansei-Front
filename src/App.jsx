import { styled } from 'styled-components'
import Login from './pages/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cadastro from './pages/Cadastro'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'
import { NewProduct } from './pages/NovoProduto'
import Gallery from './components/Gallery'

function App() {

  return (
    <BrowserRouter>
        <StyledApp>
          <div>Navbar</div>          
          <div>
            <Routes>
              <Route path="/" element={<Home/>}/> 
              <Route path="/login" element={<Login/>}/> 
              <Route path="/cadastro" element={<Cadastro/>}/> 
              <Route path="/produto/:id" element={<ProductPage/>}/> 
              <Route path="/produto/novo" element={<NewProduct/>}/> 
              <Route path="/teste" element={<Gallery/>}/> 
            </Routes>
          </div>
        </StyledApp>
    </BrowserRouter>
  )
}

const StyledApp = styled.div`
  & > div:nth-child(1) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100px;
    background-color: #f1f1f1;
  }

  & > div:nth-child(2) {
    display: flex;
    padding: 100px 0px;
    justify-content: center;
    width: 100%;
  }

`

export default App
