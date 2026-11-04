import { useHelper } from "@react-three/drei";
import { useRef } from "react";

const Lights = () => {
  const directionalLightRef = useRef();
  useHelper(directionalLightRef);


  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight
        ref={directionalLightRef}
        position={[-5, 4, 3]}
        intensity={3}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-far={10}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        shadow-normalBias={0.05}
        castShadow
        color={"white"}
      />
      
    </>
  );
};

export default Lights;