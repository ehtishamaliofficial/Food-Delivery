import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {themeColors} from '../theme/theme';
import FeaturedCard from './FeaturedCard';
import {GlobalStyle} from '../style/GlobalStyle';

const Featured = ({item}) => {
  return (
    <View>
      <View className="px-4 mt-4 flex-row justify-between items-center">
        <View>
          <Text
            style={GlobalStyle.textBold}
            className="text-lg font-bold text-black">
            {item.title}
          </Text>
          <Text className="text-gray-500 text-xs">{item.description}</Text>
        </View>

        <Text style={{color: themeColors.bgColor(1)}} className="font-semibold">
          See all
        </Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible py-5"
        contentContainerStyle={{paddingHorizontal: 10}}>
        {item.restaurants.map(restaurant => (
          <FeaturedCard key={restaurant.id} item={restaurant} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Featured;
