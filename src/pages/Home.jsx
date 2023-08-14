import { styled } from "styled-components";
import Product from "../components/Product";

export default function Home() {
    
    return (
        <Feed>
            <h1> Produtos próximos de você: </h1>

            <Product/>
            <Product/>
            <Product/>
        </Feed>
    )
}

const Feed = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;
`;
