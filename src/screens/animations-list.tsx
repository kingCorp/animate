import { useNavigation } from "@react-navigation/native";
import { Pressable, ScrollView, Text, View } from "react-native";
import { NAV_ROUTES } from "../navigation/NAV_ROUTES";
import { SafeAreaView } from "react-native-safe-area-context";

const animationLists = [
  { title: "Dynamic Scroll List", screen: NAV_ROUTES.DynamicScrollList },
  { title: "Phone ring Indicator", screen: NAV_ROUTES.PhoneRingIndicator },
];
export function AnimationsList() {
  const { navigate } = useNavigation();
  return (
    <SafeAreaView style={{flex:1}}>
      <ScrollView
      >
        {animationLists.map((animationList) => (
          <Pressable
            key={animationList.title}
            style={{ paddingVertical: 20, alignItems: "center", borderBottomWidth:0.5 }}
            onPress={() => navigate(animationList.screen)}
          >
            <Text style={{ fontSize: 15 }}>{animationList.title}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
