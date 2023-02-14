import { StyleSheet } from "react-native";

export const typography = (fontScale: number) =>
  StyleSheet.create({
    h1: {
      fontSize: 40 * fontScale,
      fontWeight: "bold",
      color: colors.white,
      fontFamily: "FiraCode-Bold",
    },
    h2: {
      fontSize: 32 / fontScale,
      color: colors.white,
      fontFamily: "FiraCode-Bold",
    },
    h3: {
      fontSize: 24 / fontScale,
      fontFamily: "FiraCode-Bold",
      color: colors.white,
    },
    p: {
      fontSize: 16 / fontScale,
      lineHeight: 26 / fontScale,
      fontFamily: "FiraCode-Regular",
      color: colors.white,
    },
    sp: {
      fontSize: 13 / fontScale,
      lineHeight: 19 / fontScale,
      fontFamily: "FiraCode-Regular",
      color: colors.white,
    },
  });

export const colors = {
  tint: "#4fc1ff",
  green: "#4ec9b0",
  orange: "#ce9178",
  yellow: "#dcdcaa",
  purple: "#c586c0",
  red: "#f88070",
  white: "#d4d4d4",
  gray: "#808080",
  darkGray: "#404040",
  primaryFontColor: "#d4d4d4",
  secondaryFontColor: "#999",
  dark: "#1e1e1e",
  lightDark: "#252526",
};

export const commanyStyles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
});
