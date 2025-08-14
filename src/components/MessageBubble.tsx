import React from 'react';
import './animations.css';
import './transitions.css';
import './hover.css';

interface MessageBubbleProps {
    content: string;
    sender: 'user' | 'bot';
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ content, sender }) => {
    return (
        <div className={`message-bubble ${sender}`}>
            <p>{content}</p>
        </div>
    );
};

export default MessageBubble;