import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {ChevronLeftIcon, MapPinIcon} from 'react-native-heroicons/outline';
import {themeColors} from '../theme/theme';
import MenuItemCard from '../components/MenuItemCard';
import {PlusIcon, MinusIcon} from 'react-native-heroicons/outline';

const Restaurant = () => {
  const {params} = useRoute();
  // console.log(params);
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-white relative">
      <View className="relative">
        <Image source={params.image} className="w-full h-56" />
        <TouchableOpacity
          className="absolute top-2 left-2 w-10 h-10 rounded-full items-center justify-center"
          style={{
            backgroundColor: themeColors.bgColor(1),
          }}
          onPress={() => navigation.goBack()}>
          <ChevronLeftIcon size={25} color={'white'} />
        </TouchableOpacity>
      </View>

      <View className="pt-6 bg-white -mt-12 rounded-t-3xl">
        <View className="px-4">
          <Text className="text-3xl font-bold text-black capitalize">
            {params.name}
          </Text>
          <View className="flex-row items-center space-x-1">
            <Image
              source={require('../assets/images/fullStar.png')}
              className="w-4 h-4"
            />
            <Text className="text-xs">
              <Text className="text-green-500">{params.stars}</Text>
              <Text className="text-gray-500">
                ({params.reviews} reviews ) .{' '}
                <Text className="font-bold">{params.category}</Text>
              </Text>
            </Text>
            <View className="flex-row items-center space-x-1">
              <MapPinIcon size={15} color={'gray'} strokeWidth={2.5} />
              <Text className="text-xs text-gray-500">
                Nearby. {params.address}
              </Text>
            </View>
          </View>
          <Text className="text-gray-500">{params.description}</Text>
        </View>
      </View>
      <ScrollView>
        <View className="pb-20">
          <Text className="px-4 py-4 text-2xl font-bold text-black">Menu</Text>

          {/* menu items */}

          {params.dishes.map(menu => (
            <MenuItemCard key={menu.id} item={menu} />
          ))}
        </View>
      </ScrollView>

      <View className="absolute bottom-2 z-50 w-full">
        <TouchableOpacity
          onPress={() => navigation.navigate('Cart')}
          className="p-4 py-3 rounded-full mx-4 flex-row justify-between items-center shadow-lg"
          style={{
            backgroundColor: themeColors.bgColor(1),
            shadowColor: themeColors.bgColor(1),
            shadowRadius: 7,
          }}>
          <View className="w-10 h-10 items-center justify-center bg-white/40 rounded-full">
            <Text className="text-lg font-extrabold text-white">3</Text>
          </View>

          <Text className="flex-1 text-center text-lg font-extrabold text-white">
            View Cart
          </Text>

          <Text className="text-lg font-extrabold text-white">$20.00</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Restaurant;
