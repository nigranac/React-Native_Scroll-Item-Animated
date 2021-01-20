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
            <View style={{flexDirection:"row",padding:SPACING,marginBottom:SPACING}}>
              <Image
                source={{uri: item.image}}
                style={{
                  width: AVATAR_SIZE,
                  height: AVATAR_SIZE,
                  borderRadius: AVATAR_SIZE,
                  marginRight:SPACING/2
                }}
              />
              <View>
                  <Text style={{fontSize:22,fontWeight:"700"}}>{item.name}</Text>
                  <Text style={{fontSize:18,opacity:.7}}>{item.jobTitle}</Text>
                  <Text style={{fontSize:14,opacity:.8,color:"#0099cc"}}>{item.email}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Work;
