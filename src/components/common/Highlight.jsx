import React from 'react';
import { BLACK, LIME } from '../../constants/theme';

export function Highlight({ children }) {
    return (
        <span style={{ background: LIME, padding: "2px 10px", borderRadius: 5, color: BLACK }}>
            {children}
        </span>
    );
}
