import { render, screen } from "@testing-library/react";
import App from "../src/App";

describe("prueba de <App>", () => {
  const title = "Hola, soy Goku";
  const subtitle = "subtitulo de prueba";

  test("debe hacer match con el snapshot", () => {
    const { container } = render(<App title={title} />);
    expect(container).toMatchSnapshot();
  });

  test('debe mostrar el mensage "Hola, soy Goku"', () => {
    render(<App title={title} />);
    // screen.debug();
    expect(screen.getByText(title)).toBeTruthy();
  });

  test("debe el titulo en un h1", () => {
    render(<App title={title} />);
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toBe(title);
  });

  test('debe el subtitulo enviado por props', () => { 
    render(<App title={title} subtitle={subtitle} />);
    expect(screen.getAllByText(subtitle).length).toBe(2);
   })
});
