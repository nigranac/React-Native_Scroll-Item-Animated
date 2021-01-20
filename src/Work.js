import * as React from 'react';
import {
  StatusBar,
  FlatList,
  Image,
  Animated,
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Easing,
  SafeAreaViewBase,
  SafeAreaView,
} from 'react-native';
const {width, height} = Dimensions.get('screen');
import faker from 'faker';

faker.seed(10);
const DATA = [...Array(30).keys()].map((_, i) => {
  return {
    key: faker.random.uuid(),
    image: `https://randomuser.me/api/portraits/${faker.helpers.randomize([
      'women',
      'men',
    ])}/${faker.random.number(60)}.jpg`,
    name: faker.name.findName(),
    jobTitle: faker.name.jobTitle(),
    email: faker.internet.email(),
  };
});

const SPACING = 20;
const AVATAR_SIZE = 70;

const Work = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar hidden />

      <FlatList
        data={DATA}
        keyExtractor={(item) => item.key}
        renderItem={({item, index}) => {
          return (
            <View style={{flexDirection:"row"}}>
              <Image
                source={{uri: item.image}}
                style={{
                  width: AVATAR_SIZE,
                  height: AVATAR_SIZE,
                  borderRadius: AVATAR_SIZE,
                }}
              />
              <View>
                  <Text>{item.name}</Text>
                  <Text>{item.jobTitle}</Text>
                  <Text>{item.email}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Work;
