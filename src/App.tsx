import React from 'react';
import ChatWindow from './components/ChatWindow';
import './styles/animations.css';
import './styles/transitions.css';
import './styles/hover.css';

const App: React.FC = () => {
    return (
        <div className="app">
            <ChatWindow />
        </div>
    );
};

export default App;