import React from 'react';
import './styles/animations.css';

const WelcomeMessage: React.FC = () => {
    return (
        <div className="welcome-message fade-in">
            <h1>Hey User Welcome, I am msGPT built by Mayank Sharma</h1>
        </div>
    );
};

export default WelcomeMessage;