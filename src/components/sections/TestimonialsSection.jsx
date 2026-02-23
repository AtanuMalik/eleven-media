import React, { useState } from "react";
import { BLACK, FONT, LIME } from "../../constants/theme";
import { TESTIMONIALS } from "../../constants/data";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { Reveal } from "../../hooks/useReveal.jsx";
import { Highlight } from "../common/Highlight";

function TestimonialCard({ text, name, role, color, image }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: "#fff",
        borderRadius: 20,
        padding: "32px",
        border: "1px solid #f1f5f9",
        boxShadow: hov
          ? "0 20px 40px -12px rgba(0,0,0,0.1)"
          : "0 4px 6px -1px rgba(0,0,0,0.02), 0 2px 4px -1px rgba(0,0,0,0.01)",
        transform: hov ? "translateY(-6px)" : "none",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 24,
          right: 32,
          opacity: 0.15,
          color: color,
        }}
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M10 11H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6c0 2.667-1.333 4.333-4 5" />
          <path d="M19 11h-4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6c0 2.667-1.333 4.333-4 5" />
        </svg>
      </div>

      <p
        style={{
          fontSize: "15px",
          color: "#4b5563",
          lineHeight: 1.8,
          marginBottom: 16,
          fontFamily: FONT,
          position: "relative",
          zIndex: 1,
          fontStyle: "italic",
        }}
      >
        "{text}"
      </p>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          marginTop: "auto",
        }}
      >
        <div
          style={{
            width: 54,
            height: 54,
            borderRadius: "50%",
            background: color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: color === LIME ? BLACK : "#fff",
            fontWeight: 800,
            fontSize: 20,
            fontFamily: FONT,
            flexShrink: 0,
            overflow: "hidden",
            border: `3px solid ${color}33`,
            transition: "all 0.3s ease",
            transform: hov ? "scale(1.05)" : "scale(1)",
          }}
        >
          {image ? (
            <img
              src={image}
              alt={name}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            name[0]
          )}
        </div>
        <div>
          <div
            style={{
              fontWeight: 750,
              fontSize: 15,
              color: BLACK,
              fontFamily: FONT,
              letterSpacing: "-0.01em",
            }}
          >
            {name}
          </div>
          <div
            style={{
              fontSize: 12,
              color: "#6b7280",
              fontFamily: FONT,
              marginTop: 2,
            }}
          >
            {role}
          </div>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const w = useWindowWidth();
  const mob = w < 768;
  const isTablet = w >= 768 && w < 1024;
  const cols = mob ? "1fr" : isTablet ? "repeat(2,1fr)" : "repeat(3,1fr)";
  return (
    <section
      id="testimonials"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 100%, #d9f99d 0%, #f7fee7 40%, #fff 100%)",
        padding: mob ? "56px 20px" : "80px 40px",
      }}
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
          Client <Highlight>Testimonials</Highlight>
        </h2>
      </Reveal>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: cols,
          gap: mob ? 12 : 14,
          maxWidth: 1000,
          margin: "0 auto",
        }}
      >
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={i} delay={i * 55} direction="up">
            <TestimonialCard {...t} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
