const BgPattern = () => (
  <div
    className="absolute inset-0 -z-10 bg-white dark:bg-black transition-colors duration-500"
    style={{
      // backgroundColor: "var(--background)",
      backgroundImage: `
        linear-gradient(var(--pattern-color) 1px, transparent 1px),
        linear-gradient(90deg, var(--pattern-color) 1px, transparent 1px)
      `,
      backgroundSize: "80px 80px",
      maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0))",
      WebkitMaskImage:
        "linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0))",
      // mixBlendMode: "overlay",
      // opacity: 0.8,
    }}
  />
);

export default BgPattern;
