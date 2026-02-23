import React from "react";
import { BLACK, FONT } from "../../constants/theme";
import { BRANDS_ROW1, BRANDS_ROW2 } from "../../constants/data";
import { Reveal } from "../../hooks/useReveal.jsx";
import { Highlight } from "../common/Highlight";

function BrandTile({ img }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        height: 40,
        width: "auto",
        margin: "0 20px",
      }}
    >
      <img
        src={img}
        alt="brand logo"
        style={{ height: "100%", width: "auto", objectFit: "contain", opacity: 0.8 }}
      />
    </div>
  );
}

function MarqueeRow({ brands, duration = 32, reverse = false }) {
  const doubled = [...brands, ...brands];
  return (
    <div style={{ overflow: "hidden", width: "100%" }}>
      <style>{`
        @keyframes marquee-fwd { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        @keyframes marquee-rev { from { transform: translateX(-50%) } to { transform: translateX(0) } }
      `}</style>
      <div
        style={{
          display: "flex",
          gap: 24,
          width: "max-content",
          animation: `${reverse ? "marquee-rev" : "marquee-fwd"} ${duration}s linear infinite`,
          willChange: "transform",
        }}
      >
        {doubled.map((b, i) => (
          <BrandTile key={i} {...b} />
        ))}
      </div>
    </div>
  );
}

export function TrustedSection() {
  return (
    <section
      style={{
        background: BLACK,
        padding: "72px 0 80px",
        textAlign: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Reveal>
        <h2
          style={{
            fontSize: "clamp(23px, 3vw, 31px)",
            fontWeight: 700,
            color: "#fff",
            fontFamily: FONT,
            letterSpacing: "-0.02em",
            marginBottom: 48,
          }}
        >
          Trusted by Industry <Highlight>Leaders</Highlight>
        </h2>
      </Reveal>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 28,
          position: "relative",
        }}
      >
        {/* Edge fade masks */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 120,
            height: "100%",
            background: "linear-gradient(to right, #18181b, transparent)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 120,
            height: "100%",
            background: "linear-gradient(to left, #18181b, transparent)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        <MarqueeRow brands={[...BRANDS_ROW1, ...BRANDS_ROW2]} duration={50} />
      </div>
    </section>
  );
}
