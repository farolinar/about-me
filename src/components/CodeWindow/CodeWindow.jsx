import React from 'react';
import './CodeWindow.css';

const CodeWindow = ({ title = 'Untitled', children, className = '' }) => {
  return (
    <div className={`code-window ${className}`}>
      <div className="window-header">
        <div className="window-controls">
          <div className="control red"></div>
          <div className="control yellow"></div>
          <div className="control green"></div>
        </div>
        <div className="window-title">{title}</div>
      </div>
      <div className="window-content">
        {children}
      </div>
    </div>
  );
};

export default CodeWindow;
