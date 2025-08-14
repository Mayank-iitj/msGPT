# msGPT Chat Application

Welcome to the msGPT chat application! This project is designed to provide a seamless chat experience using the specified API. Below you will find information on how to set up and use the application, as well as an overview of its features.

## Features

- **Welcome Message**: Upon opening the chat window, users are greeted with a friendly welcome message.
- **Smooth Animations**: The application includes various animations to enhance user experience.
- **Transitions and Effects**: Elements within the chat interface transition smoothly, providing a polished look and feel.
- **Hover Enhancements**: Interactive elements respond to user actions with hover effects, improving engagement.

## Project Structure

The project is organized as follows:

```
msGPT
├── src
│   ├── api
│   │   └── index.ts          # Handles API interactions
│   ├── components
│   │   ├── ChatWindow.tsx    # Main chat interface
│   │   ├── MessageBubble.tsx  # Displays individual messages
│   │   ├── WelcomeMessage.tsx # Shows the welcome message
│   │   └── Animations.tsx     # Reusable animation functions
│   ├── styles
│   │   ├── animations.css     # CSS for animations
│   │   ├── transitions.css     # CSS for transitions
│   │   └── hover.css          # CSS for hover effects
│   ├── App.tsx                # Main entry point of the application
│   └── types
│       └── index.ts           # TypeScript interfaces and types
├── package.json                # npm configuration
├── tsconfig.json               # TypeScript configuration
└── README.md                   # Project documentation
```

## Setup Instructions

1. **Clone the Repository**: 
   ```bash
   git clone <repository-url>
   cd msGPT
   ```

2. **Install Dependencies**: 
   ```bash
   npm install
   ```

3. **Run the Application**: 
   ```bash
   npm start
   ```

4. **Open in Browser**: Navigate to `http://localhost:3000` to view the application.

## Usage

Once the application is running, you can start chatting with msGPT. The chat interface will display a welcome message, and you can send messages to interact with the bot.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

---

Thank you for using msGPT! We hope you enjoy the chat experience.