import { StyleSheet, Text, View } from "react-native";
import Header from "./src/components/Header";
import HeroSection from "./src/components/HeroSection";
import Portfolio from "./src/components/Portfolio";

export default function App() {
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
