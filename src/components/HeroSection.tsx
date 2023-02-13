import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors, commanyStyles, typography } from "../styles";
import Button from "./Button";
import CodeBlock from "./CodeBlock";

export default function HeroSection(props: { scrollToPortfolio: () => void }) {
  const { height, width, fontScale } = Dimensions.get("screen");
  return (
    <View style={[styles.container, { height: height - 60 }]}>
      <CodeBlock name="AboutMe">
        <View style={{ flex: 1, marginVertical: 32 }}>
          <Text style={typography(fontScale).h2}>Hello! My name is</Text>
          <Text
            style={[
              typography(fontScale).h1,
              { marginVertical: 12, color: colors.orange },
            ]}
          >
            Mohammad Abkal
          </Text>
          <Text style={typography(fontScale).h2}>I'm a mobile developer.</Text>
          <Text style={[typography(fontScale).p, { marginTop: 32 }]}>
            I build cross-platform mobile apps with React Native and Expo.
          </Text>
        </View>
      </CodeBlock>
      <View style={[styles.buttons, { gap: width < 400 ? 8 : 16 }]}>
        <Button
          title="View Portfolio"
          onPress={props.scrollToPortfolio}
          color={colors.dark}
        />
        <Button
          title="Download Resume"
          color={colors.white}
          bgColor={colors.dark}
          borderColor={colors.white}
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
  },
  buttons: {
    ...commanyStyles.row,
    marginTop: 56,
  },
});
