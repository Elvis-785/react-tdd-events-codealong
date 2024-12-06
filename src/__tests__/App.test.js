import { render, screen } from "@testing-library/react";
import App from "../App";

import '@testing-library/jest-dom';

// Code tests here
import userEvent from '@testing-library/user-event';

test("clicking the checkbox adds and removes pepperoni from the toppings list", () => {
  render(<App />);
  const addPepperoni = screen.getByRole("checkbox", { name: /add pepperoni/i });

  // Click to add pepperoni
  userEvent.click(addPepperoni);
  let pepperoniItem = screen.getByText("Pepperoni");
  expect(pepperoniItem).toBeInTheDocument();

  // Click again to remove pepperoni
  userEvent.click(addPepperoni);
  pepperoniItem = screen.queryByText("Pepperoni");
  expect(pepperoniItem).not.toBeInTheDocument();
});


