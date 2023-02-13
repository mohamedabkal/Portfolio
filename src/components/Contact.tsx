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

export default function Contact() {
  const { fontScale } = useWindowDimensions();

  const openUpwork = () =>
    Linking.openURL("https://www.upwork.com/freelancers/~0120209e9dec557ef2");

  return (
    <View style={styles.container}>
      <Text style={[typography(fontScale).h1]}>Get In Touch</Text>
      <Text
        style={[
          typography(fontScale).p,
          { textAlign: "center", marginVertical: 48 },
        ]}
      >
        Whether you want to build a new mobile app from scratch, update an
        existing app, or troubleshoot technical issues, I'm here to help.
      </Text>
      <Button title="Contact Me On Upwork" onPress={openUpwork} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: 500,
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 100,
  },
});
