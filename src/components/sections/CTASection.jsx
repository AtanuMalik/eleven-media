import React from "react";
import { BLACK, FONT } from "../../constants/theme";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { Reveal } from "../../hooks/useReveal.jsx";
import { CTAButton } from "../common/CTAButton";

export function CTASection() {
  const w = useWindowWidth();
  const mob = w < 768;
  return (
    <section
      id="contact"
      style={{
        background:
          "radial-gradient(ellipse 80% 80% at 50% 100%, #d9f99d 0%, #f0fdf4 50%, #fff 100%)",
        padding: mob ? "80px 24px 90px" : "110px 40px 120px",
        textAlign: "center",
      }}
    >
      <Reveal>
        <h2
          style={{
            fontSize: mob ? "clamp(26px,7vw,38px)" : "clamp(30px,4vw,52px)",
            fontWeight: 800,
            color: BLACK,
            fontFamily: FONT,
            lineHeight: 1.12,
            letterSpacing: "-0.03em",
            maxWidth: 580,
            margin: "0 auto 34px",
          }}
        >
          Ready to Scale Your Brand to New Heights?
        </h2>
      </Reveal>
      <Reveal delay={140}>
        <CTAButton>Book a Discovery Call</CTAButton>
      </Reveal>
    </section>
  );
}
