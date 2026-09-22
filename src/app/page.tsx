import type { Viewport } from 'next';
import LandingCanvas from '@/components/home/LandingCanvas';
import LandingTopBar from '@/components/home/LandingTopBar';
import AppleTV from '@/components/home/AppleTV';
import AnimationBanner from '@/components/home/AnimationBanner';
import DeskScene from '@/components/home/DeskScene';
import BottomScene from '@/components/home/BottomScene';

export const viewport: Viewport = {
  themeColor: '#ff94af',
  colorScheme: 'light',
};

export default function Home() {
  return (
    <LandingCanvas>
      <LandingTopBar />
      <AppleTV />
      <AnimationBanner />
      <DeskScene />
      <BottomScene />
    </LandingCanvas>
  );
}
