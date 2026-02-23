import React, { useState } from 'react';
import { BLACK, FONT, LIME_DARK } from '../../constants/theme';

export function NavLink({ label }) {
    const [hov, setHov] = useState(false);

    const getTargetId = (lbl) => {
        if (lbl === "Home") return "#home";
        return `#${lbl.toLowerCase().replace(/\s+/g, '-')}`;
    };

    return (
        <a
            href={getTargetId(label)}
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            style={{
                fontSize: 14,
                fontWeight: 500,
                color: hov ? LIME_DARK : BLACK,
                textDecoration: "none",
                fontFamily: FONT,
                transition: "color 0.2s",
            }}
        >
            {label}
        </a>
    );
}
