/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.0.9 voxel.gltf
Author: Takuya (https://sketchfab.com/craftzdog)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/voxel-dog-7604c96da44a44ba900c51e753fb6339
Title: Voxel Dog
*/

import React from "react";

import { useGLTF } from "@react-three/drei";

function Voxel(props) {
  const { nodes, materials } = useGLTF("/voxel.gltf");
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.4, -0.03]} rotation={[-1.57, 0, 0]} scale={0.8}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Object_4.geometry}
            material={materials.palette}
            position={[3.69, 0, 0]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.Object_6.geometry}
            material={materials["Material.001"]}
            position={[-3.4, 0, -2.95]}
            scale={[7.05, 1, 7.05]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/voxel.gltf");
export default Voxel;