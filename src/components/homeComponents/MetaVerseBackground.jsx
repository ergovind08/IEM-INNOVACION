// src/components/MetaverseBackground.js
import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';

function RotatingCube() {
    const cubeRef = React.useRef();

    // Rotate the cube on each frame
    useFrame(() => {
        cubeRef.current.rotation.x += 0.005;
        cubeRef.current.rotation.y += 0.005;
    });

    return (
        <mesh ref={cubeRef}>
            <Box args={[1, 1, 1]} scale={[2, 2, 2]}>
                <meshStandardMaterial attach="material" color="hotpink" />
            </Box>
        </mesh>
    );
}

function MetaverseBackground() {
    return (
        <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <RotatingCube />
        </Canvas>
    );
}

export default MetaverseBackground;
