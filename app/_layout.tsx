import { Stack } from "expo-router";
import { View } from "react-native";

// Import your global CSS file
import "../global.css";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="fines/[id]" options={{ headerShown: false }} />
      <Stack.Screen name="fines/add" options={{ headerShown: false }} />
    </Stack>
  );
}
