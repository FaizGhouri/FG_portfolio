import React, { useEffect, useState } from 'react';
import './Loader.css';

const Loader = ({ onFinish }) => {
    const [progress, setProgress] = useState(0);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setFadeOut(true);
                        setTimeout(onFinish, 700);
                    }, 300);
                    return 100;
                }
                return prev + Math.random() * 12 + 3;
            });
        }, 80);
        return () => clearInterval(interval);
    }, [onFinish]);

    return (
        <div className={`loader-overlay ${fadeOut ? 'loader-fade-out' : ''}`}>
            {/* Background orbs */}
            <div className="loader-orb loader-orb-1" />
            <div className="loader-orb loader-orb-2" />

            {/* Spinning rings */}
            <div className="loader-ring loader-ring-1" />
            <div className="loader-ring loader-ring-2" />
            <div className="loader-ring loader-ring-3" />

            {/* Center content */}
            <div className="loader-center">
                {/* Initials / Logo pulse */}
                <div className="loader-logo">
                    <span>FG</span>
                </div>

                <div className="loader-name">FAIZ GHOURI</div>
                <div className="loader-role">Front-end Developer</div>

                {/* Progress bar */}
                <div className="loader-bar-track">
                    <div
                        className="loader-bar-fill"
                        style={{ width: `${Math.min(progress, 100)}%` }}
                    />
                </div>
                <div className="loader-percent">{Math.min(Math.floor(progress), 100)}%</div>
            </div>
        </div>
    );
};

export default Loader;
