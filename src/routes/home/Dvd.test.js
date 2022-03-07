import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom'
import { createMemoryHistory } from 'history';
import { Dvd } from "./Dvd";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  navigate: jest.fn(),
}));

describe("Dvd", () => {
  it("Should render dvd", () => {
    render(
      <MemoryRouter>
        <Dvd
          id={1}
          name="Test Name"
          image="test-image-src"
        />
      </MemoryRouter>
    );

    const titleEl = screen.getByText("Test Name");

    expect(titleEl).toBeTruthy();
  });

  it("Should render text notifying user there is no image if image src does not exist", () => {
    render(
      <MemoryRouter>
        <Dvd
          id={1}
          name="Test Name"

        />
      </MemoryRouter>
    );

    const textEl = screen.getByText("Image not available");

    expect(textEl).toBeTruthy();
  });

  // TODO: Does not work - not as familiar with react-router v6's navigate.

  // it("Should route user to details page when dvd is clicked", () => {
  //   const history = createMemoryHistory();

  //   const component = render(
  //     <MemoryRouter initialEntries={["/"]}>
  //       <Dvd
  //         id={1}
  //         name="Test Name"
  //         image="test-image-src"
  //       />
  //     </MemoryRouter>
  //   );

  //   const poster = component.container.querySelector("#poster-container");

  //   fireEvent(
  //     poster,
  //     new MouseEvent("click", {
  //       bubbles: true,
  //       cancelable: true,
  //     }),
  //   );

  //   expect(navigate).toHaveBeenCalledWith("/details/1");
  // });
});
