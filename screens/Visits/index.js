import { Button, ScrollView, View, ActivityIndicator } from "react-native";
import { useAtom, useAction } from "@reatom/react";
import { useEffect, useState } from "react";

import { atoms, actions } from "../../store/visits";
import Visit from "../../components/Visit";
import VisitsEmpty from "./empty";

const statusDict = {
  0: "APPROVED",
  1: "WAITING",
  2: "CANCELED",
};

export function VisitsScreen() {
  const [approvedCount, setApprovedCount] = useState(0);
  const [waitingCount, setWaitingCount] = useState(0);
  const [canceledCount, setCanceledCount] = useState(0);
  const [activeButton, setActiveButton] = useState(0);

  const visitsAtom = useAtom(atoms.visits);
  const visitsCountAtom = useAtom(atoms.visitsCounter);

  const getVisits = useAction(actions.getVisits);
  const getVisitsCounters = useAction(actions.getVisitsCounters);

  const buttons = [
    `Approved(${approvedCount})`,
    `Waiting(${waitingCount})`,
    `Canceled(${canceledCount})`,
  ];

  useEffect(() => {
    getVisitsCounters();
  }, []);

  useEffect(() => {
    getVisits({ status: statusDict[activeButton] });
  }, [activeButton]);

  useEffect(() => {
    if (visitsCountAtom.status === "success") {
      setApprovedCount(visitsCountAtom.data.approvedCount);
      setWaitingCount(visitsCountAtom.data.waitingCount);
      setCanceledCount(visitsCountAtom.data.canceledCount);
    }
  }, [visitsCountAtom]);

  return (
    <ScrollView>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: 20,
          paddingHorizontal: 10,
        }}
      >
        {buttons.map((buttonTitle, index) => (
          <Button
            key={index}
            disabled={activeButton === index}
            title={buttonTitle}
            onPress={() => setActiveButton(index)}
          />
        ))}
      </View>
      {visitsAtom.status === "loading" ? (
        <ActivityIndicator size="large" />
      ) : (visitsAtom.data || []).length > 0 ? (
        <>
          {visitsAtom.data.map((v) => (
            <Visit key={v.id} {...v} />
          ))}
        </>
      ) : (
        <VisitsEmpty />
      )}
    </ScrollView>
  );
}
