import { styled } from "styled-components"
import PhotoShow from "../components/PhotoShow";
import ProductOwner from "../components/ProductOwner";

export default function ProductPage() {

    // TODO - Arrumar string de categorias.
    return (
        <ProductPageSC>
            <main>
                <PhotoShow photoArray={mockProduct.photos}/>
        
                <section>
                    <h1>R$ {mockProduct.price}</h1>
                    <hr></hr>
                    <h1>{mockProduct.name}</h1>
                    <h2>Descrição: </h2>
                    <p>{mockProduct.description}</p>

                    <hr></hr>
                    <h2>Categorias:</h2>
                    <p>{mockProduct.categories.reduce((prev, curr) => `${prev.name}, ${curr.name}`)}</p>
                </section>
            </main>
        
            <ProductOwner name={"João"} telefone={"(11) 99999-9999"}/>
        
        </ProductPageSC>
    )
}

const ProductPageSC = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 48px;

    & > main section {
        box-sizing: border-box;

        display: flex;
        flex-direction: column;
        gap: 24px; 
        
        width: 100%;
        background-color: #fff;
        padding: 24px;
        margin-top: 24px;
        
        hr {
            background-color: #EEEFF2;
            height: 2px;
            border: none;
            width: 100%;
        } 

        h1{
            font-size: 36px;
        } 
        
        h2 {
            font-size: 24px;
        }

        p {
            font-size: 18px;
        }

    } 

`

const mockProduct = {
    "name": "Pc Gamer i3 3200g 8gb 240gb Ssd 500w 80 Plus",
    "description": "Bicicleta de corrida",
    "price": 1000,
    "isAvailable": true,
    "ownerid": 1,
    "categories": [
        {"name": "Esporte"},
        {"name": "Lazer"},
        {"name": "Lazer"},
        {"name": "Lazer"}
    ],
    "photos": [
        {"url": "https://picsum.photos/200/300"},
        {"url": "https://picsum.photos/200/300"},
        {"url": "https://picsum.photos/200/300"},
        {"url": "https://picsum.photos/200/300"},
        {"url": "https://picsum.photos/200/300"},
        {"url": "https://picsum.photos/200/300"},
        {"url": "https://picsum.photos/200/300"},
        {"url": "https://picsum.photos/200/300"},
        {"url": "https://picsum.photos/200/301"}
    ]
};