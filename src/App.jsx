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
import AuthContext from './AuthContext.js'
import Navbar from './components/Navbar'

function App() {
  
  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <AuthContext.Provider value={token}>
        <StyledApp>
          <div>
          <ToastContainer position="top-right" closeOnClick pauseOnHover/>
            <Routes>
              <Route path="/" element={<><Navbar/><Home/></>}/> 
              <Route path="/login" element={<Login/>}/> 
              <Route path="/cadastro" element={<Cadastro/>}/> 
              <Route path="/produto/:id" element={<><Navbar/><ProductPage/></>}/> 
              <Route path="/produto/novo" element={<><Navbar/><NewProduct/></>}/> 
              <Route path="/produto/gerenciar" element={<><Navbar/><MyProducts/></>}/> 
            </Routes>
          </div>
        </StyledApp>
      </AuthContext.Provider>
    </BrowserRouter>
  )
}

const StyledApp = styled.div`
  & > div {
    display: flex;
    padding: 100px 0px;
    justify-content: center;
    width: 100%;
    margin-top: 64px;
  }

`

export default App
