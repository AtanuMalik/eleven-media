import React from "react";
import { BLACK, FONT } from "../../constants/theme";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { Reveal } from "../../hooks/useReveal.jsx";
import { CTAButton } from "../common/CTAButton";

export function Hero() {
  const w = useWindowWidth();
  const mob = w < 768;
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        background:
          "radial-gradient(ellipse 80% 60% at 50% 100%, #d9f99d 0%, #f7fee7 40%, #fff 100%)",
        textAlign: "center",
        padding: mob ? "120px 22px 80px" : "140px 24px 100px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Blobs */}
      <div
        style={{
          position: "absolute",
          top: "32%",
          left: mob ? "-4%" : "9%",
          width: mob ? 180 : 300,
          height: mob ? 180 : 300,
          borderRadius: "50%",
          background: "radial-gradient(circle,#bef264,transparent 70%)",
          opacity: 0.28,
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "18%",
          right: mob ? "-4%" : "7%",
          width: mob ? 150 : 240,
          height: mob ? 150 : 240,
          borderRadius: "50%",
          background: "radial-gradient(circle,#a3e635,transparent 70%)",
          opacity: 0.2,
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      {/* Avatar stack */}
      <Reveal delay={0}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            marginBottom: 20,
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex" }}>
            {["?img=1", "?img=2", "?img=3", "?img=4"].map((q, i) => (
              <img
                key={i}
                src={`https://i.pravatar.cc/36${q}`}
                alt=""
                style={{
                  width: 33,
                  height: 33,
                  borderRadius: "50%",
                  border: "2.5px solid #fff",
                  marginLeft: i === 0 ? 0 : -9,
                  objectFit: "cover",
                }}
              />
            ))}
          </div>
          <div style={{ display: "flex", gap: 2 }}>
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="#facc15"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
              </svg>
            ))}
          </div>
          <span style={{ fontSize: 12, color: "#6b7280", fontFamily: FONT }}>
            50+ happy customers
          </span>
        </div>
      </Reveal>

      <Reveal delay={110}>
        <h1
          style={{
            fontSize: mob ? "clamp(30px,9vw,44px)" : "clamp(40px,5.5vw,66px)",
            fontWeight: 800,
            fontFamily: FONT,
            color: BLACK,
            lineHeight: 1.1,
            maxWidth: mob ? "100%" : 840,
            marginBottom: 18,
            letterSpacing: "-0.025em",
          }}
        >
          Helping Entrepreneurs Scale Their Personal Brand
        </h1>
      </Reveal>

      <Reveal delay={210}>
        <p
          style={{
            fontSize: mob ? 14 : 15,
            color: "#6b7280",
            maxWidth: 600,
            lineHeight: 1.6,
            marginBottom: 34,
            fontFamily: FONT,
            padding: mob ? "0 4px" : 0,
          }}
        >
          We build the content infrastructure behind the world’s most influential
          personal brands. From high-level strategy to premium post-production,
          we handle the entire ecosystem so you can focus on your business.
        </p>
      </Reveal>

      <Reveal delay={300}>
        <CTAButton>Book a Discovery Call</CTAButton>
      </Reveal>
    </section>
  );
}
