import { View } from "react-native";
import ContentLoader, { Rect, Circle } from "react-content-loader/native";

import { screenWidth } from "../../utils";
import { colors } from "../../theme";

const Skeleton = () => (
  <View
    style={{
      paddingVertical: 11,
      borderBottomColor: colors.border,
      borderBottomWidth: 1,
      paddingHorizontal: 16,
      height: 53,
    }}
  >
    <ContentLoader
      speed={1}
      width={screenWidth - 30}
      height={44}
      viewBox={`0 0 ${screenWidth - 30} 44`}
      backgroundColor="#D7DEE5"
      foregroundColor="#E8ECF0"
    >
      <Rect x="30" y="6" rx="6" ry="6" width={screenWidth - 70} height="16" />
      <Circle cx="12" cy="15" r="12" />
    </ContentLoader>
  </View>
);

const ProfileLoading = () => {
  return (
    <View style={{ marginTop: 200 }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Skeleton key={i} />
      ))}
    </View>
  );
};

export default ProfileLoading;
