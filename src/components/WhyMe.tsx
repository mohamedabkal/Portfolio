import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import React from "react";
import CodeBlock from "./CodeBlock";
import { colors, typography } from "../styles";
import Ionicons from "@expo/vector-icons/Ionicons";

const strengths = [
  "Extensive experience in React Native development.",
  "Strong focus on user experience and design, ensuring that the app is intuitive and easy to use for all users.",
  "The ability to quickly and efficiently implement new features and functionality, helping to bring your app to market as quickly as possible.",
  "A commitment to ongoing support and maintenance, ensuring that your app remains stable and reliable over time.",
];

export default function WhyMe() {
  const { fontScale } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <CodeBlock name="MyStrengths">
        <View style={styles.innerContainer}>
          {strengths.map((item) => (
            <View key={item} style={styles.strength}>
              <Ionicons
                name="checkmark-circle"
                size={18}
                color={colors.yellow}
                style={{
                  marginTop: 2,
                  marginRight: 8,
                }}
              />
              <Text style={typography(fontScale).p}>{item}</Text>
            </View>
          ))}
        </View>
      </CodeBlock>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    maxWidth: 550,
    paddingHorizontal: 16,
    marginTop: 150,
  },
  innerContainer: {
    flex: 1,
    marginVertical: 24,
    gap: 16,
  },
  strength: {
    flexDirection: "row",
  },
});
