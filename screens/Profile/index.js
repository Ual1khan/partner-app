import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { useAtom, useAction } from "@reatom/react";
import { createStackNavigator } from "@react-navigation/stack";

import { atoms, actions } from "../../store/profile";

import AboutProfile, { StudioDescriptionScreen } from "./detail";
import ProfileLoading from "./loading";

const Stack = createStackNavigator();

const userAvatar =
  "https://api-private.atlassian.com/users/2184498dc850fadb06abe64ffd9c1c88/avatar";

export function Profile({ navigation }) {
  const profileAtom = useAtom(atoms.profile);
  const getProfile = useAction(actions.getProfile);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phones, setPhones] = useState([]);
  const [description, setDescription] = useState("");
  const [website, setWebsite] = useState("");
  const [qr, setQr] = useState("");

  const goToDescriptionPage = () => {
    navigation.navigate("Description", { description });
  };

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  useEffect(() => {
    if (profileAtom.status === "success") {
      setName(profileAtom.data.name);
      setEmail(profileAtom.data.email);
      setPhones(profileAtom.data.phones);
      setDescription(profileAtom.data.description);
      setWebsite(profileAtom.data.website);
      setQr(profileAtom.data.qr);
    }
  }, [profileAtom]);

  return (
    <ScrollView>
      {profileAtom.status === "loading" ? (
        <ProfileLoading />
      ) : (
        <AboutProfile
          userAvatar={userAvatar}
          name={name}
          email={email}
          phones={phones}
          website={website}
          description={description}
          qrImage={qr}
          goToDescriptionPage={goToDescriptionPage}
        />
      )}
    </ScrollView>
  );
}

export function ProfileScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Description" component={StudioDescriptionScreen} />
    </Stack.Navigator>
  );
}
