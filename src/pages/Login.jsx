import { Link } from "react-router-dom"
import { styled } from "styled-components"

export default function Login() {

    console.log(import.meta.env.VITE_API_URL)
    
    return (
        <LoginSC>
            <div>
                <h1>Logo</h1>
                <h1>Entrar</h1>
            </div>

            <form>
                <label htmlFor="Username">Usuário</label>
                <input name="Username" type="text" placeholder="CPF ou Email"/>

                <label htmlFor="Password">Senha</label>
                <input name="Password" type="password" placeholder="Senha"/>

                <button>Login</button>
            </form>
        
            <footer>
               <span>Não possui uma conta?</span> <Link to="/cadastro">Cadastre-se</Link> 
            </footer>

        </LoginSC>
    )
}

const LoginSC = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    width: 300px;

    & > div:nth-child(1) {
        display: flex;
        flex-direction: column;
        align-items: center;
        
    }

    & > form {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 0px;

        padding: 20px;
        background-color: #FFF;
        border-radius: 5px;

        label {
            font-weight: 500;
        }

        input {
            box-sizing: border-box;
            width: 100%;
            padding: 10px 20px;

            margin-top: 5px;
            margin-bottom: 25px;

            border: solid 2px #EEEFF2;
            border-radius: 5px;
        }

        button { 
            box-sizing: border-box;
            width: 100%;
            padding: 10px 20px;
            border-radius: 5px;

            background-color: #2EA44F;
            border: none;
            
            color: #FFF;
            font-weight: bold;
        }
    }
    
    footer {
        display: flex;
        justify-content: center; 
        gap: 5px;

        width: 100%;
        border: solid 2px #EEEFF2;
        border-radius: 5px;
        padding: 20px;
        
        a {
            text-decoration: none;
            color: #2D7DDB;
        }
    }
`