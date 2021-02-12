import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);
});

test("form shows success message on submit with form details", () => {
  // Render
  render(<CheckoutForm />);
  // Input Queries
  const firstNameInput = screen.getByLabelText(/first name/i);
  const lastNameInput = screen.getByLabelText(/last name/i);
  const addressInput = screen.getByLabelText(/address/i);
  const cityInput = screen.getByLabelText(/city/i);
  const stateInput = screen.getByLabelText(/state/i);
  const zipInput = screen.getByLabelText(/zip/i);
  // Input Events
  userEvent.type(firstNameInput, "Chaz");
  userEvent.type(lastNameInput, "Chez");
  userEvent.type(addressInput, "3632 S Chex Rd");
  userEvent.type(cityInput, "Mixieburg");
  userEvent.type(stateInput, "New Jefferson");
  userEvent.type(zipInput, "36325");
  // Button Stuff
  // Query
  const checkoutButton = screen.getByRole("button", { name: /checkout/i });
  // Click Button
  userEvent.click(checkoutButton);
  // Assert
  // Queries for assertion
});
