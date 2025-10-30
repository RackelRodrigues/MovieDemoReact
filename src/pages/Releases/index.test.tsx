import Releases from "./index";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { store } from "../../redux/store";
import { Provider } from "react-redux";

describe("Releases Component", () => {
  it("should render the Releases component Card of movie", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Releases />
        </MemoryRouter>
      </Provider>
    );

    const cardMovie = screen.getByTestId("card-component");
    expect(cardMovie).toBeInTheDocument();
  });
});
