<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HashtagHive README</title>
</head>
<body>
    <h1>HashtagHive</h1>
    <p>HashtagHive is a social media website developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to post pictures, videos, and thoughts, interact with posts through likes, shares, and comments, and manage their profiles.</p>
    
<h2>Features</h2>
    <ul>
   <li><strong>Post Creation</strong>: Share your pictures, videos, and thoughts with others.</li>
        <li><strong>Interaction</strong>: Like, share, and comment on posts.</li>
        <li><strong>Nested Comments</strong>: Comment on comments to create threads.</li>
        <li><strong>Chat</strong>: Chat with your friends in real-time.</li>
        <li><strong>Profile Management</strong>: Update your profile picture, username, and other details.</li>
    </ul>
    
  <h2>Tech Stack</h2>
    <ul>
        <li><strong>Frontend</strong>: React.js</li>
        <li><strong>Backend</strong>: Node.js, Express.js</li>
        <li><strong>Database</strong>: MongoDB with Mongoose</li>
    </ul>
    
  <h2>Installation</h2>
    <ol>
        <li><strong>Clone the repository</strong>:
            <pre><code>git clone https://github.com/yourusername/hashtaghive.git
cd hashtaghive
            </code></pre>
        </li>
        <li><strong>Install dependencies</strong>:
            <pre><code>npm install
cd client
npm install
cd ..
            </code></pre>
        </li>
        <li><strong>Set up environment variables</strong>: Create a <code>.env</code> file in the root directory and add the following:
            <pre><code>MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
            </code></pre>
        </li>
        <li><strong>Run the application</strong>:
            <pre><code>npm run dev
            </code></pre>
        </li>
    </ol>
    
  <h2>Usage</h2>
    <p>Open your browser and go to <code>http://localhost:3000</code> to view the application.</p>
    <p>Register a new account or log in with your existing account.</p>
    <p>Start posting, interacting with posts, chatting with friends, and managing your profile.</p>
    
   <h2>Contributing</h2>
    <p>We welcome contributions! If you have any ideas or suggestions, feel free to open an issue or submit a pull request.</p>
    
  <h2>License</h2>
    <p>This project is licensed under the MIT License.</p>
</body>
</html>
