import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App component", () => {
  let unmount;

  beforeEach(() => {
    ({ unmount } = render(<App />));
  });

  afterEach(() => {
    unmount();
  });

  const user = userEvent.setup();

  test("render details page when click on details link", async () => {
    const linkToDetails = screen.getByRole("link", { name: /details/i });

    await user.click(linkToDetails);

    expect(
      screen.getByText(/Details will be here. Stay tuned!/i)
    ).toBeInTheDocument();

    expect(linkToDetails).toHaveClass("active");
  });

  test("render home page when click on home link", async () => {
    const linkToHome = screen.getByRole("link", { name: /home/i });

    await user.click(linkToHome);

    expect(screen.getByText(/Lorem ipsum dolor/i)).toBeInTheDocument();
    expect(linkToHome).toHaveClass("active");
  });

  test("render home page when started", () => {
    const textOnHome = screen.getByText(/Lorem ipsum dolor/i);

    expect(textOnHome).toBeInTheDocument();

    const linkToHome = screen.getByRole("link", { name: /home/i });

    expect(linkToHome).toHaveClass("active");
  });
});
