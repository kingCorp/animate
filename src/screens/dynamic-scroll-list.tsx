import { faker } from "@faker-js/faker";
import { Dimensions, FlatList, Pressable, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo, Feather } from '@expo/vector-icons';

const { width, height } = Dimensions.get("screen");

faker.seed(10);
const data = [...Array(20).keys()].map(() => ({
  key: faker.number.hex(),
  job: faker.animal.crocodilia(),
}));
const _colors = {
  active: "#FCD259ff",
  inactive: "#FCD25900",
};
const _spacing = 10;

export function DynamicScrollList() {
  return (
    <SafeAreaView style={{flex:1}}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FlatList
        style={{ flexGrow: 0 }}
        data={data}
        keyExtractor={(item) => item.key}
        contentContainerStyle={{ paddingLeft: _spacing }}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={({ item, index: fIndex }) => {
          return (
            <TouchableOpacity onPress={() => {}}>
              <View
                style={{
                  marginRight: _spacing,
                  padding: _spacing,
                  borderWidth: 2,
                  borderColor: _colors.active,
                  borderRadius: 12,
                  backgroundColor: _colors.inactive,
                }}>
                <Text style={{ color: '#36303F', fontWeight: '700' }}>
                  {item.job}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          marginTop: _spacing * 10,
        }}>
        <View style={{ alignItems: 'center' }}>
          <Text
            style={{
              color: '#36303F',
              fontWeight: '700',
              marginBottom: _spacing,
            }}>
            Scroll position
          </Text>
          <View
            style={{
              flexDirection: 'row',
              width: width / 2,
              justifyContent: 'center',
            }}>
            <TouchableOpacity onPress={() => {}}>
              <View
                style={{
                  padding: _spacing,
                  backgroundColor: '#FCD259',
                  borderRadius: _spacing,
                  marginRight: _spacing,
                }}>
                <Entypo name='align-left' size={24} color='#36303F' />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <View
                style={{
                  padding: _spacing,
                  backgroundColor: '#FCD259',
                  borderRadius: _spacing,
                  marginRight: _spacing,
                }}>
                <Entypo
                  name='align-horizontal-middle'
                  size={24}
                  color='#36303F'
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <View
                style={{
                  padding: _spacing,
                  backgroundColor: '#FCD259',
                  borderRadius: _spacing,
                }}>
                <Entypo name='align-right' size={24} color='#36303F' />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text
            style={{ color: '#36303F', fontWeight: '700', marginBottom: 10 }}>
            Navigation
          </Text>
          <View
            style={{
              flexDirection: 'row',
              width: width / 2,
              justifyContent: 'center',
            }}>
            <TouchableOpacity onPress={() => {}}>
              <View
                style={{
                  padding: _spacing,
                  backgroundColor: '#FCD259',
                  borderRadius: _spacing,
                  marginRight: _spacing,
                }}>
                <Feather name='arrow-left' size={24} color='#36303F' />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <View
                style={{
                  padding: _spacing,
                  backgroundColor: '#FCD259',
                  borderRadius: _spacing,
                }}>
                <Feather name='arrow-right' size={24} color='#36303F' />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
    </SafeAreaView>
  );
}