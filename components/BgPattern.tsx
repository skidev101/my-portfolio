const BgPattern = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
  >
    {/* Subtle dot grid pattern */}
    <div
      className="absolute inset-0 opacity-[0.14]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, rgba(245, 246, 247, 0.4) 1px, transparent 0)",
        backgroundSize: "28px 28px",
      }}
    />
    {/* Smooth vignette overlay to soften background edges */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_20%,transparent_20%,#08090a_100%)]" />
  </div>
);

export default BgPattern;
