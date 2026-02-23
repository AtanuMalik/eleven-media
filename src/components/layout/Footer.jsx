import React from "react";
import { BLACK, FONT, LIME_DARK } from "../../constants/theme";
import { NAV_LINKS } from "../../constants/data";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { Logo, SocialIcon } from "../common/Icons";

export function Footer() {
  const w = useWindowWidth();
  const mob = w < 768;
  return (
    <footer
      style={{
        background: "#fff",
        borderTop: "1px solid #f0fdf4",
        padding: mob ? "22px 20px 18px" : "26px 40px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: mob ? "flex-start" : "center",
          justifyContent: "space-between",
          maxWidth: 1200,
          margin: "0 auto",
          flexDirection: mob ? "column" : "row",
          gap: mob ? 16 : 0,
        }}
      >
        <Logo width="27" height="27" />
        <div style={{ display: "flex", gap: mob ? 14 : 22, flexWrap: "wrap" }}>
          {NAV_LINKS.map((l) => (
            <a
              key={l}
              href={l === "Home" ? "#home" : `#${l.toLowerCase().replace(/\s+/g, '-')}`}
              style={{
                fontSize: 13,
                fontWeight: 500,
                color: "#3f3f46",
                textDecoration: "none",
                fontFamily: FONT,
              }}
            >
              {l}
            </a>
          ))}
        </div>
        <div style={{ display: "flex", gap: 14 }}>
          <SocialIcon href="https://www.instagram.com/elevenmedia.content">
            <svg
              width="17"
              height="17"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle
                cx="17.5"
                cy="6.5"
                r="1.2"
                fill="currentColor"
                stroke="none"
              />
            </svg>
          </SocialIcon>
          <SocialIcon href="https://www.linkedin.com/company/elevenmediaofficial/">
            <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </SocialIcon>
          <SocialIcon href="https://x.com/ElevenMedia_IN">
            <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </SocialIcon>
        </div>
      </div>
      <p
        style={{
          textAlign: "center",
          fontSize: 12,
          color: "#a1a1aa",
          marginTop: 18,
          fontFamily: FONT,
        }}
      >
        © 2025 Eleven Media. All rights reserved.
      </p>
    </footer>
  );
}
