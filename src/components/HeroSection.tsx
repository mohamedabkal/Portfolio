import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors, commanyStyles, typography } from "../styles";
import Button from "./Button";

export default function HeroSection(props: { scrollToPortfolio: () => void }) {
  const { height, width, fontScale } = Dimensions.get("screen");
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
      <Text style={[typography(fontScale).p, { marginTop: 32 }]}>
        I build cross-platform mobile apps with React Native and Expo.
      </Text>
      <View style={[styles.buttons, { gap: width < 400 ? 8 : 16 }]}>
        <Button title="View Portfolio" onPress={props.scrollToPortfolio} />
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
    maxWidth: 500,
    paddingHorizontal: 16,
  },
  buttons: {
    ...commanyStyles.row,
    marginTop: 56,
  },
});
