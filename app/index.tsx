import React from 'react';
import { Text, View } from 'react-native';
import Expo from '@/assets/images/expo.svg';
import TailWindCssIcon from '@/assets/images/tailwindcss-icon.svg';

const WelcomeScreen = () => {
  return (
    <View className='flex-1 justify-center items-center bg-gray-100 px-12 gap-4'>
      <View className='flex-row gap-4 self-start items-center'>
        <Expo height={40} width={40} fill={'#000'} />
        <TailWindCssIcon />
      </View>
      <Text className='text-3xl font-bold mb-2'>
        Welcome to{'\n'}Expo Template Tailwind Pack!
      </Text>
      <Text className='text-lg text-center text-gray-600'>
        A modern, production-ready template using Expo + Tailwind CSS,
        pre-configured with essential tools to help you start React Native
        projects with speed, quality, and productivity from the very first
        commit!
      </Text>
      <Text className='text-xl text-center font-bold text-gray-600'>
        Start building your app right now{'\n'}🚀
      </Text>
    </View>
  );
};

export default WelcomeScreen;
