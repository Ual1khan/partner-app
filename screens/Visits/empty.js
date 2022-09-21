import { Text, View, StyleSheet, Image } from "react-native";

import { colors } from "../../theme";

export default function VisitsEmpty() {
  return (
    <View style={styles.container}>
      <View style={styles.viewWrapTitlebar}>
        <Image style={styles.emptyIcon} source={require("./dumbbell.png")} />
        <Text style={styles.title}>No visits found</Text>
        <Text style={styles.description}>No visits for this week</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 72,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  emptyIcon: {
    width: 40,
    height: 40,
    alignSelf: "center",
  },
  title: {
    color: colors.black,
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 16,
    textAlign: "center",
  },
  description: {
    color: colors.grey,
    fontWeight: "normal",
    fontSize: 16,
    marginTop: 8,
    textAlign: "center",
    lineHeight: 24,
  },
});
