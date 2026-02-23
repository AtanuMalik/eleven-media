import React, { useState, useEffect } from 'react';
import { BLACK, FONT } from '../../constants/theme';
import { NAV_LINKS } from '../../constants/data';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import { CTAButton } from '../common/CTAButton';
import { NavLink } from '../common/NavLink';
import { Logo } from '../common/Icons';

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const w = useWindowWidth();
    const mob = w < 768;

    useEffect(() => {
        const h = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", h);
        return () => window.removeEventListener("scroll", h);
    }, []);

    const elevated = scrolled || open;

    return (
        <nav
            style={{
                position: "fixed",
                top: 0, left: 0, right: 0,
                zIndex: 100,
                background: elevated ? "rgba(255,255,255,0.97)" : "transparent",
                backdropFilter: elevated ? "blur(14px)" : "none",
                boxShadow: elevated ? "0 1px 20px rgba(0,0,0,0.08)" : "none",
                transition: "background 0.3s, box-shadow 0.3s",
            }}
        >
            <div
                style={{
                    padding: mob ? "13px 20px" : "13px 40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Logo />

                {/* Desktop links */}
                {!mob && (
                    <div style={{ display: "flex", gap: 30 }}>
                        {NAV_LINKS.map(l => <NavLink key={l} label={l} />)}
                    </div>
                )}

                {/* Desktop CTA / Mobile burger */}
                {!mob ? (
                    <CTAButton small>Book a Call</CTAButton>
                ) : (
                    <button
                        onClick={() => setOpen(v => !v)}
                        style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", gap: 5, padding: 4 }}
                    >
                        {[0, 1, 2].map(i => (
                            <span
                                key={i}
                                style={{
                                    display: "block",
                                    width: 24, height: 2,
                                    background: BLACK,
                                    borderRadius: 2,
                                    transition: "transform 0.3s, opacity 0.3s",
                                    transform:
                                        open && i === 0 ? "rotate(45deg) translateY(7px)" :
                                            open && i === 2 ? "rotate(-45deg) translateY(-7px)" : "none",
                                    opacity: open && i === 1 ? 0 : 1,
                                }}
                            />
                        ))}
                    </button>
                )}
            </div>

            {/* Mobile dropdown */}
            {mob && open && (
                <div style={{ padding: "10px 20px 20px", borderTop: "1px solid #f0f0f0", display: "flex", flexDirection: "column" }}>
                    {NAV_LINKS.map(l => (
                        <a
                            key={l}
                            href={l === "Home" ? "#home" : `#${l.toLowerCase().replace(/\s+/g, '-')}`}
                            onClick={() => setOpen(false)}
                            style={{ fontSize: 15, fontWeight: 500, color: BLACK, textDecoration: "none", fontFamily: FONT, padding: "11px 0", borderBottom: "1px solid #f4f4f5" }}
                        >
                            {l}
                        </a>
                    ))}
                    <div style={{ marginTop: 14 }}><CTAButton>Book a Call</CTAButton></div>
                </div>
            )}
        </nav>
    );
}
