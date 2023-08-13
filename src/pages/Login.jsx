import { styled } from "styled-components"

export default function Login() {

    return (
        <LoginSC>
            <div>
                <h1>Logo</h1>
                <h1>Entrar</h1>
                <p>Informe seus dados para acessar sua conta</p>
            </div>
            
            <hr></hr>
            <form>
                <label htmlFor="Username">Usuário</label>
                <input name="Username" type="text" placeholder="CPF ou Email"/>

                <label htmlFor="Password">Senha</label>
                <input name="Password" type="password" placeholder="Senha"/>

                <button>Login</button>
                <a>Não possui uma conta? Cadastre-se</a>
            </form>
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
        gap: 10px;

        input {
            width: 100%;
            padding: 10px 20px;
        }

        button { 
            width: 100%;
            padding: 10px 20px;
            margin: 0px 7%; 
        }
    }
`