import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/react-native.png")}
        style={styles.img}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  img: {
    resizeMode: "contain",
    height: 50,
    width: 50,
  },
});
