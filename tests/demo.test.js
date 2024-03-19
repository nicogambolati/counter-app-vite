describe('Pruebas en <DemoComponent/>', () => {
    test('Esta prueba no debe fallar', () => { 
        /*ESTO FALLA*/
        // if (0 === 0) {
        //     throw new Error('No se puede dividir por cero');
        // }
    
        /*ESTO FUNCIONA*/
        // if (0 === 1) {
        //     throw new Error('No se puede dividir por cero');
        // }
    
        //1. inicializamos la variable
        const message1 = 'Hola mundo';
    
        //2. estimulo
        const message2 = message1.trim(); //.trim() elimina los espacios en blancos
    
        //3. observamos el comportamiento esperado
        expect( message1 ).toBe( message2 );
     })
})