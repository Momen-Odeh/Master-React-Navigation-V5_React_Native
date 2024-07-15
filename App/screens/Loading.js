import { ActivityIndicator, Text, View } from "react-native";
export default () => (
  <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Text>
      <ActivityIndicator color={"black"} size={"large"} />;
    </Text>
  </View>
);
