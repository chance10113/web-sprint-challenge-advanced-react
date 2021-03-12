import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);
  const header = screen.getByText(/checkout form/i);
  expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", async () => {
  // render, inputs, userEvent, submit, success, expect
  // Render
  render(<CheckoutForm />);
  // Inputs
  const firstNameInput = screen.getByLabelText(/first name/i);
  const lastNameInput = screen.getByLabelText(/last name/i);
  const addressInput = screen.getByLabelText(/address/i);
  const cityInput = screen.getByLabelText(/city/i);
  const stateInput = screen.getByLabelText(/state/i);
  const zipInput = screen.getByLabelText(/zip/i);
  // UserEvents
  userEvent.type(firstNameInput, "Chaz")
  userEvent.type(lastNameInput, "Chez")
  userEvent.type(addressInput, "1331 S E W N Label SuperSpeedWay")
  userEvent.type(cityInput, "AmericaTown")
  userEvent.type(stateInput, "TexArKaNoMa")
  userEvent.type(zipInput, "73758")
  // Submit & Click
  const checkoutBtn = screen.getByRole("button")
  userEvent.click(checkoutBtn)
  // Success Message
  const successMessage = screen.getByText(/you have ordered some plants/i)
  expect(successMessage).toBeInTheDocument()
});
