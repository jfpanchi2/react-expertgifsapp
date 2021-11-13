import React from "react";
import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs');
describe('Pruebas en GrifGrid', () => {
    const category = 'Cats';
    test("Debe de mostrar el componente correctamente", () => {
       useFetchGifs.mockReturnValue({
        data: [],
        loading: true,
       });
        const wrapper = shallow(<GifGrid categoria={category}></GifGrid>);
       expect(wrapper).toMatchSnapshot();
    })

    test('Debe de mostar items cuando se cargan imagenes useFetchGifs', () => {
        const gifs=[{
            id: 'ABC',
            url: 'https://localhost/imagen',
            title: 'Imagen gif'
        },
        {
            id: 'DEF',
            url: 'https://localhost/imagen',
            title: 'Imagen gif'
        }];
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: true,
        });
        const wrapper = shallow(<GifGrid categoria={category}></GifGrid>);
        //expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    })
    
})
