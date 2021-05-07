import React, { useState } from 'react'
import PropTypes from 'prop-types';
export const AddCategoria = ({setCategorias}) => {
    const [inputValue, setinputValue] = useState('');
    const hanldeInputChange = (e) => {
        //console.log(e.target.value);
        setinputValue(e.target.value);
    } 
    
    const handleSubmit =(e) =>{
        e.preventDefault();
        if(inputValue.trim().length>2){
            setCategorias(categorias=>[inputValue,...categorias]);
        }
        setinputValue("");
        //console.log('Submit exitoso');
       
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>Buscar gifs</h2>
            <input 
            type="text" 
            value={inputValue}
            onChange={hanldeInputChange}></input>
        </form>
        
    )
}

AddCategoria.propTypes ={
    setCategorias: PropTypes.func.isRequired
}