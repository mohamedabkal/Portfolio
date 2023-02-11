import { StyleSheet, View } from "react-native";
import Header from "./src/components/Header";
import HeroSection from "./src/components/HeroSection";
import Portfolio from "./src/components/Portfolio";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    "FiraCode-Bold": require("./assets/fonts/FiraCode-Bold.ttf"),
    "FiraCode-Regular": require("./assets/fonts/FiraCode-Regular.ttf"),
  });

  return (
    <View style={styles.container}>
      <Header />
      <HeroSection />
      <Portfolio />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
