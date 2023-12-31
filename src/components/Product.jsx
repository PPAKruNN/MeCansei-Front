import { Link } from "react-router-dom";
import { styled } from "styled-components";

// eslint-disable-next-line react/prop-types
export default function Product({photoUrl, name, price, prodId}) {
    
    return (
        <ProductSC>
            <Link to={`produto/${prodId}`}>
                <img src={photoUrl} alt={name}/>
                <div>
                    <h3>{name}</h3>
                    <p>R$ {price}</p>
                </div>
            </Link>
        </ProductSC>  
    )
}

const ProductSC = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    width: 450px;

    border-radius: 10px;
    border: solid 2px #EEEFF2;
    background-color: #FFF;

    a {
        text-decoration: none;
        color: #000;
        cursor: pointer;
    } 

    img {
        height: 450px;
        aspect-ratio: 1;
        object-fit: fill;
        background-color: transparent;
    }

    div {
        display: flex;
        justify-content: space-between;
        
        box-sizing: border-box;

        width: 100%;
        padding: 15px 20px;

        border-top: solid 2px #EEEFF2;

        h3 {
            font-size: 1.3rem;
        }
        
        p {
            font-size: 1.5rem;
        }
    }
`;
