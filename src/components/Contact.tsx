import {
  Linking,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import { colors, commanyStyles, typography } from "../styles";
import Button from "./Button";
import CodeBlock from "./CodeBlock";

export default function Contact() {
  const { fontScale } = useWindowDimensions();

  const openUpwork = () =>
    Linking.openURL("https://www.upwork.com/freelancers/~0120209e9dec557ef2");

  const openEmail = () => Linking.openURL("mailto:mohamed.abqal@gmail.com");

  return (
    <View style={styles.container}>
      <CodeBlock name="GetInTouch">
        <View style={{ flex: 1, marginVertical: 32, gap: 32 }}>
          <Text style={typography(fontScale).p}>
            Whether you want to build a new mobile app from scratch, update an
            existing app, or troubleshoot technical issues, I'm here to help.
          </Text>
          <Text style={typography(fontScale).p}>Send me a message on:</Text>
          <View style={[commanyStyles.row, { gap: 16 }]}>
            <Button
              title="@ Email"
              onPress={openEmail}
              color={colors.red}
              bgColor={colors.dark}
              borderColor={colors.white}
            />
            <Button
              title="Upwork"
              onPress={openUpwork}
              color={colors.green}
              bgColor={colors.dark}
              borderColor={colors.white}
            />
          </View>
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
  },
});
