import { styled } from "styled-components";

export default function Navbar() {
 
    function Logout() {
        localStorage.removeItem("token");
        window.location.reload();
    }

    return (
        <NavbarSC>
            <div>Navbar</div>
        
            <button onClick={Logout} >Logout</button>

        </NavbarSC>
    )
}

const NavbarSC = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100px;
    background-color: #f1f1f1;

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
`;