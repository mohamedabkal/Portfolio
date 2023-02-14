import { Dimensions, Linking, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors, commanyStyles, typography } from "../styles";
import Button from "./Button";
import CodeBlock from "./CodeBlock";

export default function HeroSection(props: { scrollToPortfolio: () => void }) {
  const { height, width, fontScale } = Dimensions.get("window");

  const bigTitleStyle = [
    typography(fontScale).h2,
    { lineHeight: 55 / fontScale },
  ];

  const downloadResume = () =>
    Linking.openURL(
      "https://drive.google.com/uc?export=download&id=1crcdp4Q7IgkfZrqJaa882MKMsOElaYEC"
    );

  return (
    <View style={[styles.container]}>
      <CodeBlock name="AboutMe">
        <View style={{ flex: 1, marginVertical: 24 }}>
          <Text style={bigTitleStyle}>
            Hello! My name is
            <Text style={[typography(fontScale).h1, { color: colors.orange }]}>
              {" "}
              Mohammad Abkal.
            </Text>
          </Text>
          <Text style={bigTitleStyle}>I'm a mobile developer.</Text>
          <Text style={[typography(fontScale).p, { marginTop: 24 }]}>
            I build cross-platform mobile apps with React Native and Expo.
          </Text>
        </View>
      </CodeBlock>
      <View style={[styles.buttons, { gap: width < 400 ? 8 : 16 }]}>
        <Button
          title="Get In Touch"
          onPress={props.scrollToPortfolio}
          color={colors.dark}
        />
        <Button
          title="Download Resume"
          color={colors.white}
          bgColor={colors.dark}
          borderColor={colors.white}
          onPress={downloadResume}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    maxWidth: 550,
    paddingHorizontal: 16,
    marginBottom: 150,
    marginTop: 60,
  },
  buttons: {
    ...commanyStyles.row,
    marginTop: 32,
    flexWrap: "wrap",
  },
});
