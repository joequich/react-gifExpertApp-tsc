import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks'

describe('useFetchGifs', () => {
    it('return initial status', async() => {
        const { result, waitForNextUpdate }  = renderHook( () => useFetchGifs('music') );
        const { data, loading } = result.current;
        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });

    it('return an array of images and the loading as true', async() => {
        const { result, waitForNextUpdate }  = renderHook( () => useFetchGifs('music') );
        await waitForNextUpdate();
        const { data, loading } = result.current;

        expect(data.length).toEqual(10);
        expect(loading).toBe(false);
    });
});
