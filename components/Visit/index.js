import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import moment from "moment";
import "moment/locale/ru";

import { noImg } from "./noImg";
import { colors } from "../../theme";

export default function Visit(props) {
  const {
    userAvatar,
    user,
    trainingName,
    timestampStart,
    timestampEnd,
    timestamp,
    status,
  } = props;

  const [userImg, setUserImg] = useState(noImg);

  const handleUserImgError = () => {
    setUserImg(noImg);
  };

  useEffect(() => {
    if (userAvatar) {
      setUserImg(userAvatar);
    }
  }, [userAvatar, setUserImg]);

  return (
    <View style={styles.visit}>
      <View style={styles.visitRowUser}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            source={{ uri: userImg }}
            style={styles.userAvatar}
            onError={handleUserImgError}
          />
          <Text style={styles.userName}>{user}</Text>
        </View>
        <Text style={styles.userVisit}>
          {moment(timestamp).format("DD MMM")}
        </Text>
      </View>
      <View style={styles.visitRowFitnessName}>
        <Text style={styles.fitness}>{trainingName}</Text>
        <Text style={styles.fitness}>
          {moment(timestampStart).format("HH:mm")} -{" "}
          {moment(timestampEnd).format("HH:mm")}
        </Text>
      </View>
      <View style={styles.visitRowStatus}>
        <Text style={styles.status}>{status}</Text>
        <Text style={styles.timestamp}>
          {moment(timestamp).format("DD MMM, YYYY, HH:mm")}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  visit: {
    width: "100%",
    paddingHorizontal: 16,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: 8,
    marginBottom: 8,
    zIndex: 1,
    elevation: 1,
  },
  visitRowUser: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 13,
  },
  userAvatar: {
    width: 32,
    height: 32,
    borderRadius: 100,
    marginRight: 12,
  },
  userName: {
    fontStyle: "normal",
    fontSize: 16,
    fontWeight: "500",
    color: colors.black,
  },
  userVisit: {
    fontStyle: "normal",
    fontSize: 16,
    fontWeight: "500",
    color: colors.grey,
    alignSelf: "center",
  },
  visitRowFitnessName: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  fitness: {
    fontStyle: "normal",
    fontSize: 14,
    fontWeight: "500",
    color: colors.grey,
  },
  visitRowStatus: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 16,
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
  },
  status: {
    fontStyle: "normal",
    fontSize: 14,
    fontWeight: "500",
  },
  statusApproved: {
    color: colors.green,
  },
  statusCanceled: {
    color: colors.red,
  },
  timestamp: {
    fontStyle: "normal",
    fontSize: 14,
    fontWeight: "500",
    color: colors.black,
  },
});
