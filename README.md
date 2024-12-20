# Random User Profile Card

A React application that displays a beautifully designed profile card using data from the Random User API. Built with React, TypeScript, and Tailwind CSS.

![Profile Card Preview](https://interview-india.s3.ap-south-1.amazonaws.com/Assignments/Display_Profile.jpg)

## Features

- 🎨 Modern and responsive UI design
- 🔄 Fetches random user data from RandomUser API
- 💅 Styled with Tailwind CSS
- 📱 Fully responsive layout
- ⚡ Built with Vite for optimal performance
- 🎭 TypeScript for type safety
- 🖼️ Beautiful gradient backgrounds and card design
- 🔍 Loading and error states handled gracefully

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide React (for icons)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/        # React components
│   └── ProfileCard.tsx
├── App.tsx           # Main application component
├── main.tsx         # Application entry point
└── index.css        # Global styles and Tailwind imports
```

## API

The application uses the [Random User API](https://randomuser.me/) to fetch user data:
- Endpoint: `https://randomuser.me/api/?page=1&results=1&seed=abc`
- The seed parameter ensures consistent data across refreshes

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Live Demo

Visit the live demo: [Random User Profile Card](https://splendorous-strudel-b7d8b4.netlify.app)