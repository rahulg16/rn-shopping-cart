import { render, screen, fireEvent } from "@testing-library/react-native";
import App from "../App";
import Item from "../components/Item";
import { useState } from "react";

describe("Item Component", () => {

  it("Should display Zero when quantity of an item selected is zero", () => {
    render(<Item id={1} value={0} setItemsArr={[]} key={1} />);

    const itemsSelectedDisplayElement = screen.getByTestId(
      "items-selected-display-1"
    );
    expect(itemsSelectedDisplayElement.props.children).toBe("Zero");
  });

  it("Should display 2 when quantity of an item selected is 2", () => {
    render(<Item id={1} value={2} setItemsArr={[]} key={1} />);

    const itemsSelectedDisplayElement = screen.getByTestId(
      "items-selected-display-1"
    );
    expect(itemsSelectedDisplayElement.props.children).toBe(2);
  });
});
