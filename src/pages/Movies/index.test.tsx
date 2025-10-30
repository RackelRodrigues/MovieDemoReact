import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { store } from "../../redux/store";
import Movies from ".";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";

describe("The check all components in movies page", () => {
  it("check inpunt component and search in the input", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Movies />
        </MemoryRouter>
      </Provider>
    );
    const input = await screen.getByPlaceholderText("Pesquisar pelo nome");
    await userEvent.type(input, "love{enter}");
    expect(input).toHaveValue("love");
  });
});
