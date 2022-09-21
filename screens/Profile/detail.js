import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  Linking,
  Button,
} from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

import { colors } from "../../theme";
import { noImg } from "../../components/Visit/noImg";

export function StudioDescriptionScreen({ route, navigation }) {
  const { description } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.description}>{description}</Text>

      <Button title="Go Back" onPress={navigation.goBack} />
    </View>
  );
}

const AboutProfile = (props) => {
  const {
    userAvatar,
    name,
    email,
    phones,
    website,
    qrImage,
    goToDescriptionPage,
  } = props;

  const [qrError, setQrError] = useState(false);

  const [userImg, setUserImg] = useState(userAvatar || noImg);
  const [showDetail, setShowDetail] = useState(false);
  const [detail, setDetail] = useState("");

  const handleDetail = (str) => () => {
    !showDetail ? setShowDetail(true) : setShowDetail(false);
    setDetail(str);
  };

  const handleUserImgError = () => {
    setUserImg(noImg);
  };

  const renderTitleBack = (title) => {
    return (
      <View style={styles.titleBack}>
        <TouchableOpacity onPress={handleDetail("")}>
          <MaterialCommunityIcons
            name="chevron-left"
            color={colors.primary}
            size={32}
          />
        </TouchableOpacity>
        <Text style={styles.titleBackName}>{title}</Text>
        <View />
      </View>
    );
  };
  const renderDetail = () => {
    return (
      <>
        {detail === "qr" ? (
          <>
            {renderTitleBack("QR-код")}
            <View style={[styles.container, styles.qrContainer]}>
              <Text style={styles.qrHint}>
                Данный QR-код является уникальным кодом вашего зала
              </Text>
              <View style={styles.qrLayer}>
                <Image
                  onError={() => {
                    setQrError(true);
                  }}
                  source={
                    qrImage ? { uri: qrImage } : require("./empty-qr.png")
                  }
                  style={styles.qr}
                />
              </View>
              {qrError && (
                <>
                  <Text style={styles.qrErrorTitle}>QR код отсутствует</Text>
                  <Text style={styles.qrErrorDesc}>
                    Обратитесь в{" "}
                    <Text
                      onPress={() => setDetail("support")}
                      style={{ color: colors.primary }}
                    >
                      службу поддержки
                    </Text>{" "}
                    с этой проблемой
                  </Text>
                </>
              )}
            </View>
          </>
        ) : (
          detail === "support" && (
            <>
              {renderTitleBack("Свяжитесь с нами")}
              <View style={[styles.container, styles.supportContainer]}>
                <Text style={styles.supportInfo}>
                  Служба поддержки работает с 09:00 – 18:00 по Алматинскому
                  времени без выходных
                </Text>
                <View style={styles.support}>
                  <Text style={styles.supportLabel}>Номер телефона</Text>
                  <Text
                    style={styles.supportContacts}
                    onPress={() => Linking.openURL("tel:+77710216640")}
                  >
                    +7 (771) 021-66-40
                  </Text>
                  <Text style={styles.supportLabel}>Адрес почты</Text>
                  <Text
                    onPress={() => Linking.openURL("mailto:partner@1fit.app")}
                    style={styles.supportContacts}
                  >
                    partner@1fit.app
                  </Text>
                </View>
                <View style={styles.socNetworks}>
                  <TouchableOpacity
                    onPress={() =>
                      Linking.openURL("https://t.me/FitBuster").catch((err) =>
                        console.error("An error occurred", err)
                      )
                    }
                    style={styles.supportTelegram}
                  >
                    <Text style={styles.socNetworkLabel}>
                      <FontAwesome
                        name="telegram"
                        size={20}
                        color={colors.white}
                      />{" "}
                      Telegram
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() =>
                      Linking.openURL("https://wa.me/77710216640").catch(
                        (err) => console.error("An error occurred", err)
                      )
                    }
                    style={styles.supportWhatsapp}
                  >
                    <Text style={styles.socNetworkLabel}>
                      <MaterialCommunityIcons
                        name="whatsapp"
                        color={colors.white}
                        size={20}
                      />{" "}
                      WhatsApp
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </>
          )
        )}
      </>
    );
  };

  return (
    <>
      {!showDetail ? (
        <>
          <View style={styles.aboutMe}>
            <Image
              source={{ uri: userImg }}
              style={styles.userAvatar}
              onError={handleUserImgError}
            />
            <View style={styles.name}>
              <Text style={styles.studioName}>{name}</Text>
              <Text style={styles.studioEmail}>{email}</Text>
            </View>
          </View>
          <View style={styles.about}>
            <TouchableOpacity
              onPress={() => Linking.openURL(`tel:${phones[0] || ""}`)}
              style={styles.list}
            >
              <View style={styles.icon}>
                <MaterialCommunityIcons
                  name="phone"
                  color={colors.grey}
                  size={20}
                />
                <Text style={styles.listTitle}>Телефон</Text>
              </View>
              <Text style={styles.listSubtitle}>{phones.join(", ")}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Linking.openURL(website)}
              style={styles.list}
            >
              <View style={styles.icon}>
                <MaterialCommunityIcons
                  name="web"
                  color={colors.grey}
                  size={20}
                />
                <Text
                  style={{
                    ...styles.listTitle,
                    marginRight: 30,
                    marginLeft: 8,
                  }}
                >
                  Сайт
                </Text>
              </View>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{ ...styles.listSubtitle, maxWidth: 250 }}
              >
                {website}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToDescriptionPage} style={styles.list}>
              <View style={styles.icon}>
                <MaterialCommunityIcons
                  name="view-headline"
                  color={colors.grey}
                  size={20}
                />
                <Text style={styles.listTitle}>Описание зала</Text>
              </View>
              <MaterialCommunityIcons
                name="chevron-right"
                color={colors.primary}
                size={20}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleDetail("qr")} style={styles.list}>
              <View style={styles.icon}>
                <MaterialCommunityIcons
                  name="qrcode"
                  color={colors.grey}
                  size={20}
                />
                <Text style={styles.listTitle}>QR-код</Text>
              </View>
              <MaterialCommunityIcons
                name="chevron-right"
                color={colors.primary}
                size={20}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleDetail("support")}
              style={styles.list}
            >
              <View style={styles.icon}>
                <MaterialCommunityIcons
                  name="message-outline"
                  color={colors.grey}
                  size={20}
                />
                <Text style={styles.listTitle}>Связаться с 1FIT</Text>
              </View>
              <MaterialCommunityIcons
                name="chevron-right"
                color={colors.primary}
                size={20}
              />
            </TouchableOpacity>
          </View>
        </>
      ) : (
        renderDetail()
      )}
    </>
  );
};

const styles = StyleSheet.create({
  titleBack: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 24,
  },
  titleBackName: {
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
    marginRight: 32,
    color: colors.black,
  },
  container: {
    paddingHorizontal: 16,
    paddingVertical: 28,
  },
  about: {
    width: "100%",
    paddingHorizontal: 16,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: 16,
  },
  name: {
    display: "flex",
    flexDirection: "column",
  },
  studioName: {
    fontSize: 18,
    fontWeight: "500",
    color: colors.black,
  },
  studioEmail: {
    color: colors.grey,
    marginTop: 4,
  },
  userAvatar: {
    width: 48,
    height: 48,
    borderRadius: 100,
    marginRight: 16,
  },
  aboutMe: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: colors.secondary,
    height: 96,
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  list: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 16,
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
    marginVertical: 8,
  },
  icon: {
    display: "flex",
    flexDirection: "row",
  },
  listTitle: {
    marginLeft: 8,
    color: colors.black,
    fontWeight: "500",
    fontSize: 16,
  },
  listTitleLogout: {
    marginLeft: 8,
    color: colors.red,
    fontWeight: "500",
    fontSize: 16,
  },
  listSubtitle: {
    color: colors.grey,
    fontSize: 16,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.black,
  },
  qrContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  qrHint: {
    textAlign: "center",
    color: colors.grey,
    fontSize: 16,
    marginBottom: 24,
  },
  qrLayer: {
    padding: 22,
    width: 320,
    height: 320,
    borderRadius: 12,
    backgroundColor: colors.white,
    shadowColor: "#EAEAEA",
    shadowRadius: 32,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  qr: {
    width: 275,
    height: 275,
  },
  qrErrorTitle: {
    fontSize: 20,
    lineHeight: 32,
    fontWeight: "bold",
    color: colors.black,
    textAlign: "center",
  },
  qrErrorDesc: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.grey,
    textAlign: "center",
    marginTop: 4,
  },
  supportContainer: {
    display: "flex",
    flexDirection: "column",
  },
  supportInfo: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 8,
    color: colors.black,
  },
  supportLabel: {
    color: colors.grey,
    fontSize: 17,
    marginTop: 16,
    marginBottom: 8,
  },
  supportContacts: {
    color: colors.primary,
    fontWeight: "600",
    fontSize: 17,
  },
  socNetworks: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    height: 48,
    marginTop: 32,
  },
  socNetworkLabel: {
    color: colors.white,
    alignSelf: "center",
    fontSize: 17,
    fontWeight: "bold",
  },
  supportTelegram: {
    color: colors.white,
    height: "100%",
    borderRadius: 10,
    backgroundColor: "#4F9FD5",
    padding: 11,
    width: "47%",
  },
  supportWhatsapp: {
    color: colors.white,
    height: "100%",
    borderRadius: 10,
    backgroundColor: "#4CD964",
    padding: 11,
    width: "48%",
  },
  supportWrite: {
    display: "flex",
    flexDirection: "column",
    marginTop: 32,
  },
  supportInput: {
    borderWidth: 0,
    width: "100%",
    height: 48,
    marginTop: 16,
    marginBottom: 24,
  },
  supportButton: {
    backgroundColor: colors.primary,
    height: 50,
    paddingHorizontal: 16,
    alignItems: "center",
    paddingVertical: 13,
    borderRadius: 10,
  },
  supportButtonText: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 17,
  },
});

export default AboutProfile;
