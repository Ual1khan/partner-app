import { useEffect, useState } from "react";
import { useAtom, useAction } from "@reatom/react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { atoms, actions } from "../../store/stats";
import { colors } from "../../theme";

export function StatisticsScreen() {
  const statsAtom = useAtom(atoms.stats);
  const getStats = useAction(actions.getStats);

  const {
    classes = 0,
    visits = 0,
    users = 0,
    profit = 0,
  } = statsAtom.data || {};

  useEffect(() => {
    getStats();
  }, []);

  return (
    <>
      {statsAtom.status === "loading" ? (
        <ActivityIndicator size="large" />
      ) : (
        <View style={styles.class}>
          <View style={styles.row}>
            <View style={styles.item}>
              <View style={styles.numberRow}>
                <Text style={styles.number}>
                  {(classes || 0).toLocaleString("en-ZA")}
                </Text>
                <MaterialCommunityIcons
                  name="dumbbell"
                  color={colors.primary}
                  size={24}
                />
              </View>
              <Text style={styles.title}>Trainings Count</Text>
            </View>
            <View style={styles.item}>
              <View style={styles.numberRow}>
                <Text style={styles.number}>
                  {(visits || 0).toLocaleString("en-ZA")}
                </Text>
                <MaterialCommunityIcons
                  name="check-decagram"
                  color={colors.primary}
                  size={24}
                />
              </View>
              <Text style={styles.title}>Visits</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.item}>
              <View style={styles.numberRow}>
                <Text style={styles.number}>
                  {(users || 0).toLocaleString("en-ZA")}
                </Text>
                <MaterialCommunityIcons
                  name="account-multiple"
                  color={colors.primary}
                  size={24}
                />
              </View>
              <Text style={styles.title}>Users Count</Text>
            </View>
            <View style={styles.item}>
              <View style={styles.numberRow}>
                <Text style={styles.number}>
                  {(profit || 0).toLocaleString("en-ZA")} $
                </Text>
                <MaterialCommunityIcons
                  name="piggy-bank"
                  color={colors.primary}
                  size={24}
                />
              </View>
              <Text style={styles.title}>Profit</Text>
            </View>
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  class: {
    paddingHorizontal: 16,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: 16,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  item: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "47%",
    height: 120,
    padding: 16,
    borderColor: "#95B1F9",
    borderRadius: 10,
    borderWidth: 1,
  },
  numberRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  number: {
    fontWeight: "bold",
    fontSize: 18,
    color: colors.black,
  },
  title: {
    fontWeight: "500",
    fontSize: 12,
    color: colors.black,
    marginTop: 8,
    marginBottom: 2,
  },
  month: {
    fontWeight: "500",
    fontSize: 12,
    color: colors.grey,
  },
});
