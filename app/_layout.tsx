import '@/global.css';
import useLoadFonts from '@/hooks/useLoadFonts';
import { Slot } from 'expo-router';

export default function Layout() {
  useLoadFonts();
  return <Slot />;
}
