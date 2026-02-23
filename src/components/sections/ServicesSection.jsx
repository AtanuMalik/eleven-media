import React, { useState } from "react";
import { BLACK, FONT, LIME } from "../../constants/theme";
import { STARTER, GROWTH } from "../../constants/data";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { Reveal } from "../../hooks/useReveal.jsx";
import { Highlight } from "../common/Highlight";
import { CheckIcon } from "../common/Icons";

function ServiceCard({
  title,
  features,
  highlighted = false,
  direction = "left",
}) {
  const [hov, setHov] = useState(false);
  return (
    <Reveal direction={direction}>
      <div
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          background: BLACK,
          borderRadius: 16,
          padding: "30px 28px",
          border: `2px solid ${highlighted ? LIME : "transparent"}`,
          transform: hov ? "translateY(-5px)" : "none",
          transition: "transform 0.2s",
          height: "100%",
        }}
      >
        <h3
          style={{
            fontSize: 22,
            fontWeight: 800,
            fontFamily: FONT,
            color: "#fff",
            marginBottom: 20,
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </h3>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          {features.map((f, i) => (
            <li
              key={i}
              style={{ display: "flex", alignItems: "center", gap: 10 }}
            >
              <CheckIcon />
              <span
                style={{ fontSize: 14, fontFamily: FONT, color: "#d4d4d8" }}
              >
                {f}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export function ServicesSection() {
  const w = useWindowWidth();
  const mob = w < 768;
  return (
    <section
      style={{ background: "#fff", padding: mob ? "56px 20px" : "80px 40px" }}
    >
      <Reveal>
        <h2
          style={{
            fontSize: mob ? 23 : 31,
            fontWeight: 700,
            color: BLACK,
            fontFamily: FONT,
            textAlign: "center",
            marginBottom: mob ? 30 : 46,
            letterSpacing: "-0.02em",
          }}
        >
          Our <Highlight>Services</Highlight>
        </h2>
      </Reveal>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: mob ? "1fr" : "1fr 1fr",
          gap: mob ? 14 : 20,
          maxWidth: 720,
          margin: "0 auto",
        }}
      >
        <ServiceCard
          title="Starter"
          features={STARTER}
          direction={mob ? "up" : "left"}
        />
        <ServiceCard
          title="Growth"
          features={GROWTH}
          direction={mob ? "up" : "right"}
          highlighted
        />
      </div>
    </section>
  );
}
