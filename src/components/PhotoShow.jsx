/* eslint-disable react/prop-types */
import { useState } from "react";
import { styled } from "styled-components";

export default function PhotoShow({photoArray}) {
 
    const [highlightedPhoto, setHighlightedPhoto] = useState(0);
   
    function genPhoto() {
        return photoArray.map((photo, index) => {
            return (
                <Photo key={index} onClick={() => setHighlightedPhoto(index)} src={photo.url}/>
            );
        });
    }
    
    return (
        <PhotoShowSC>
            <img src={photoArray[highlightedPhoto].url}></img>
            <aside>
                {genPhoto()}
            </aside>
        </PhotoShowSC>
    )
}

const PhotoShowSC = styled.div`
    box-sizing: border-box;

    height: 600px;

    display: flex;
    justify-content: space-between;
    gap: 10px;

    background-color: #FFF;
    border-radius: 5px;
    padding: 10px;
    border: 2px solid #EEEFF2;

    & > img {
        width: 75%;

        border: 2px solid #EEEFF2;
        background-color: #EEEFF2;

        object-fit: contain;
    }

    aside {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;

        width: 25%;
        padding: 10px 0px;
        border: 2px solid #EEEFF2;
        
        overflow-y: scroll;
        
        &::-webkit-scrollbar {
            display: none;
        } 
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
`;

const Photo = styled.img`
    width: 80%;
    aspect-ratio: 1;
   
    filter: brightness(0.7);

    &:hover {
        transition: 0.2s;
        filter: brightness(1);
    }
`;
