import React, { useState } from 'react';
import MessageBubble from './MessageBubble';
import WelcomeMessage from './WelcomeMessage';
import './styles/animations.css';
import './styles/transitions.css';
import './styles/hover.css';

const ChatWindow: React.FC = () => {
    const [messages, setMessages] = useState<string[]>([]);
    const [isWelcomeVisible, setWelcomeVisible] = useState(true);

    const handleSendMessage = (message: string) => {
        setMessages([...messages, message]);
    };

    const handleCloseWelcome = () => {
        setWelcomeVisible(false);
    };

    return (
        <div className="chat-window">
            {isWelcomeVisible && <WelcomeMessage onClose={handleCloseWelcome} />}
            <div className="messages">
                {messages.map((msg, index) => (
                    <MessageBubble key={index} content={msg} sender="User" />
                ))}
            </div>
            <input
                type="text"
                placeholder="Type a message..."
                onKeyDown={(e) => {
                    if (e.key === 'Enter' && e.currentTarget.value) {
                        handleSendMessage(e.currentTarget.value);
                        e.currentTarget.value = '';
                    }
                }}
            />
        </div>
    );
};

export default ChatWindow;