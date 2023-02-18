import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("render details page when click on details link", async () => {
  const user = userEvent.setup();
  render(<App />);

  const linkToDetails = screen.getByRole("link", { name: /details/i });

  await user.click(linkToDetails);

  expect(
    screen.getByText(/Details will be here. Stay tuned!/i)
  ).toBeInTheDocument();
});

test("render home page when click on home link", async () => {
  const user = userEvent.setup();
  render(<App />);

  const linkToHome = screen.getByRole("link", { name: /home/i });

  await user.click(linkToHome);

  expect(screen.getByText(/Lorem ipsum dolor/i)).toBeInTheDocument();
});
