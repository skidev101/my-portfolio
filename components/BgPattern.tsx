const BgPattern = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
  >
    {/* Graph grid on a 48px module, drawn in the quiet hairline token. Kept
        light on purpose: it should register as texture, not as a table. Swap
        to --color-line-strong if it needs to read harder. */}
    <div
      className="absolute inset-0"
      style={{
        backgroundImage:
          "linear-gradient(to right, var(--color-line) 1px, transparent 1px), linear-gradient(to bottom, var(--color-line) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    />

    {/* The measure — hairlines on the container's outer edges, so the column
        the text sits in stays legible wherever the page is otherwise empty.
        One step stronger than the grid so the two don't read as one mesh. */}
    <div className="absolute inset-y-0 left-1/2 w-full max-w-[680px] -translate-x-1/2 border-x border-line-strong" />
  </div>
);

export default BgPattern;
