import React, { useEffect, useRef } from "react";
import "./App.css"; // Import file CSS
import GallerySection from "./component/GallerySection";
import ContactSection from "./component/ContactSection";
import Footer from "./component/Footer";
import Welcome from "./component/Welcome";
import ComponentModel from "./component/ComponentModel";
import ImageSlide from "./component/ImageSlide";

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
      <div ref={iframe1Ref}>
      <Welcome/>
      </div>
      <div ref={iframe2Ref}>
      <ComponentModel/>
      </div>
       <div>
    <ImageSlide/>

      </div>
    <GallerySection/>

    <ContactSection/>
      <Footer/>
    </div>
  );
};

export default App;