import {
  StyleSheet,
  Text,
  TextStyle,
  useWindowDimensions,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import { colors, commanyStyles, typography } from "../styles";

export default function CodeBlock(props: {
  children: React.ReactElement;
  name: string;
  style?: ViewStyle;
  customBlockSize?: number;
  customBlockNameSize?: number;
}) {
  const { fontScale } = useWindowDimensions();
  const blockNameStyle: TextStyle[] = [
    typography(fontScale).p,
    {
      color: colors.gray,
      fontSize: props.customBlockSize,
    },
  ];

  return (
    <View style={props.style}>
      <Text style={[blockNameStyle, { marginBottom: 8 }]}>
        {"<"}
        <Text
          style={{ color: colors.green, fontSize: props.customBlockNameSize }}
        >
          {props.name}
        </Text>
        {">"}
      </Text>
      <View style={commanyStyles.row}>
        <View style={styles.line} />
        {props.children}
      </View>
      <Text style={[blockNameStyle, { marginTop: 8 }]}>
        {"</"}
        <Text
          style={{ color: colors.green, fontSize: props.customBlockNameSize }}
        >
          {props.name}
        </Text>
        {">"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  line: {
    backgroundColor: colors.darkGray,
    width: 2,
    height: "100%",
    marginRight: 16,
  },
});
