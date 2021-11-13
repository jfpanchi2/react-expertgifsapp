import React from 'react'
import {useState} from 'react';
import { AddCategoria } from './components/AddCategoria';
import { GifGrid } from './components/GifGrid';

export const GifExperApp = ({defaultCategories=[]}) => {
    //const categorias =['One Puch','Samurai x','DragonBall']
    //const [categorias, setCategorias] = useState(['Cats']);
    const [categorias, setCategorias] = useState(defaultCategories);
    /* const handleAdd = () =>{
        setCategorias([...categorias,'HunterxHunter']);
    } */
    return (
        <div>
            <h1>GIFS</h1>
            <AddCategoria setCategorias={setCategorias}></AddCategoria>
            <hr></hr>
            {/* <button >Agregar</button> */}
            
                {
                    categorias.map( categoria =>{
                        return <GifGrid categoria={categoria} key={categoria}></GifGrid>
                    })
                }
            
           
        </div>
    )
}
