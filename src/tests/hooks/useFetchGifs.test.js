import {renderHook} from '@testing-library/react-hooks'
import { useFetchGifs } from "../../hooks/useFetchGifs"

describe('Pruebas en el hook usefetchGif', () => {
    test('Debe de retornar el estado inicial', async() => {
        const {result,waitForNextUpdate} = renderHook(()=> useFetchGifs('Cats'));
        const {data, loading} = result.current;
        await waitForNextUpdate();
        //const { data, loading } = useFetchGifs('Cats');
        //console.log(data,loading);
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    })
    
    test('Debe de retornar un arreglo de imagenes y loading en false', async() => {
        const {result, waitForNextUpdate} = renderHook(()=> useFetchGifs('Cats'));
        await waitForNextUpdate();
        const {data, loading} = result.current;
        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    })
    
})
