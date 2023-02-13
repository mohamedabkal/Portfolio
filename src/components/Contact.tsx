import {
  Linking,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import { typography } from "../styles";
import Button from "./Button";
import CodeBlock from "./CodeBlock";

export default function Contact() {
  const { fontScale } = useWindowDimensions();

  const openUpwork = () =>
    Linking.openURL("https://www.upwork.com/freelancers/~0120209e9dec557ef2");

  return (
    <View style={styles.container}>
      <CodeBlock name="GetInTouch">
        <View style={{ flex: 1, marginVertical: 32 }}>
          <Text style={[typography(fontScale).p, { marginBottom: 32 }]}>
            Whether you want to build a new mobile app from scratch, update an
            existing app, or troubleshoot technical issues, I'm here to help.
          </Text>
          <Button title="Contact Me On Upwork" onPress={openUpwork} />
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
    marginTop: 160,
    marginBottom: 100,
  },
});
