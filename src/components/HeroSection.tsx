import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import React from "react";
import { colors, commanyStyles, typography } from "../styles";
import Button from "./Button";

export default function HeroSection() {
  const { height, fontScale } = useWindowDimensions();
  return (
    <View style={[styles.container, { height: height - 60 }]}>
      <View>
        <Text style={typography(fontScale).h2}>Hello! My name is</Text>
        <Text
          style={[
            typography(fontScale).h1,
            { marginVertical: 12, color: colors.tint },
          ]}
        >
          Mohammad Abkal
        </Text>
        <Text style={typography(fontScale).h2}>I'm a mobile developer.</Text>
      </View>
      <View style={styles.buttons}>
        <Button title="View Portfolio" />
        <Button
          title="Download Resume"
          color={colors.primaryFontColor}
          bgColor={colors.white}
          borderColor={colors.primaryFontColor}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
  },
  buttons: {
    ...commanyStyles.row,
    marginTop: 56,
    gap: 16,
  },
});
