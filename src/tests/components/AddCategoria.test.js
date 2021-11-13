import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import { AddCategoria } from '../../components/AddCategoria';

describe('Pruebas en AddCategoria', () => {
    const setCategories = jest.fn();
    let wrapper;
    
    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategoria setCategorias={ setCategories}></AddCategoria>);
    });

    test('Debe de mostarse correctamente', () => {
       
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo'
        input.simulate('change',{target: {value}});
        expect(wrapper.find('p').text().trim()).toBe(value);
    })
    
    test('No debe de psotear la información con Submit', () => {
        wrapper.find('form').simulate('submit',{preventDefault(){}});
        expect(setCategories).not.toHaveBeenCalled();
    })
    
    test('Debe de llamar el setCategories y limpiar caja', () => {
        const value = 'Hola mundo';
        // 1. Simular el inputChange
        wrapper.find('input').simulate('change',{target:{value}});
        // 2. Simular el submit 
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        // 3. set caterias se debe llamar
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        // 4. el valor de input debe ser ''
        expect(wrapper.find('input').prop('value')).toBe('');
    })
    
    
})
