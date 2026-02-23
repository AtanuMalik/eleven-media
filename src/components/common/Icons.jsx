import React from "react";
import { BLACK, LIME } from "../../constants/theme";
import LogoSvg from "../../../EMLogo.svg";

export function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      style={{ flexShrink: 0 }}
    >
      <circle cx="12" cy="12" r="10" fill={LIME} />
      <path
        d="M7 12l3.5 3.5L17 8"
        stroke={BLACK}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SocialIcon({ children, onHoverChange, href = "#" }) {
  const [hov, setHov] = React.useState(false);
  const handleHover = (state) => {
    setHov(state);
    if (onHoverChange) onHoverChange(state);
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
      style={{
        color: hov ? "#65a30d" : "#3f3f46",
        transition: "color 0.2s",
        display: "flex",
      }}
    >
      {children}
    </a>
  );
}

export function Logo({ width = "32", height = "32" }) {
  return (
    <a href="/" style={{ cursor: "pointer", display: "block" }}>
      <img
        src={LogoSvg}
        alt="Logo"
        width={width}
        height={height}
        style={{ display: "block" }}
      />
    </a>
  );
}
