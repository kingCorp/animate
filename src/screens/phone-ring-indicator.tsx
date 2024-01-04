import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { MotiView } from "moti";
import { Easing } from "react-native-reanimated";

const _color = "#6E01EF";
const _size = 100;

export function PhoneRingIndicator() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View style={[styles.dot, styles.center]}>
          {[...Array(3).keys()].map((index) => {
            return (
              <MotiView
                key={index}
                from={{ opacity: 1, scale: 1 }}
                animate={{ opacity: 0, scale: 4 }}
                style={[StyleSheet.absoluteFillObject, styles.dot]}
                transition={{
                  type: "timing",
                  duration: 2000,
                  delay: index * 400,
                  easing: Easing.out(Easing.ease),
                  loop: true,
                  repeatReverse: false,
                }}
              />
            );
          })}
          <Feather name="phone-outgoing" size={32} color="#fff" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  dot: {
    width: _size,
    height: _size,
    borderRadius: _size,
    backgroundColor: _color,
  },
  center: { alignItems: "center", justifyContent: "center" },
});
