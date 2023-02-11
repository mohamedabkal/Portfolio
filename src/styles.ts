import { StyleSheet } from "react-native";

export const typography = (fontScale: number) =>
  StyleSheet.create({
    h1: {
      fontSize: 40 * fontScale,
      fontWeight: "bold",
      color: colors.primaryFontColor,
      fontFamily: "FiraCode-Bold",
    },
    h2: {
      fontSize: 32 / fontScale,
      color: colors.primaryFontColor,
      fontFamily: "FiraCode-Bold",
    },
    h3: {
      fontSize: 24 / fontScale,
      fontFamily: "FiraCode-Bold",
    },
    p: {
      fontSize: 16 / fontScale,
      lineHeight: 26 / fontScale,
      fontFamily: "FiraCode-Regular",
    },
    sp: {
      fontSize: 12 / fontScale,
      lineHeight: 19 / fontScale,
      fontFamily: "FiraCode-Regular",
    },
  });

export const colors = {
  tint: "green",
  white: "#fff",
  primaryFontColor: "#333333",
  secondaryFontColor: "#999",
  black: "#000",
};

export const commanyStyles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
});
