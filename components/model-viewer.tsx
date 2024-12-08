'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import { Suspense } from 'react'
import { useGLTF } from '@react-three/drei'

function Model() {
  const { scene } = useGLTF('/assets/3d/duck.glb')
  return <primitive object={scene} scale={2} />
}

export function ModelViewer() {
  return (
    <div className="h-[400px] w-full rounded-lg overflow-hidden bg-black/50 backdrop-blur-sm border border-white/10">
      <Canvas shadows camera={{ position: [0, 0, 10], fov: 25 }}>
        <Suspense fallback={null}>
          <Stage environment="studio" intensity={0.5}>
            <Model />
          </Stage>
        </Suspense>
        <OrbitControls autoRotate />
      </Canvas>
    </div>
  )
}

