import { faker } from "@faker-js/faker";
import {
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo, Feather } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
import { MotiView } from "moti";

const { width, height } = Dimensions.get("screen");

faker.seed(10);
const data = [...Array(20).keys()].map(() => ({
  key: faker.number.int().toString(),
  job: faker.animal.crocodilia(),
}));
const _colors = {
  active: "#FCD259ff",
  inactive: "#FCD25900",
};
const _spacing = 10;

export function DynamicScrollList() {
  const ref = useRef<FlatList>(null);
  const [indexScroll, setIndexScroll] = useState(0);
  const [position, setPosition] = useState(0);
  useEffect(() => {
    ref.current?.scrollToIndex({
      index: indexScroll,
      animated: true,
      viewPosition: position,
      viewOffset: position === 0.5 || position === 1 ? 0 : _spacing,
    });
  }, [indexScroll, position]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <FlatList
          ref={ref}
          initialScrollIndex={indexScroll}
          style={{ flexGrow: 0 }}
          data={data}
          keyExtractor={(item) => item.key}
          contentContainerStyle={{ paddingLeft: _spacing }}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({ item, index: fIndex }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setIndexScroll(fIndex);
                }}
              >
                <MotiView
                  animate={{
                    backgroundColor:
                      fIndex === indexScroll
                        ? _colors.active
                        : _colors.inactive,
                    opacity: fIndex === indexScroll ? 1 : 0.6,
                  }}
                  transition={{
                    duration: 500
                  }}
                  style={{
                    marginRight: _spacing,
                    padding: _spacing,
                    borderWidth: 2,
                    borderColor: _colors.active,
                    borderRadius: 12,
                    backgroundColor:
                      fIndex === indexScroll
                        ? _colors.active
                        : _colors.inactive,
                  }}
                >
                  <Text style={{ color: "#36303F", fontWeight: "700" }}>
                    {item.job}
                  </Text>
                </MotiView>
              </TouchableOpacity>
            );
          }}
        />
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            marginTop: _spacing * 10,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                color: "#36303F",
                fontWeight: "700",
                marginBottom: _spacing,
              }}
            >
              Scroll position
            </Text>
            <View
              style={{
                flexDirection: "row",
                width: width / 2,
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setPosition(0);
                }}
              >
                <View
                  style={{
                    padding: _spacing,
                    backgroundColor: "#FCD259",
                    borderRadius: _spacing,
                    marginRight: _spacing,
                  }}
                >
                  <Entypo name="align-left" size={24} color="#36303F" />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setPosition(0.5);
                }}
              >
                <View
                  style={{
                    padding: _spacing,
                    backgroundColor: "#FCD259",
                    borderRadius: _spacing,
                    marginRight: _spacing,
                  }}
                >
                  <Entypo
                    name="align-horizontal-middle"
                    size={24}
                    color="#36303F"
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setPosition(1);
                }}
              >
                <View
                  style={{
                    padding: _spacing,
                    backgroundColor: "#FCD259",
                    borderRadius: _spacing,
                  }}
                >
                  <Entypo name="align-right" size={24} color="#36303F" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{ color: "#36303F", fontWeight: "700", marginBottom: 10 }}
            >
              Navigation
            </Text>
            <View
              style={{
                flexDirection: "row",
                width: width / 2,
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  if (indexScroll === 0) {
                    return;
                  }
                  setIndexScroll(indexScroll - 1);
                }}
              >
                <View
                  style={{
                    padding: _spacing,
                    backgroundColor: "#FCD259",
                    borderRadius: _spacing,
                    marginRight: _spacing,
                  }}
                >
                  <Feather name="arrow-left" size={24} color="#36303F" />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  if (indexScroll === data.length - 1) {
                    return;
                  }
                  setIndexScroll(indexScroll + 1);
                }}
              >
                <View
                  style={{
                    padding: _spacing,
                    backgroundColor: "#FCD259",
                    borderRadius: _spacing,
                  }}
                >
                  <Feather name="arrow-right" size={24} color="#36303F" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
