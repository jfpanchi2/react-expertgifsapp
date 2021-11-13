import React from "react";
import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import {GifExperApp} from "../GifExperApp";

describe('Pruebas en GifExpertApp', () => {
    test('Debe mostrar el componente', () => {
        const wrapper = shallow(<GifExperApp></GifExperApp>);
        expect(wrapper).toMatchSnapshot();
    })
    
    test('Debe de mostrar una lista de categorias', () => {
        const categories = ['One punch', 'Cats'];
        const wrapper = shallow(<GifExperApp defaultCategories={categories}></GifExperApp>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })
    
})
