import { styled } from "styled-components";
import Product from "../components/Product";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Home() {
    
    const navigate = useNavigate(); 
    const token = useContext(AuthContext);
    
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        if(!token) navigate("/login");
        
        const prom = axios.get(`${import.meta.env.VITE_API_URL}/products`, {headers: {"Authorization": `Bearer ${token}`}});
        prom.then((response) => {
            console.log(response.data);
            setProducts(response.data);
        });


    }, [navigate, token]) 
    
    return (
        <Feed>
            {   
                products.length === 0 ? 
                <h2> Nenhum produto encontrado </h2> : 
                products.map((product) => <Product key={product.id} photoUrl={product.photos[0]} name={product.name} price={product.price} prodId={product.id}/>)
            }
        </Feed>
    )
}

const Feed = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;
`;
