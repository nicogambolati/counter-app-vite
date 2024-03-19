import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas en 02-template-string', () => {

    test('getSaludo deben de retornar Hola', () => {
        const name = 'Nicolas';
        const message = getSaludo( name );
        expect ( message ).toBe( `Hola ${ name }` );
     });
});