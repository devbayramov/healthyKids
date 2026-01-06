import React from "react";
import { TextInput, StyleSheet, TextInputProps, View } from "react-native";

type Props = TextInputProps & {
  errorText?: string;
};

const TextInputField: React.FC<Props> = ({ errorText, style, ...rest }) => {
  return (
    <View style={{ width: "100%" }}>
      <TextInput
        style={[styles.input, style]}
        placeholderTextColor="#8BA18F"
        {...rest}
      />
      {/* Gələcəkdə errorText göstərmək istəsən, bura əlavə edə bilərik */}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#8BA18F",
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 14,
    color: "#073D3D",
    backgroundColor: "rgba(255,255,255,0.3)",
  },
});

export default TextInputField;


