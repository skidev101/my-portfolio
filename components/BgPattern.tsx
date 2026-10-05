const BgPattern = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
  >
    {/* Graph-paper grid: 1px rules on a 48px module, drawn from the hairline
        token so the background stays inside the token system rather than
        hardcoding a colour. */}
    <div
      className="absolute inset-0"
      style={{
        backgroundImage:
          "linear-gradient(to right, var(--color-line-strong) 1px, transparent 1px), linear-gradient(to bottom, var(--color-line-strong) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    />
    {/* Vignette, kept light so the grid still reads away from the top */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_0%,transparent_55%,#08090a_100%)]" />
  </div>
);

export default BgPattern;
