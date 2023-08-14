import { useState, useRef, useContext } from "react";
import { styled } from "styled-components";
import axios from "axios";
import Gallery from "../components/Gallery";
import MeCansei from "../assets/MeCanseiLogo.png"
import AuthContext from "../AuthContext";

export function NewProduct() {
    
    const [modalOpen, setModalOpen] = useState(false);
    const [photosPreview, setPhotosPreview] = useState([]);
    
    const token = useContext(AuthContext)
    
    const name = useRef();
    const desc = useRef();
    const price = useRef();
    const cat = useRef();

    async function submit(e) {
        e.preventDefault();

        const data = {
            name: name.current.value,
            description: desc.current.value,
            price: Number(price.current.value),
            categories: cat.current.value.split(",").map((cat) => cat.trim()),
            photosId: photosPreview.map((photo) => photo.id),
            isAvailable: true,
        }
        
        const categoriesRes = await axios.get(`${import.meta.env.VITE_API_URL}/categories`)
        const categoriesId = [];
        
        data.categories.forEach(async (cat) => {
            const index = categoriesRes.data.findIndex((category) => category.name === cat)
            if(index !== -1) {
                categoriesId.push(categoriesRes.data[index].id);
            } else {
                const response = await axios.post(`${import.meta.env.VITE_API_URL}/categories`, {name: cat})
                categoriesId.push(response.data.id);
            }
        });

        delete data.categories;
        data.categoriesId = categoriesId;
   
        console.log(data);
       
        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/products`, data, {headers: {"Authorization": `Bearer ${token}`}});
            
        } catch (error) {
            console.log(error); 
        }
        

    }

    
    function selectedPhotos(photos) {
        setModalOpen(false);
        setPhotosPreview(photos);
    }

    return (
        <>
            {modalOpen ? <Gallery onClose={selectedPhotos}/> : null}
            <NewProductSC $modalOpen={modalOpen}>
                <div>
                    <img src={MeCansei}/>
                    <h1>Anunciar novo produto</h1>
                </div>

                <form onSubmit={submit}>
                    <label htmlFor="name">Nome do produto</label>
                    <input minLength={5} required ref={name} name="name" type="text" placeholder="Ex: Geladeira, Computador"/>

                    <label htmlFor="desc">Descrição do produto:</label>
                    <textarea required ref={desc} name="desc" type="text" placeholder="Descrição do produto"/>

                    <label htmlFor="price">Preço do produto</label>
                    <span>
                        <span>R$</span>
                        <input required ref={price} name="price" type="number" placeholder="100.00"/>
                    </span>

                    <label htmlFor="cat">Categorias</label>
                    <input required ref={cat} name="cat" type="text" placeholder="Ex: Eletrônicos, Eletrodomésticos"/>

                    <label htmlFor="">Selecionar fotos</label>
                    <button type="button" onClick={() => setModalOpen(true)}>Abrir galeria</button>
                    {photosPreview.length !== 0 ? <section>{photosPreview.map( (photo, index) => <img key={index} src={photo.url}/>)}</section> : null}

                    <button>Registrar novo produto</button>
                </form>
            
            </NewProductSC> 
        </>
    )    

}


const NewProductSC = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    width: 300px;
    filter: ${(props) => props.$modalOpen ? "blur(5px)" : "none"};
    pointer-events: ${(props) => props.$modalOpen ? "none" : "all"};

    & > div:nth-child(1) {
        display: flex;
        flex-direction: column;
        align-items: center;
       
        gap: 16px;

        img {
            border-radius: 100% ;
            width: 100px;
            height: 100px;
        }
        
        h1 {
            font-size: 24px;
        }
        
        
    }

    & > form {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 0px;

        padding: 20px;
        background-color: #FFF;
        border-radius: 5px;

        label {
            font-weight: 500;
        }

        section {
            display: flex;
            justify-content: space-between;
            gap: 10px;
            margin-bottom: 32px;
            
            flex-wrap: wrap;

            img {
                width: 48px;
                aspect-ratio: 1;
                object-fit: cover;
            }
        }

        input, textarea, button:nth-of-type(1)  {
            box-sizing: border-box;
            width: 100%;
            padding: 10px 20px;

            margin-top: 5px;
            margin-bottom: 25px;

            border: solid 2px #EEEFF2;
            border-radius: 5px;
        }

        button:nth-of-type(1) {
            background-color: #FFF;
        }
       
        textarea {
            resize: vertical;
        }

        > span {
            display: flex;
            align-items: center;
            text-align: center;

            margin-top: 5px;
            margin-bottom: 25px;

            span {
                padding: 10px 20px;
                border: solid 2px #EEEFF2;

                border-right: none;
                border-radius: 5px 0px 0px 5px;
                
                font-size: 16px;
            }

            input {
                padding: 10px 20px;                
                font-size: 14px;
                margin: 0px;
                border-radius: 0px 5px 5px 0px;
            };
        }
       
        button:nth-of-type(2) { 
            box-sizing: border-box;
            width: 100%;
            padding: 10px 20px;
            border-radius: 5px;

            background-color: #2EA44F;
            border: none;
            
            color: #FFF;
            font-weight: bold;
        }
    }
    
    footer {
        display: flex;
        justify-content: center; 
        gap: 5px;

        width: 100%;
        border: solid 2px #EEEFF2;
        border-radius: 5px;
        padding: 20px;
        
        a {
            text-decoration: none;
            color: #2D7DDB;
        }
    }
`;