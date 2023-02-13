import { StyleSheet, Text, Pressable, useWindowDimensions } from "react-native";
import React from "react";
import { colors, typography } from "../styles";

type Props = {
  title: string;
  onPress: () => void;
  color?: string;
  bgColor?: string;
  borderColor?: string;
};

export default function Button(props: Props) {
  const { fontScale } = useWindowDimensions();
  return (
    <Pressable
      onPress={props.onPress}
      style={[
        styles.container,
        {
          backgroundColor: props.bgColor,
          borderColor: props.borderColor,
          borderWidth: props.borderColor ? 1 : 0,
        },
      ]}
    >
      <Text
        style={[typography(fontScale).p, { color: props.color || colors.dark }]}
      >
        {props.title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 14,
    backgroundColor: colors.tint,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
});
