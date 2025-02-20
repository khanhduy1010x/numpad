const Welcome = () => {
  return (
    <iframe
      src="/dist/index.html"
      style={{ width: "100vw", height: "100vh", border: "none" }}
      title="Embedded HTML"
    />
  );
};

export default Welcome;
