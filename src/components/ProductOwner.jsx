import { styled } from 'styled-components';
import UserLogo from '../assets/user.png'

// eslint-disable-next-line react/prop-types
export default function ProductOwner({name, telefone}) {
    
    return (
        <ProductOwnerSC>
            <img src={UserLogo}></img>
            <div>
                <h1>Dono do produto</h1>
                <p>Nome: <span>{name}</span></p>
                <p>Telefone para contato: <span>{telefone}</span></p>
            </div>
        </ProductOwnerSC>
    )
}


const ProductOwnerSC = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    width: 300px;
    height: max-content;

    padding: 40px 20px;

    background-color: #FFF;
    border-radius: 5px;
    border: 2px solid #EEEFF2;

    img {
        width: 125px;    
    }

    & > div {
        display: flex;
        flex-direction: column;
        gap: 10px;
        
        h1 {
            font-size: 24px;
            font-weight: 700;
        }

        p {
            font-size: 14px;
            font-weight: 600;
        }

        span {
            font-weight: 400;
        }
    }

`;