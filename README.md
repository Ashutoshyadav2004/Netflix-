
# Netflix Clone

A responsive Netflix-inspired web application built with **React** on the frontend and **Node.js/Express** on the backend. This project showcases a movie streaming platform featuring user authentication, movie browsing, and more.

## Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Live Demo](#live-demo)
- [API Integration](#api-integration)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features
- 🎭 **User Authentication**: Secure user registration and login with JWT-based authentication.
- 🎬 **Browse Movies and TV Shows**: Access a library of popular movies and TV shows using the TMDB API.
- 📱 **Responsive Design**: Fully responsive UI for desktop, tablet, and mobile views.
- 🎥 **Watch Trailer Previews**: View trailers directly within the app.
- ⭐ **Favorites Management**: Add and remove titles from a personalized favorites list.
- ⚡ **Live Reload for Development**: Instant updates during development using Vite and Nodemon.

## Technologies
- **Frontend**: React, Vite, CSS Modules, Axios
- **Backend**: Node.js, Express, MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **API**: The Movie Database (TMDB) API
- **Development Tools**: Nodemon, Concurrently, Cross-Env for cross-platform support

## Getting Started

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (version 14 or higher)
- [MongoDB](https://www.mongodb.com/) (or a MongoDB cloud instance)
- [Git](https://git-scm.com/)

### Clone the Repository
1. Open your terminal and clone the repository:
   ```bash
   git clone https://github.com/SahilTwitZ/Netflix-Clone.git
   cd Netflix-
   ```

### Install Dependencies
2. Install the necessary packages for both frontend and backend:
   ```bash
   npm install
   npm install --prefix frontend
   ```

### Environment Variables
3. Create a `.env` file in the root of your project and add the following:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

### Running the Application
4. To start the application, run the following command:
   ```bash
   npm run start
   ```
   This command starts the backend server. Make sure the frontend is built and served.

5. If you're developing and want to watch changes live, you can run the following command to start both the frontend and backend:
   ```bash
   npm run dev
   ```

   - **Frontend**: `http://localhost:3000`
   - **Backend**: `http://localhost:5000`

### Production Build
6. For a production build of the frontend:
   ```bash
   npm run build --prefix frontend
   ```

## Usage
- Navigate to `http://localhost:3000` in your web browser to use the application.
- You can register, log in, and browse movies. Favorites can be managed from the main interface.

## Live Demo
You can view the live version of the application here: [Live Demo](https://your-live-demo-url.com) 🌐

## API Integration
The application integrates with the [TMDB API](https://www.themoviedb.org/documentation/api) to fetch movie data. Make sure to sign up and get your API key if needed for extended features.

## Folder Structure
```
Netflix-Clone/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
├── .gitignore
├── README.md
└── package.json
```

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some amazing feature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
