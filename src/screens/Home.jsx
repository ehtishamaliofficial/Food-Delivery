import {View, Text, TextInput, ScrollView} from 'react-native';
import React from 'react';
import {
  MagnifyingGlassIcon,
  MapPinIcon,
  AdjustmentsVerticalIcon,
} from 'react-native-heroicons/outline';
import {themeColors} from '../theme/theme';
import Categories from '../components/Categories';
import {featured} from '../_mock/data';
import Featured from '../components/Featured';
import {GlobalStyle} from '../style/GlobalStyle';

const Home = () => {
  return (
    <View className="flex-1  bg-white">
      {/* search bar */}
      <View className="flex-row items-center  mx-4 my-2">
        <View className="flex-row space-x-2 items-center rounded-full  bg-gray-100 flex-1 px-4 py-2 border border-gray-300">
          <MagnifyingGlassIcon size={25} color={'gray'} strokeWidth={2.5} />
          <TextInput placeholder="Restaurant" className="flex-1 ml-2 p-0" />

          <View className="flex-row items-center justify-center border-l border-l-gray-300 space-x-1">
            <MapPinIcon size={25} color={'gray'} strokeWidth={2.5} />
            <Text style={GlobalStyle.text} className="text-gray-500 text-xs">
              Delhi, India
            </Text>
          </View>
        </View>

        <View
          className="ml-2 p-2 rounded-full"
          style={{backgroundColor: themeColors.bgColor(1)}}>
          <AdjustmentsVerticalIcon
            size={25}
            color={'white'}
            strokeWidth={2.5}
          />
        </View>
      </View>

      {/* categories */}

      <Categories />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 10}}>
        {[featured, featured, featured].map((item, index) => (
          <Featured key={index} item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Home;
