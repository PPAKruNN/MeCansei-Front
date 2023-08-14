import { styled } from "styled-components";
import Product from "../components/Product";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../AuthContext";
import axios from "axios";

export default function MyProducts() {

    const navigate = useNavigate(); 
    const token = useContext(AuthContext);
    
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        if(!token) navigate("/login");
        
        const prom = axios.get(`${import.meta.env.VITE_API_URL}/myproducts`, {headers: {"Authorization": `Bearer ${token}`}});
        prom.then((response) => {
            console.log(response.data);
            setProducts(response.data);
        });


    }, [navigate, token]) 

    async function changeAvailability(index) {
        const newProds = [...products];
        newProds[index].isavailable = !newProds[index].isavailable;
        setProducts(newProds);
        
        console.log(products[index].id);

        await axios.patch(`${import.meta.env.VITE_API_URL}/products/${products[index].id}/availabilty`, {isavailable: newProds[index].isavailable}, {headers: {"Authorization": `Bearer ${token}`}});
    }
    
    async function deleteProduct(index) {
        const newProds = [...products];
        newProds.splice(index, 1);
        setProducts(newProds);
        
        await axios.delete(`${import.meta.env.VITE_API_URL}/products/${products[index].id}`, {headers: {"Authorization": `Bearer ${token}`}});
    }



    return (
        <MyProductsSC>
            <h1>Seus produtos</h1> 

            {   
                products.length === 0 ? 
                <h2> Nenhum produto encontrado </h2> : 
                products.map((product,index ) => (
                    <div key={index}>
                        <Product photoUrl={product.photos[0]} name={product.name} price={product.price} prodId={product.id}/>
                        <aside>
                            <h1>Ações: </h1>
                            <button onClick={() => changeAvailability(index)}>Marcar como {!product.isavailable ? "disponível" : "vendido"}!</button>
                            <p>Atualmente: {product.isavailable ? "Disponível" : "Vendido"}</p>
                            <button onClick={() => deleteProduct(index)}>Apagar</button> 
                        </aside>
                    </div> 
                ))
            }

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
