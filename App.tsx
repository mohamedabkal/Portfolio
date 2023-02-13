import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import Header from "./src/components/Header";
import HeroSection from "./src/components/HeroSection";
import Portfolio from "./src/components/Portfolio";
import { useFonts } from "expo-font";
import Contact from "./src/components/Contact";
import { useRef } from "react";

export default function App() {
  const [fontsLoaded] = useFonts({
    "FiraCode-Bold": require("./assets/fonts/FiraCode-Bold.ttf"),
    "FiraCode-Regular": require("./assets/fonts/FiraCode-Regular.ttf"),
  });

  const { height } = Dimensions.get("screen");

  const scrollViewRef = useRef<ScrollView>(null);

  const scrollToPortfolio = () => {
    scrollViewRef.current?.scrollTo({ x: 0, y: height, animated: true });
  };

  return (
    <View style={StyleSheet.absoluteFill}>
      <ScrollView ref={scrollViewRef} contentContainerStyle={styles.container}>
        <Header />
        <HeroSection scrollToPortfolio={scrollToPortfolio} />
        <Portfolio />
        <Contact />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
