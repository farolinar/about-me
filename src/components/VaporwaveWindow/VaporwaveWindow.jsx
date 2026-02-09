
import React from 'react';
import './VaporwaveWindow.css';

/**
 * A reusable container component that renders content inside a 
 * retro-futuristic vaporwave pseudo-window frame.
 * 
 * @param {string} title - The title displayed in the window header bar
 * @param {React.ReactNode} children - The content of the window
 * @param {string} className - Additional classes to apply to the generic container
 * @param {React.Ref} ref - Forwarded ref to the outer container
 */
const VaporwaveWindow = React.forwardRef(({ title, children, className, ...props }, ref) => {
    return (
        <div 
            className={`vaporwave-window ${className || ''}`} 
            ref={ref} 
            {...props}
        >
            <div className="window-header">
                <div className="window-title">{title}</div>
                <div className="window-controls">
                    <div className="control minimize"></div>
                    <div className="control maximize"></div>
                    <div className="control close"></div>
                </div>
            </div>
            <div className="window-content">
                {children}
            </div>
        </div>
    );
});

VaporwaveWindow.displayName = 'VaporwaveWindow';

export default VaporwaveWindow;
