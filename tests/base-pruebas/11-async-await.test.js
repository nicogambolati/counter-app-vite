import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('pruebas en 11-async-await', () => { 
    test('getImagen debe retornar una URL', async() => { 
        const url = await getImagen();
        console.log(url);

        expect(typeof url).toBe('string');
     })
 })