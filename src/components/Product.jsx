import { styled } from "styled-components";

export default function Product() {
    
    return (
        <ProductSC>
            <img src={mockProduct.photosId[0].url} alt={mockProduct.name}/>
            <div>
                <h3>{mockProduct.name}</h3>
                <p>{mockProduct.price}</p>
            </div>
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

const mockProduct = {
    "name": "Bicicleta",
    "description": "Bicicleta de corrida",
    "price": 1000,
    "isAvailable": true,
    "ownerid": 1,
    "categoriesId": [
        {"name": "Esporte"},
        {"name": "Lazer"}
    ],
    "photosId": [
        {"url": "https://picsum.photos/200/300"},
        {"url": "https://picsum.photos/200/301"}
    ]
};