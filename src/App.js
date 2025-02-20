import React, { Suspense, useEffect, useReducer, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import "./App.css"; // Import file CSS
import Header from "./component/Header";
import FeaturesSection from "./component/FeaturesSection";
import GallerySection from "./component/GallerySection";
import ContactSection from "./component/ContactSection";
import Footer from "./component/Footer";
import ModelSection from "./component/ModelSection";
import Welcome from "./component/Welcome";
import BgNumpad from "./component/BgNumpad";
import ComponentModel from "./component/ComponentModel";

const App = () => {
  const iframe1Ref = useRef(null);
  const iframe2Ref = useRef(null);

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data === "scrollToIframe2") {
        if (iframe2Ref.current) {
          iframe2Ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);
  return (
    <div className="container">
      {/* Model Section */}
      <div ref={iframe1Ref}>
      <Welcome/>
      </div>
      <div ref={iframe2Ref}>
      <ComponentModel/>

      </div>
      {/* Features Section */}
      <FeaturesSection/>

      {/* Gallery Section */}
    <GallerySection/>

      {/* Contact Section */}
  
    <ContactSection/>
      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default App;