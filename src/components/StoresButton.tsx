import {
  StyleSheet,
  Text,
  Pressable,
  useWindowDimensions,
  View,
  Linking,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors, commanyStyles, typography } from "../styles";

type Props = {
  platform: "ios" | "android";
  link: string;
};

export default function StoresButton(props: Props) {
  const { fontScale } = useWindowDimensions();

  const onPress = () => Linking.openURL(props.link);

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Ionicons
        name={props.platform === "ios" ? "logo-apple" : "logo-google-playstore"}
        size={18}
        color={colors.white}
      />
      <Text style={[typography(fontScale).sp, { color: colors.white }]}>
        {props.platform === "ios" ? "App Store" : "Google Play"}
      </Text>
      <Ionicons name="open-outline" size={18} color={colors.white} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    ...commanyStyles.row,
    alignItems: "center",
    padding: 6,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.white,
    gap: 8,
  },
});
