const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html>
  <head>
    <title>My Page</title>
    <style>
      body {
        margin: 0;
        font-family: 'Verdana';
        text-align: center;
        transition: 0.5s;
        background-color: #f5f5f5;
      }

      h1 {
        margin-top: 100px;
        font-size: 40px;
      }

      .box {
        margin: 30px auto;
        padding: 20px;
        width: 300px;
        border-radius: 15px;
        background: white;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      }

      button {
        margin: 10px;
        padding: 10px 15px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-size: 16px;
      }

      .happy { background: #ffcc00; }
      .sad { background: #87ceeb; }
      .angry { background: #ff6b6b; }

      .emoji {
        font-size: 50px;
        margin: 10px;
      }
    </style>
  </head>
  <body>

    <h1 id="title">How are you feeling today?</h1>

    <div class="box">
      <div id="emoji" class="emoji">🙂</div>

      <button class="happy" onclick="setMood('happy')">Happy</button>
      <button class="sad" onclick="setMood('sad')">Sad</button>
      <button class="angry" onclick="setMood('angry')">Angry</button>
    </div>

    <script>
      function setMood(mood) {
        let title = document.getElementById("title");
        let emoji = document.getElementById("emoji");

        if (mood === 'happy') {
          document.body.style.background = '#fff3b0';
          title.innerText = "Nice! Keep smiling 😄";
          emoji.innerText = "😄";
        }

        if (mood === 'sad') {
          document.body.style.background = '#d6ecff';
          title.innerText = "It’s okay. Take it easy 💙";
          emoji.innerText = "😢";
        }

        if (mood === 'angry') {
          document.body.style.background = '#ffd6d6';
          title.innerText = "Relax… breathe 😤";
          emoji.innerText = "😠";
        }
      }
    </script>

  </body>
  </html>
  `);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});