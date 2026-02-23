import React, { useState } from 'react';
import { BLACK, FONT, LIME_DARK } from '../../constants/theme';

export function CTAButton({ children, small = false, href = "https://cal.com/atanu-malik/30min" }) {
    const [hov, setHov] = useState(false);
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            style={{
                background: hov ? LIME_DARK : BLACK,
                color: "#fff",
                padding: small ? "10px 22px" : "14px 34px",
                borderRadius: 9,
                fontSize: small ? 13 : 15,
                fontWeight: 700,
                textDecoration: "none",
                fontFamily: FONT,
                display: "inline-block",
                transition: "background 0.2s, transform 0.2s, box-shadow 0.2s",
                transform: hov ? "translateY(-2px)" : "none",
                boxShadow: hov
                    ? "0 8px 28px rgba(101,163,13,0.28)"
                    : "0 4px 18px rgba(0,0,0,0.13)",
                letterSpacing: "-0.01em",
            }}
        >
            {children}
        </a>
    );
}
