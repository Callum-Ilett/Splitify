import "../global.css";
import { Stack } from "expo-router";

if (__DEV__) {
	require("../ReactotronConfig");
}

export default function RootLayout() {
	return (
		<Stack>
			<Stack.Screen name="index" />
		</Stack>
	);
}
