import { render, screen } from "@testing-library/react";
import * as redux from "react-redux"
import Router from "react-router-dom";
import { DetailsPage } from "./DetailsPage";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
 }));

describe("DetailsPage", () => {
  it ("Should notify user that no dvd was found if there is no data", () => {
    const spy = jest.spyOn(redux, "useSelector");
    spy.mockReturnValue([
      {
        id: 1,
        name: "TestName",
        image: "",
      }
    ]);

    jest.spyOn(Router, 'useParams').mockReturnValue({ dvdId: 2 });

    render(<DetailsPage />);
    
    const textEl = screen.getByText("Could not find DVD");
    
    expect(textEl).toBeTruthy();
  });
});
