# Cyberbullying Comment Detection Project

## Overview
This project aims to develop a cyberbullying comment detection system integrated into a social media website. The system utilizes various technologies including Vite + React for the frontend, Express.js for the backend, MongoDB for the database, Clerk for authentication, Material UI for UI components, Axios for HTTP requests, dotenv for environment variables management, and a GPT API for bullying comment detection.

## Features
1. **User Authentication:** Users can log in using Google or password-based authentication provided by Clerk.
2. **Comment Posting:** Users can post comments on the social media website.
3. **Bullying Comment Detection:** Comments posted by users are analyzed by the backend to detect bullying content using the GPT API.
4. **Alert System:** If a comment is identified as bullying, an alert is displayed on the website and an email notification is sent to the user.
5. **Automatic Ban:** If a user posts more than 5 bullying comments, they are automatically banned from posting further comments.

## Technologies Used
- **Frontend:**
  - Vite
  - React
  - Material UI
  
- **Backend:**
  - Node.js
  - Express.js
  - MongoDB
  
- **Authentication:**
  - Clerk
  
- **HTTP Requests:**
  - Axios
  
- **Environment Variables Management:**
  - dotenv
  
- **Bullying Comment Detection:**
  - GPT API

## Setup Instructions
1. Clone the repository from GitHub.

    ```shell
    git clone https://github.com/tomsabu444/BullyBarrier-miniproject.git
    ```

2. Navigate to the project directory.
    ```shell
    cd BullyBarrier-miniproject
    ```

3. Install dependencies for both frontend and backend:
    ```bash
    npm install
    ```
4. Set up environment variables:
   - Copy the `.env.example` file and rename it to `.env`.
   - Add necessary environment variables such as database connection string, API keys, etc.
5. Start the backend server:
    ```bash
    npm run server
    ```
6. Start the frontend development server:
    ```bash
    npm run dev
    ```
7. Access the application through the provided URL.

## Contributors
- [Tom Sabu](https://github.com/tomsabu444)
- [Sam mathew](https://github.com/SamMathew007)
- [Jyothsnabey](https://github.com/23Jyo)
- [Roshan Jacob](https://github.com/RoshanJacob10)

<!-- ## License -->
<!-- This project is licensed under the [MIT License](link-to-license-file). -->
