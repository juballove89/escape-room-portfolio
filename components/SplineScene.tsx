'use client';

import { Suspense } from 'react';
import Spline from '@splinetool/react-spline';

interface SplineSceneProps {
  scene?: string;
  className?: string;
}

function SplineLoader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-12 h-12 border-2 border-white/20 border-t-white/80 rounded-full animate-spin" />
    </div>
  );
}

export default function SplineScene({
  scene = 'https://prod.spline.design/YOUR_SCENE_ID/scene.splinecode',
  className = ''
}: SplineSceneProps) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <Suspense fallback={<SplineLoader />}>
        <Spline scene={scene} />
      </Suspense>
    </div>
  );
}
