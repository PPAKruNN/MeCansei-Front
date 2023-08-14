import { styled } from "styled-components";
import Product from "../components/Product";

export default function Home() {
    
    return (
        <Feed>
            <h1> Produtos próximos de você: </h1>

            <Product photoUrl={"https://picsum.photos/200/300"} name={"Bicicreta"} price={1000}/>
            <Product photoUrl={"https://picsum.photos/200/301"} name={"Bicicreta"} price={1000}/>
            <Product photoUrl={"https://picsum.photos/200/303"} name={"Bicicreta"} price={1000}/>
        </Feed>
    )
}

const Feed = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;
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