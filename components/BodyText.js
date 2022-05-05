import { StyleSheet, Text } from "react-native";

const BodyText = (props) => {
  return (
    <Text style={{ ...styles.title, ...props.style }}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans",
    fontSize: 18,
  },
});

export default BodyText;
