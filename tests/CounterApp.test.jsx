import { render, fireEvent, screen } from "@testing-library/react";
import CounterApp from "../src/CounterApp";

describe("pruebas de <CounterApp/>", () => {
  const initialValue = 10;

  test("debe hacer match con el snapshot", () => {
    const { container } = render(<CounterApp value={initialValue} />);
    expect(container).toMatchSnapshot();
  });

  test("debe mostrar el valor por defecto de 100", () => {
    //     const { getByText } = render(<CounterApp value={100} />);
    //     expect(getByText("100").innerHTML).toBe("100");

    render(<CounterApp value={100} />);
    expect(screen.getByText("100")).toBeTruthy();
  });

  test("debe incrementar con el boton +1", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("+1"));
    expect(screen.getByText("11")).toBeTruthy();
  });

  test("debe decrementar con el boton -1", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("-1"));
    screen.debug();
    expect(screen.getByText("9")).toBeTruthy();
  });

  test('debe funcionar el boton de reset', () => { 
    render (<CounterApp value={initialValue}/>);
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    // fireEvent.click(screen.getByText("Reset"));

    // expect(screen.getByText(initialValue)).toBeTruthy();
    // screen.getByRole('button', {name: 'btn-reset'})
    fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}));
  })
});
