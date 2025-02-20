import React, { Suspense } from "react";
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

const App = () => {

  return (
    <div className="container">
      {/* Model Section */}
      <Welcome/>
      <ModelSection/>
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