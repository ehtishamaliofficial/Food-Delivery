import {View, Text, TouchableWithoutFeedback, Image} from 'react-native';
import React from 'react';
import {MapPinIcon} from 'react-native-heroicons/outline';
import {themeColors} from '../theme/theme';
import {useNavigation} from '@react-navigation/native';

const FeaturedCard = ({item}) => {
  const navigate = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigate.navigate('Restaurant', {...item});
      }}>
      <View
        style={{
          shadowColor: themeColors.bgColor(1),
          shadowRadius: 7,
        }}
        className="mr-6 mb-2 bg-white rounded-3xl shadow-lg">
        <Image source={item.image} className="h-36 w-64 rounded-t-3xl" />
        <View className="px-3 pb-4 space-y-2">
          <Text className="text-lg font-bold text-black pt-2">{item.name}</Text>
          <View className="flex-row items-center space-x-1">
            <Image
              source={require('../assets/images/fullStar.png')}
              className="w-4 h-4"
            />
            <Text className="text-xs">
              <Text className="text-green-500">{item.stars}</Text>
              <Text className="text-gray-500">
                ({item.reviews} reviews ) .{' '}
                <Text className="font-semibold">{item.category}</Text>
              </Text>
            </Text>
          </View>

          <View className="flex-row items-center space-x-1">
            <MapPinIcon size={15} color={'gray'} strokeWidth={2.5} />
            <Text className="text-xs text-gray-700">
              Nearby. {item.address}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default FeaturedCard;
