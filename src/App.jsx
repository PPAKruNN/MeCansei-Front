import { styled } from 'styled-components'
import Login from './pages/Login'

function App() {

  return (
    <StyledApp>
      <div>
        <div>Logo</div>
        <div>Menu</div>
      </div>
      <div>
        <Login/>
      </div>
    </StyledApp>
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
