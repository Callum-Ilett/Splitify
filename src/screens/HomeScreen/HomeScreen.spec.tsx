import { render, screen } from "@testing-library/react-native";
import { HomeScreen } from "@/src/screens/HomeScreen";

describe("HomeScreen", () => {
	it("Should render without any errors", () => {
		// Arrange
		render(<HomeScreen />);

		// Act

		// Assert
	});

	it("Should render the text 'HomeScreen'", () => {
		// Arrange
		render(<HomeScreen />);

		// Act
		const text = screen.getByText(/HomeScreen/i);

		// Assert
		expect(text).toBeOnTheScreen();
	});
});
