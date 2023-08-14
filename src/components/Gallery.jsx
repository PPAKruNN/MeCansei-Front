import { useState } from "react";
import { styled } from "styled-components";

// eslint-disable-next-line react/prop-types
export default function Gallery({onClose}) {

    const [photosArray, setPhotosArray] = useState([
        {url: "https://picsum.photos/200/300", id: 2},
        {url: "https://picsum.photos/200/300", id: 3},
        {url: "https://picsum.photos/200/300", id: 4},
        {url: "https://picsum.photos/200/300", id: 5},
        {url: "https://picsum.photos/200/300", id: 6}
    ]);
    const [selectedPhotos, setSelectedPhotos] = useState([]);
    const [urlInput, setUrlInput] = useState("");
    
    function genPhoto() {
        const arr = photosArray.map((photo, index) => {
            return (
                <Photo selected={selectedPhotos.includes(photo)} key={index} onClick={() => selectPhoto(photo)} src={photo.url}/>
            );
        });
        
        return arr.length !== 0 ? arr : null;
    }
    
    function selectPhoto(photo) {
        if(selectedPhotos.includes(photo)) {
            setSelectedPhotos(selectedPhotos.filter((curr) => curr !== photo));
        } else {
            setSelectedPhotos([...selectedPhotos, photo]);
        }
    }

    function changeInput(e) {
        setUrlInput(e.target.value);
    }

    function addPhoto(e) {
        e.preventDefault();
        setPhotosArray([...photosArray, {url: urlInput, id: photosArray.length + 1}]);
        setUrlInput("");
    }
    

    return (
        <GallerySC>
            <main>
                <h1>Galeria de fotos</h1>
                <div>
                    {genPhoto() ?? <h1>Adicione fotos</h1>}   
                </div>
            </main>
        

            <aside>
                <button onClick={() => onClose(selectedPhotos)}>Terminar Seleção</button>
                <h1>Adicionar nova imagem à galeria</h1>
                <form onSubmit={addPhoto}>
                    <label htmlFor="url">Url da imagem</label>
                    <input value={urlInput} onChange={changeInput} name="url" required type="url" placeholder="https://example.com/corn.jpeg"/>

                    <button type="submit">Adicionar</button>
                </form>
            </aside>
        
        
        </GallerySC>
    )
}

const GallerySC = styled.div`
    box-sizing: border-box;

    position: absolute;
    z-index: 100;

    display: flex;
    align-items: center;
    gap: 48px;

    width: 80%;
    padding: 20px;

    border-radius: 5px;
    border: 2px solid #EEEFF2;
    background-color: #FFF;

    main {
        display: flex;
        flex-direction: column;
        gap: 20px;
        font-size: 32px;
        font-weight: 600;

    }

    main div {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        width: 100%;
    }

    aside {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
       
        height: 100%;
        min-width: 30%;
        max-width: 300px;
        
        h1 {
            font-size: 24px;
            font-weight: 500;
        }

        & > form {
            display: flex;
            flex-direction: column;
            width: 100%;
            background-color: #FFF;
            border-radius: 5px;

            label {
                font-weight: 500;
            }

            input {
                box-sizing: border-box;
                width: 100%;
                padding: 10px 20px;

                margin-top: 5px;
                margin-bottom: 25px;

                border: solid 2px #EEEFF2;
                border-radius: 5px;
            }

            button { 
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
    }

`;

const Photo = styled.img`
    width: 100px;
    aspect-ratio: 1;
   
    filter: brightness(0.8);
    border: 4px solid ${(props) => props.selected ? "#2EA44F" : "transparent"};

    &:hover {
        transition: 0.2s;
        filter: brightness(1);
    }
`;