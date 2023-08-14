import { Link } from "react-router-dom"
import { styled } from "styled-components"

export default function Cadastro() {

    return (
        <CadastrarSC>
            <div>
                <h1>Logo</h1>
                <h1>Cadastro</h1>
            </div>

            <form>
                <label htmlFor="name">Nome completo</label>
                <input name="name" type="text" placeholder="Nome completo"/>

                <label htmlFor="cpf">CPF</label>
                <input name="cpf" type="text" placeholder="XXX.XXX.XXX-XX"/>

                <label htmlFor="phone">Telefone</label>
                <span>
                    <span>+55</span>
                    <input name="phone" type="tel" placeholder="(XX) XXXX-XXXX"/>
                </span>

                <label htmlFor="email">Email</label>
                <input name="email" type="email" placeholder="Email"/>
                
                <label htmlFor="Password">Senha</label>
                <input name="Password" type="password" placeholder="Senha"/>

                <label htmlFor="Password">Confirmar senha</label>
                <input name="Password" type="password" placeholder="Confirmar senha"/>

                <button>Login</button>
            </form>
        
            <footer>
               <span>Já possui uma conta?</span> <Link to="/login">Faça login</Link> 
            </footer>

        </CadastrarSC>
    )
}

const CadastrarSC = styled.div`
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

        > span {
            display: flex;
            align-items: center;
            text-align: center;

            margin-top: 5px;
            margin-bottom: 25px;

            span {
                padding: 10px 20px;
                border: solid 2px #EEEFF2;

                border-right: none;
                border-radius: 5px 0px 0px 5px;
                
                font-size: 16px;
            }

            input {
                padding: 10px 20px;                
                font-size: 14px;
                margin: 0px;
                border-radius: 0px 5px 5px 0px;
            };
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