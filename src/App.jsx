import { styled } from 'styled-components'
import Login from './pages/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cadastro from './pages/Cadastro'

function App() {

  return (
    <BrowserRouter>
        <StyledApp>
          <div>Navbar</div>          
          <div>
            <Routes>
              <Route path="/login" element={<Login/>}/> 
              <Route path="/cadastro" element={<Cadastro/>}/> 
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
