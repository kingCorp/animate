import { useNavigation } from "@react-navigation/native";
import { Pressable, ScrollView, Text, View } from "react-native";
import { NAV_ROUTES } from "../navigation/NAV_ROUTES";
import { SafeAreaView } from "react-native-safe-area-context";

const animationLists = [
  { title: "Dynamic Scroll List", screen: NAV_ROUTES.DynamicScrollList },
];
export function AnimationsList() {
  const { navigate } = useNavigation();
  return (
    <SafeAreaView style={{flex:1}}>
      <ScrollView
        contentContainerStyle={{ paddingVertical: 20, marginHorizontal: 20 }}
      >
        {animationLists.map((animationList) => (
          <Pressable
            key={animationList.title}
            style={{ padding: 20, alignItems: "center", borderBottomWidth:0.5 }}
            onPress={() => navigate(animationList.screen)}
          >
            <Text style={{ fontSize: 15 }}>{animationList.title}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
