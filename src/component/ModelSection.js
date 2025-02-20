import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";

export default function ModelSection() { 
    const { scene } = useGLTF("/numpadbeta.glb"); // Đảm bảo file GLB nằm trong thư mục public
    
    return ( 
        <section id="model-section" className="model-container">
            <Suspense fallback={<div className="loading">Đang tải mô hình...</div>}>
                <Canvas camera={{ position: [0, 8, 15] }}> {/* Camera mặc định */}
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[5, 5, 5]} intensity={1} />
                    
                    {/* Giới hạn zoom với minDistance và maxDistance */}
                    <OrbitControls 
                        autoRotate 
                        autoRotateSpeed={1} 
                        minDistance={15}  // Khoảng cách nhỏ nhất
                        maxDistance={30} // Khoảng cách lớn nhất
                    />
                    
                    <primitive scale={[75, 75, 75]} object={scene} />
                </Canvas>
            </Suspense>
        </section>
    );
}
