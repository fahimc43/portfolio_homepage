import { Box } from "@chakra-ui/react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import React from "react";
import Voxel from "./Voxel";

function VoxelDog() {
  return (
    <Box
      m="auto"
      //   mt={["-20px", "-60px", "-120px"]}
      mb={["-40px", "-140px", "-200px"]}
      w={[280, 480, 640]}
      h={[280, 480, 640]}
      position="relative"
    >
      <Canvas camera={{ fov: 30, position: [-10, 15, 20] }}>
        <OrbitControls enableZoom={true} autoRotate={true} />
        <ambientLight intensity={0.33} />
        <Voxel />
      </Canvas>
    </Box>
  );
}

export default VoxelDog;
