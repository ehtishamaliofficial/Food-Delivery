import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {PlusIcon, MinusIcon} from 'react-native-heroicons/outline';
import {themeColors} from '../theme/theme';

const MenuItemCard = ({item}) => {
  return (
    <View className="flex-row items-center p-2 mx-2 mb-2 rounded-3xl bg-white shadow-lg shadow-black relative">
      <Image
        source={item.image}
        className="rounded-3xl"
        style={{width: 100, height: 100}}
      />
      <View className="flex-1 space-y-3 flex">
        <View className="pl-4">
          <Text className="text-lg font-bold text-black capitalize">
            {item.name}
          </Text>
          <Text className="text-gray-500">{item.description}</Text>
        </View>

        <View className="flex-row items-center justify-between pl-4">
          <Text className="text-lg font-bold text-gray-800">${item.price}</Text>
          <View className="flex-row items-center space-x-2">
            <TouchableOpacity
              className="p-1 rounded-full"
              style={{backgroundColor: themeColors.bgColor(1)}}>
              <PlusIcon size={20} color={'white'} strokeWidth={2.5} />
            </TouchableOpacity>
            <Text className="">0</Text>
            <TouchableOpacity
              className="p-1 rounded-full"
              style={{backgroundColor: themeColors.bgColor(1)}}>
              <MinusIcon size={20} color={'white'} strokeWidth={2.5} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MenuItemCard;
