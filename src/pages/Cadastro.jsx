import { styled } from "styled-components"

export default function Cadastro() {

    return (
        <CadastroSC>
            <form>
                <label htmlFor="telefone">Número de celular</label>
                <input name="telefone" type="tel" placeholder="+XXX (XX) XXXX-XXXX"/>

                <label htmlFor="email">Email</label>
                <input name="email" type="email" placeholder="Email"/>

                <label htmlFor="cpf">CPF</label>
                <input name="cpf" type="number" placeholder="CPF"/>

                <label htmlFor="Password">Senha</label>
                <input name="Password" type="password" placeholder="Senha"/>

                <label htmlFor="Passwordconfirms">Confirmar senha</label>
                <input name="Passwordconfirm" type="password" placeholder="Senha"/>



                <button>Cadastrar</button>
                <a>Já possui uma conta? Faça login</a>
            </form>
        </CadastroSC>
    )
}

const CadastroSC = styled.div`
    & > form {
        display: flex;
        flex-direction: column;
        width: 300px;
        padding: 0px;
        margin: 0px;
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