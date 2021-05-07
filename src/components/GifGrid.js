import React  from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';
export const GifGrid = ({categoria}) => {
    /* const [imagen, setimagen] = useState([]); */
    /* const [count, setcount] = useState(0); */
    
    const {data:imagenes,loading} = useFetchGifs(categoria)
    
    /* useEffect(()=>{
        getGifs(categoria)
        .then(imagenes =>setimagen(imagenes));
    },[categoria]) */
    
    //getGifs();
    return (
        <div>
            <h3 className="animate__animated animate__fadeIn">{categoria}</h3>
            {loading && <h4 className="animate__animated animate__flash">Cargando...</h4>}
            <div className="card-grid">
            
                {
                        imagenes.map(img =>{
                           return <GifGridItem key={img.id} {...img} ></GifGridItem>
                        })
                }        
            
           {/*  <h3>{count}</h3>
            <button onClick={()=> setcount(count +1)}></button> */}
            </div>
        </div>
        
    )
}
