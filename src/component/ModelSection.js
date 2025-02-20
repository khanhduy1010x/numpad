import React, { Suspense,useRef, useEffect, useState,useTransition} from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, useProgress } from "@react-three/drei";

export default function ModelSection() { 
    const [model,setModel] = useState(1)
    const [isPending, startTransition] = useTransition();
    const modelPath = ["/numpadbeta.glb","/basic_numpad.glb","/numpad.glb"]
    const { scene } = useGLTF(modelPath[model-1]); 
    const modelSetting = [[75,75,75],[10,10,10],[15,15,15]]
    const controlsRef = useRef(); 
    const cameraRef = useRef(); 
    const handleChangeModel = (index) => {
        startTransition(() => setModel(index));
    };
    const LoadingIndicator = () => {
        const { progress } = useProgress();
        return <div style={{ fontSize: "18px", fontWeight: "bold" }}>Đang tải mô hình... ({Math.round(progress)}%)</div>;
    };
    useEffect(() => {
        if (cameraRef.current) {
            cameraRef.current.position.set(0, 8, 15); 
        }
        if (controlsRef.current) {
            controlsRef.current.reset(); 
        }
    }, [model]);
    return ( 
        <section id="model-section" className="model-container">
         <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginTop: "50px" }}>
                {[1, 2, 3].map((index) => (
                    <button 
                        className="neon-button"
                        style={{color: "black !important"}}
                        key={index}
                        onClick={() => handleChangeModel(index)}
                      
                        disabled={isPending}
                  >
                      {`Model ${index}`}
                        </button>
                ))}
            </div>

            <Suspense fallback={<LoadingIndicator />}>
                <Canvas                      
 camera={{ position: [0, 8, 15] }}> {/* Camera mặc định */}
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[5, 5, 5]} intensity={1} />
                    
                    {/* Giới hạn zoom với minDistance và maxDistance */}
                    <OrbitControls 
                    ref={controlsRef}
                        autoRotate 
                        autoRotateSpeed={1} 
                        minDistance={15}  // Khoảng cách nhỏ nhất
                        maxDistance={30} // Khoảng cách lớn nhất
                    />
                    
                    <primitive  scale={modelSetting[model-1]} object={scene} />
                </Canvas>
            </Suspense>
        </section>
    );
}
