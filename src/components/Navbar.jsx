import { Link } from "react-router-dom";
import { styled } from "styled-components";
import MeCansei from "../assets/MeCanseiLogo.png"

export default function Navbar() {
 
    function Logout() {
        localStorage.removeItem("token");
        window.location.reload();
    }

    return (
        <NavbarSC>
            <img src={MeCansei}/>
        
            <Link to={"/"}>Home</Link>
            <Link to={"/produto/gerenciar"}>Meus Produtos</Link>
            <Link to={"/produto/novo"}>Anunciar novo produto</Link>
            <button onClick={Logout} >Logout</button>

        </NavbarSC>
    )
}

const NavbarSC = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100px;
    background-color: #000;

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    img {
        width: 100px;
    }

    a, button {
        text-decoration: none;
        color: #eeeff2;
        font-weight: 700;
        
        padding: 10px 20px;
        border-radius: 5px;
        border: 2px solid #eeeff2;
        background-color: transparent;
    }
`;