import { Link, useNavigate } from "react-router-dom"
import { styled } from "styled-components"
import MeCansei from "../assets/MeCanseiLogo.png"
import { useRef } from "react"
import { toast } from "react-toastify";
import axios from "axios";

export default function Cadastro() {

    const name = useRef();
    const cpf = useRef();
    const phone = useRef();
    const email = useRef();
    const password = useRef();
    const confirmPassword = useRef();
    
    const navigate = useNavigate()

    async function submit(e) {
        e.preventDefault();
        const data = {
            name: name.current.value,
            cpf: cpf.current.value.toString(),
            contact_number: phone.current.value.toString(),
            email: email.current.value,
            password: password.current.value,
        }
        
        if(data.password !== confirmPassword.current.value) {
            toast.error("As senhas não coincidem")
            return;
        }
        
        
        if(cpf.current.value.length !== 11) {
            toast.error("CPF inválido");
            return;
        }

        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/signup`, data)
            toast.success("Cadastro realizado com sucesso! Redirecionando para a página de login...", {autoClose: 3000});
            setTimeout(() => {navigate("/login")}, 3000)
            
        } catch (error) {
            toast.error("Erro ao cadastrar: " + error.response.data) 
            return;
        }

    }

    return (
        <CadastrarSC>
            <div>
                <img src={MeCansei}/>
                <h1>Cadastro</h1>
            </div>

            <form onSubmit={submit}>
                <label htmlFor="name">Nome completo</label>
                <input required ref={name} name="name" type="text" placeholder="Nome completo"/>

                <label htmlFor="cpf">CPF</label>
                <input required ref={cpf} name="cpf" type="number" placeholder="XXX.XXX.XXX-XX"/>

                <label htmlFor="phone">Telefone</label>
                <span>
                    <span>+55</span>
                    <input required ref={phone} maxLength={11} name="phone" type="tel" placeholder="(XX) XXXX-XXXX"/>
                </span>

                <label htmlFor="email">Email</label>
                <input required ref={email} name="email" type="email" placeholder="Email"/>
                
                <label htmlFor="a"></label>
                <input required minLength={6} ref={password} name="Password" type="password" placeholder="Senha"/>

                <label htmlFor="Password">Confirmar senha</label>
                <input required ref={confirmPassword} minLength={6} name="Password" type="password" placeholder="Confirmar senha"/>

                <button>Cadastrar</button>
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
       
        gap: 16px;

        img {
            border-radius: 100% ;
            width: 100px;
            height: 100px;
        }
        
        h1 {
            font-size: 24px;
        }
        
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