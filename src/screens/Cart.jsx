import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Button,
  ScrollView,
} from 'react-native';
import React from 'react';
import {ArrowLeftIcon} from 'react-native-heroicons/outline';
import {themeColors} from '../theme/theme';
import {featured} from '../_mock/data';

const Cart = () => {
  const restaurant = featured.restaurants[0];
  return (
    <View className="flex-1  pt-10">
      <View className="flex-1 bg-white rounded-t-2xl relative py-4">
        <TouchableOpacity
          className="absolute top-4 left-4 p-1.5 rounded-full"
          style={{backgroundColor: themeColors.bgColor(1)}}>
          <ArrowLeftIcon size={25} color={'white'} strokeWidth={2.5} />
        </TouchableOpacity>

        <Text className="text-2xl text-black font-bold text-center">
          Your Cart
        </Text>

        <Text className="text-center text-gray-500">{restaurant.name}</Text>

        <View
          className="w-full mt-4  flex-row justify-between items-center"
          style={{backgroundColor: themeColors.bgColor(0.5)}}>
          <Image
            source={require('../assets/images/bikeGuy.png')}
            className="w-20 h-20"
          />
          <Text className="text-sm f text-black">Delivery in 30-45 min</Text>

          <Text
            style={{color: themeColors.bgColor(1)}}
            className="text-lg font-bold mr-2">
            Change
          </Text>
        </View>

        <ScrollView
          contentContainerStyle={{paddingBottom: 50}}
          showsVerticalScrollIndicator={false}
          className="bg-white pt-5"></ScrollView>
      </View>
    </View>
  );
};

export default Cart;
