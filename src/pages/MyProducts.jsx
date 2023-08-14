import { styled } from "styled-components";
import Product from "../components/Product";

export default function MyProducts(prod) {
    return (
        <MyProductsSC>
            <h1>Seus produtos</h1> 

            <div>
                <Product photoUrl={"https://picsum.photos/200/300"} name={"Bicicreta"} price={1000}/>
                <aside>
                    <h1>Ações: </h1>
                    <button>Marcar como vendido!</button>
                    <p>Atualmente: Vendido</p>
                    <button>Apagar</button> 
                </aside>
            </div> 

        </MyProductsSC>
    );
}

// const mockProduct = {
//     "name": "Bicicleta",
//     "description": "Bicicleta de corrida",
//     "price": 1000,
//     "isAvailable": true,
//     "ownerid": 1,
//     "categoriesId": [
//         {"name": "Esporte"},
//         {"name": "Lazer"}
//     ],
//     "photosId": [
//         {"url": "https://picsum.photos/200/300"},
//         {"url": "https://picsum.photos/200/301"}
//     ]
// };

const MyProductsSC = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;

    & > div {
        display: flex;
        gap: 24px;
        
        aside {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 16px;

            padding: 16px;

            background-color: #fff ;
            border-radius: 8px;
            border: 2px solid #eeeff2; 

            h1 {
                font-size: 24px;
            }
            
            button {
                width: 200px;
                padding: 10px 20px;;

                background-color: #fff ;
                border-radius: 8px;
                border: 2px solid #eeeff2; 
            }

            button:nth-of-type(1) {
                background-color: #2EA44F;
            }                
            
            button:nth-of-type(2) {
                background-color: #FF4D4D;
            }
        }
    }
`;
