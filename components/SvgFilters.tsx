// components/SvgFilters.tsx
export default function SvgFilters() {
  return (
    <svg style={{ display: "none" }}>
      <filter
        id="glass-distortion"
        x="0%"
        y="0%"
        width="100%"
        height="100%"
        filterUnits="objectBoundingBox"
      >
        <feTurbulence
          type="fractalNoise"
          baseFrequency=".05 .05"
          numOctaves="1"
          seed="10"
          result="turbulence"
        ></feTurbulence>
        <feComponentTransfer in="turbulence" result="mapped">
          <feFuncR
            type="gamma"
            amplitude="1"
            exponent="10"
            offset="0.5"
          ></feFuncR>
          <feFuncG type="gamma" amplitude="0" exponent="1" offset="0"></feFuncG>
          <feFuncB
            type="gamma"
            amplitude="0"
            exponent="1"
            offset="0.5"
          ></feFuncB>
        </feComponentTransfer>
        <feComposite
          in="specLight"
          operator="arithmetic"
          k1="0"
          k2="1"
          k3="1"
          k4="0"
          result="litImage"
        ></feComposite>
        <feDisplacementMap
          in="SourceGraphic"
          in2="softMap"
          scale="30"
          xChannelSelector="R"
          yChannelSelector="G"
        ></feDisplacementMap>
      </filter>
    </svg>
  );
}
