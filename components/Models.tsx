import { useGLTF, Float } from '@react-three/drei';
import ScreenSizer from '../hooks/ScreenSizer';
import { motion } from 'framer-motion-3d';
import { useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';

export default function Models() {
    const { scene } = useGLTF('/Skills.gltf');
    const screenSize = ScreenSizer();

    let scale = 6;
    if (screenSize === 'small') {
        scale = 3;
    } else if (screenSize === 'medium') {
        scale = 4;
    } else {
        scale = 6;
    }

    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
      const handleMouseMove = (event: MouseEvent) => {
        setMousePos({
            x: (event.clientX / window.innerWidth) * 2 - 1, 
            y: -((event.clientY / window.innerHeight) * 2 - 1)
          });
      };
      
      window.addEventListener('mousemove', handleMouseMove);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);
  
    const rotationIntensity = 0.1

    useFrame(() => {
        scene.rotation.y = mousePos.x * Math.PI * rotationIntensity; // Rotate around Y axis (left/right)
        scene.rotation.x = -mousePos.y * Math.PI * rotationIntensity; // Rotate around X axis (up/down)
    });

    

    return (
        <Float>
            <motion.primitive object={scene} scale={scale} />
        </Float>
    )
}

useGLTF.preload('/medias/Skills.gltf');