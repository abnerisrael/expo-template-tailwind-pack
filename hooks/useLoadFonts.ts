import { useEffect } from 'react';
import { SplashScreen } from 'expo-router';
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync();

const useLoadFonts = () => {
  const [loaded, error] = useFonts({
    'SpaceMono-Regular': require('@/assets/fonts/SpaceMono-Regular.ttf')
  });

  useEffect(() => {
    if (loaded || error) {
      // Hide the splash screen after fonts are loaded
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);
  return { loaded, error };
};

export default useLoadFonts;
