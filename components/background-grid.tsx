'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useMemo } from 'react'
import * as THREE from 'three'

function Grid() {
  const gridRef = useRef<THREE.Points>(null)

  const particlesCount = 5000
  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3)
    for (let i = 0; i < particlesCount; i++) {
      const i3 = i * 3
      pos[i3] = (Math.random() - 0.5) * 50
      pos[i3 + 1] = (Math.random() - 0.5) * 50
      pos[i3 + 2] = (Math.random() - 0.5) * 50
    }
    return pos
  }, [particlesCount])

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.2
      gridRef.current.rotation.y = Math.cos(state.clock.getElapsedTime() * 0.1) * 0.2
    }
  })

  return (
    <points ref={gridRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.1} 
        color="#4299e1" 
        sizeAttenuation 
        transparent 
        opacity={0.6} 
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

export function BackgroundGrid() {
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-black to-blue-900">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <Grid />
      </Canvas>
    </div>
  )
}

