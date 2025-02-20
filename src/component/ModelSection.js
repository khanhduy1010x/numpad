import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
export default function ModelSection () { 
    const { scene } = useGLTF("/numpadbeta.glb"); // Đảm bảo file GLB nằm trong thư mục public
    return ( 
        <section id="model-section" className="model-container">
        <Suspense fallback={<div className="loading">Đang tải mô hình...</div>}>
          <Canvas camera={{ position: [0, 8, 15] }}> {/* Đẩy camera ra xa hơn */}
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <OrbitControls autoRotate autoRotateSpeed={1} />
            <primitive scale={[70,70,70]} object={scene} />
          </Canvas>
        </Suspense>
      </section>
    )
}