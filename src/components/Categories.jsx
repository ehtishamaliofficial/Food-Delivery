import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {categories} from '../_mock/data';
import {themeColors} from '../theme/theme';

const Categories = () => {
  const [activeCategory, setActiveCategory] = React.useState(0);
  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{paddingHorizontal: 10}}>
        {categories.map(category => {
          const isActive = category.id === activeCategory;
          const btnActiveClass = isActive ? 'bg-gray-600' : 'bg-gray-100';
          const textClasses = isActive
            ? 'font-semibold text-gray-900'
            : 'text-gray-500';
          return (
            <View
              key={category.id}
              className="mx-4 flex justify-center items-center">
              <TouchableOpacity
                onPress={() => setActiveCategory(category.id)}
                className={`w-16 h-16 flex rounded-full items-center justify-center ${btnActiveClass}`}>
                <Image source={category.image} className="w-12 h-12" />
              </TouchableOpacity>
              <Text className={textClasses}>{category.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;
