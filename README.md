#Real_Time_Chat

**Real Time Chat with Express.js, MongoDB and JavaScript**

This project is a real-time chat application that uses Express.js as the backend, MongoDB as the database, and JavaScript for the frontend. It allows users to send messages in real time, which are stored in a database and displayed instantly on the user interface.

### Features

- **Sending and Receiving Messages:** Users can send messages by entering their name and the message in the user interface. Messages are sent to the server and instantly displayed in the chat window of all connected users.

- **Database Storage:** All sent messages are stored in a MongoDB database, allowing message history to be retrieved even after reloading the page.

- **New Message Notification:** When a new message is received, a visual notification is displayed on the user interface and an alert sound is played to alert the user about the arrival of a new message.

### Used technology

- **Express.js:** For the server backend and handle HTTP requests.
- **MongoDB:** As a database to store chat messages.
- **JavaScript (with jQuery):** For the frontend and user interactivity.
- **HTML/CSS:** For the structure and style of the user interface.

### Instructions for use

1. **Installation of Dependencies:**
   - Run `npm install` in the project directory to install all necessary dependencies.

2. **Database Configuration:**
   - Configure the MongoDB connection URL in the `server.mjs` file.

3. **Start the Server:**
   - Run `npm start` to start the server. The application will be available at `http://localhost:3000`.

4. **Use of the Application:**
   - Open the browser and visit `http://localhost:3000` to access the chat interface.
   - Enter your name and the message you want to send, then press the "Send" button. Messages will be displayed in real time for all connected users.

### Additional notes

- This project uses CORS to allow requests from any source, so it is important to consider security when deploying to a production environment.

- New message notification functionality may vary depending on the browser and its permission settings for displaying notifications.

Enjoy your real-time chat experience! If you have any questions or problems, feel free to consult the documentation or contact the developers. Happy chatting!