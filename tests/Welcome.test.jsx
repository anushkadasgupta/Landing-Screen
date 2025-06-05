import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Welcome from "../src/pages/Welcome";

test("renders welcome message", () => {
  render(
    <BrowserRouter>
      <Welcome />
    </BrowserRouter>
  );

  expect(screen.getByText(/Welcome to PopX/i)).toBeInTheDocument();
});
