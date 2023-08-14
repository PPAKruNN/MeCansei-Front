import { styled } from 'styled-components'
import Login from './pages/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cadastro from './pages/Cadastro'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'
import { NewProduct } from './pages/NovoProduto'
import MyProducts from './pages/MyProducts'
import { ToastContainer } from 'react-toastify'
import "./toast.css" // Por algum motivo o ToastContainer estava sem usar seu próprio css, então eu tive que importar manualmente.

function App() {

  return (
    <BrowserRouter>
        <StyledApp>
          <div>Navbar</div>          
          <div>
          <ToastContainer position="top-right" closeOnClick pauseOnHover/>
            <Routes>
              <Route path="/" element={<Home/>}/> 
              <Route path="/login" element={<Login/>}/> 
              <Route path="/cadastro" element={<Cadastro/>}/> 
              <Route path="/produto/:id" element={<ProductPage/>}/> 
              <Route path="/produto/novo" element={<NewProduct/>}/> 
              <Route path="/produto/gerenciar" element={<MyProducts/>}/> 
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
