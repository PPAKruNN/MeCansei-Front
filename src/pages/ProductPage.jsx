import { styled } from "styled-components"
import PhotoShow from "../components/PhotoShow";
import ProductOwner from "../components/ProductOwner";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import AuthContext from "../AuthContext";

export default function ProductPage() {

    
    const [product , setProduct] = useState();
    const token = useContext(AuthContext);
    
    const { id } = useParams();
    
    useEffect(() => {
        const prom = axios.get(`${import.meta.env.VITE_API_URL}/products/${id}`, {headers: {Authorization: `Bearer ${token}`}});

        prom.then((response) => { 
            setProduct(response.data);
            console.log(response.data);
        });

        prom.catch((error) => {
            console.log(error);
        });

    }, [token, id]);



    // TODO - Arrumar string de categorias.
    if(!product) return (<div>Carregando...</div>);
    return (
        <ProductPageSC>
            <main>
                <PhotoShow photoArray={product.photos}/>
        
                <section>
                    <h1>R$ {product.price}</h1>
                    <hr></hr>
                    <h1>{product.name}</h1>
                    <h2>Descrição: </h2>
                    <p>{product.description}</p>

                    <hr></hr>
                    <h2>Categorias:</h2>
                    <p>{product.categories.length === 0 ? "Sem categorias" :  product.categories.join(", ")}</p>
                </section>
            </main>
            <ProductOwner name={product.ownername} telefone={product.contact_number}/>
        </ProductPageSC>
    )
}

const ProductPageSC = styled.div`
    display: flex;
    justify-content: center;
    gap: 48px;

    main {
        max-width: 70%;
    }

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
`;