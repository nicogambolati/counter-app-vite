import { render } from "@testing-library/react";
import App from "../src/App";

describe("prueba de <App>", () => {
//   test("debe hacer match con el snapshot", () => {
//     const title = "Hola, soy Goku";
//     const { container } = render(<App title={title} />);

//     // console.log( container );

//     expect(container).toMatchSnapshot();
//   });

  test("debe mostrar el titulo en un h1", () => {
    const title = "Hola, soy Goku";
    const { container, getByText, getByTestId} = render(<App title={title} />);
    
    expect(getByText(title)).toBeTruthy();

    // const h1 = container.querySelector("h1");
    // expect(h1.innerHTML).toContain(title);


    expect(getByTestId('test-title').innerHTML).toBe(title);

  });

  test('debe mostrar el subtitulo enviado por props', () => { 
    const title = "Hola, soy Goku";
    const subTitle = "soy un subtitulo";
    // const {getByText} = render(<App title={title} subtitle={subTitle} />);
    const {getAllByText} = render(<App title={title} subtitle={subTitle} />);
    
    // expect(getByText(subTitle)).toBeTruthy();
    expect(getAllByText(subTitle).length).toBe(2);
   })
});
