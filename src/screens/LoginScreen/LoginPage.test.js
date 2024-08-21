import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import LoginPage from "./LoginPage";
import { Alert } from "react-native";

// Mocking the navigation
const mockNavigation = {
  navigate: jest.fn(),
  reset: jest.fn(),
  goBack: jest.fn(),
};

jest.mock("@react-navigation/native", () => {
  return {
    useNavigation: () => mockNavigation,
  };
});

// Mock fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ error: false }),
  })
);

describe("LoginPage", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render login form", () => {
    const { getByText, getByLabelText } = render(<LoginPage />);
    
    // Check if the login form is rendered
    expect(getByText("Enter your password")).toBeTruthy();
    expect(getByLabelText("Email")).toBeTruthy();
    expect(getByLabelText("Password")).toBeTruthy();
  });

  it("should show an error if login is attempted with empty fields", () => {
    const { getByText } = render(<LoginPage />);

    fireEvent.press(getByText("LOG IN"));

    // Expect an error alert to show
    expect(Alert.alert).toHaveBeenCalledWith(
      "Error",
      "Please enter both email and password."
    );
  });

  it("should log in successfully with valid credentials", async () => {
    const { getByLabelText, getByText } = render(<LoginPage />);

    fireEvent.changeText(getByLabelText("Email"), "Olanew@gmail.com");
    fireEvent.changeText(getByLabelText("Password"), "Barcelona");

    fireEvent.press(getByText("LOG IN"));

    // Wait for the fetch request to resolve
    await waitFor(() => {
      expect(mockNavigation.reset).toHaveBeenCalledWith({
        index: 0,
        routes: [{ name: "Main" }],
      });
      expect(Alert.alert).toHaveBeenCalledWith("Success", "Login successful!");
    });
  });

  it("should show an error if login fails", async () => {
    // Mock fetch to return an error
    global.fetch.mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve({ error: true, message: "Invalid credentials." }),
      })
    );

    const { getByLabelText, getByText } = render(<LoginPage />);

    fireEvent.changeText(getByLabelText("Email"), "invalid@example.com");
    fireEvent.changeText(getByLabelText("Password"), "wrongpassword");

    fireEvent.press(getByText("LOG IN"));

    // Wait for the fetch request to resolve
    await waitFor(() => {
      expect(Alert.alert).toHaveBeenCalledWith("Login Failed", "Invalid credentials.");
    });
  });
});
