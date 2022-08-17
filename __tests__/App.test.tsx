import { render, screen, fireEvent } from "@testing-library/react-native";
import App from "../App";

describe("App Component", () => {
  it("should display items in cart to be zero initially", () => {
    render(<App />);
    const displayElement = screen.getByText(/0/i);
    expect(displayElement).toBeDefined();
  });

  it("should render 4 items in the cart", () => {
    render(<App />);
    const items = screen.getAllByTestId("cart-item");
    expect(items).toHaveLength(4);
  });

  it("should not render any items when recycle button is pressed", () => {
    render(<App />);
    const recycleBtn = screen.getByTestId("recycle-btn");
    fireEvent.press(recycleBtn);

    const items = screen.queryAllByTestId("cart-item");
    expect(items).not.toHaveLength(4);
  });

  it("should display the items present in cart zero when reset button is pressed", () => {
    render(<App />);

    const itemsInCartElement = screen.getByTestId("items-in-cart");
    const addItemBtn = screen.getByTestId("add-item-1");
    fireEvent.press(addItemBtn);
    expect(itemsInCartElement.props.children).toBe(1);

    const recycleBtn = screen.getByTestId("resetBtn");
    fireEvent.press(recycleBtn);
    expect(itemsInCartElement.props.children).toBe(0);
  });

  it("Should delete an item when delete button is pressed", () => {
    render(<App />);

    const itemsContainer = screen.getByTestId("items-container");
    const deleteBtn1 = screen.getByTestId("delete-item-1");
    const deleteBtn2 = screen.getByTestId("delete-item-2");
    fireEvent.press(deleteBtn1);
    expect(itemsContainer.props.children).toHaveLength(3);
    fireEvent.press(deleteBtn2);
    expect(itemsContainer.props.children).toHaveLength(2);
  });

  it("Should not display -1 from Zero when remove button is pressed", () => {
    render(<App />);

    const removeBtn1 = screen.getByTestId("remove-item-1");
    const itemsSelectedDisplay1 = screen.getByTestId("items-selected-display-1");
    fireEvent.press(removeBtn1)

    expect(itemsSelectedDisplay1.props.children).not.toBe(-1)
    expect(itemsSelectedDisplay1.props.children).toBe("Zero");
  });
});
