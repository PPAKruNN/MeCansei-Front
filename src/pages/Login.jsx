import { Link, useNavigate } from "react-router-dom"
import { styled } from "styled-components"
import MeCansei from "../assets/MeCanseiLogo.png"
import { useContext, useEffect, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import AuthContext from "../AuthContext";

export default function Login() {
    
    const navigate = useNavigate(); 
    const token = useContext(AuthContext);

    const auth = useRef();
    const password = useRef();
    
    useEffect(() => {
        if(token) navigate("/");
    }, [navigate, token]) 

    async function submit(e) {
        e.preventDefault();
        
        const data = {
            auth: auth.current.value,
            password: password.current.value
        }
   
        if(data.auth.includes("@") ) {
            data.email = data.auth;
        } else {
            data.cpf = data.auth;
        }
        delete data.auth;
        
        console.log(data);
        
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/signin`, data)
            localStorage.setItem("token", response.data.token)
            window.location.reload();
        } catch (error) {
            console.log(error);
            toast.error("Erro ao logar: " + error.response.data);
        }
    }

    return (
        <LoginSC>
            <div>
                <img src={MeCansei}/>
                <h1>Login</h1>
            </div>

            <form onSubmit={submit}>
                <label htmlFor="Username">Usuário</label>
                <input ref={auth} name="Username" type="text" placeholder="CPF ou Email"/>

                <label htmlFor="Password">Senha</label>
                <input ref={password} name="Password" type="password" placeholder="Senha"/>

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

     > div:nth-child(1) {
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