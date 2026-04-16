const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html>
  <head>
    <title>My Cool Server</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Arial, sans-serif;
      }

      body {
        height: 100vh;
        background: linear-gradient(135deg, #667eea, #764ba2);
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
      }

      .card {
        background: rgba(255, 255, 255, 0.1);
        padding: 40px;
        border-radius: 20px;
        text-align: center;
        backdrop-filter: blur(10px);
        box-shadow: 0 8px 32px rgba(0,0,0,0.2);
        transition: 0.3s;
      }

      .card:hover {
        transform: scale(1.05);
      }

      h1 {
        font-size: 3rem;
        margin-bottom: 10px;
      }

      p {
        font-size: 1.2rem;
        opacity: 0.8;
      }

      button {
        margin-top: 20px;
        padding: 10px 20px;
        border: none;
        border-radius: 10px;
        background: white;
        color: #764ba2;
        font-weight: bold;
        cursor: pointer;
        transition: 0.3s;
      }

      button:hover {
        background: #ddd;
      }
    </style>
  </head>
  <body>

    <div class="card">
      <h1>Hello Sir</h1>
      <p>Welcome to my Express server</p>
      <button onclick="changeText()">Click Me</button>
    </div>

    <script>
      function changeText() {
        document.querySelector("p").innerText = "You just interacted with my backend-powered U";
      }
    </script>

  </body>
  </html>
  `);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});