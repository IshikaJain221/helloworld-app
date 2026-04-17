const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html>
  <head>
    <title>Ishika | Personal Hub</title>

    <style>
      body {
        margin: 0;
        font-family: 'Segoe UI';
        background: #0f172a;
        color: white;
        text-align: center;
      }

      h1 {
        margin-top: 40px;
        font-size: 40px;
      }

      .container {
        margin-top: 40px;
      }

      .btn {
        display: inline-block;
        margin: 15px;
        padding: 15px 25px;
        border-radius: 12px;
        background: #1e293b;
        color: white;
        cursor: pointer;
        transition: 0.3s;
        border: 1px solid #334155;
      }

      .btn:hover {
        background: #38bdf8;
        color: black;
        transform: scale(1.05);
      }

      .box {
        margin: 30px auto;
        padding: 20px;
        width: 60%;
        background: #1e293b;
        border-radius: 15px;
        display: none;
      }

      input {
        padding: 10px;
        border-radius: 8px;
        border: none;
        margin-top: 10px;
      }

      .fun {
        margin-top: 20px;
        font-size: 18px;
      }

    </style>
  </head>

  <body>

    <h1>👩‍💻 Ishika's Space</h1>
    <p>Click around. Explore. This is not just a page.</p>

    <div class="container">

      <div class="btn" onclick="showBox('about')">About Me</div>
      <div class="btn" onclick="showBox('skills')">Skills</div>
      <div class="btn" onclick="showBox('fun')">Fun Mode</div>
      <div class="btn" onclick="showBox('contact')">Contact</div>
      <div class="btn" onclick="goToPortfolio()">Want to know about me?</div>

    </div>

    <div id="about" class="box">
      <h2>About Me</h2>
      <p>Engineering student who loves solving problems and building cool stuff.</p>
    </div>

    <div id="skills" class="box">
      <h2>Skills</h2>
      <p>Java | JavaScript | DSA | Web Development</p>
    </div>

    <div id="fun" class="box">
      <h2>Fun Mode 🎯</h2>
      <p>Type something:</p>
      <input id="inputText" placeholder="Say something..." />
      <div class="fun" id="output"></div>
      <button onclick="showText()">Show</button>
    </div>

    <div id="contact" class="box">
      <h2>Contact</h2>
      <p>Email: ishika@example.com</p>
    </div>

    <script>
      function showBox(id) {
        let boxes = document.querySelectorAll('.box');
        boxes.forEach(box => box.style.display = 'none');
        document.getElementById(id).style.display = 'block';
      }

      function goToPortfolio() {
        window.open('https://ishikajain221.github.io/Portfolio-1/', '_blank');
      }

      function showText() {
        let text = document.getElementById('inputText').value;
        document.getElementById('output').innerText = "You typed: " + text;
      }
    </script>

  </body>
  </html>
  `);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});