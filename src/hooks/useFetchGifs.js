import {useState, useEffect}   from 'react';
import { getGifs } from '../helpers/getGifs';
export const useFetchGifs = (categoria) => {
    const [state, setstate] = useState({
        data: [],
        loading: true,
    });

    useEffect(()=>{
        getGifs(categoria)
        .then(imagenes=>{
                setstate({
                    data: imagenes,
                    loading: false,
                });
        })
    },[categoria])
    
    return state;
}
