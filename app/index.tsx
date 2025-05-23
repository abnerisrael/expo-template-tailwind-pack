import React from 'react';
import { Text, View } from 'react-native';

const WelcomeScreen = () => {
  return (
    <View className='flex-1 justify-center items-center bg-gray-100'>
      <Text className='text-2xl font-bold mb-2'>
        Welcome to Expo Starter Pack!
      </Text>
      <Text className='text-base text-gray-600'>
        Start building your app now 🚀
      </Text>
    </View>
  );
};

export default WelcomeScreen;
