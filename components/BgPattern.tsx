const BgPattern = () => (
  <div
    className="absolute inset-0 -z-10 pointer-events-none"
    style={{
      backgroundImage:
        "radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.15) 1px, transparent 0)",
      backgroundSize: "20px 20px",
    }}
  />
);

export default BgPattern;
