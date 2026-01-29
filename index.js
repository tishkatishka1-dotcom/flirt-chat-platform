<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <title>Private Chat</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <style>
    * {
      box-sizing: border-box;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }

    body {
      margin: 0;
      height: 100vh;
      background: url("999.png") no-repeat center center / cover;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #e6e6e6;
    }

    /* SVG фон */
    .bg {
      position: fixed;
      inset: 0;
      z-index: 0;
    }

    /* Карточка */
    .login-card {
      position: relative;
      z-index: 1;
      width: 340px;
      padding: 32px;
      border-radius: 16px;
      background: rgba(10, 12, 28, 0.92);
      border: 1px solid transparent;
      border-image: linear-gradient(135deg, #4b6cff, #9a6bff) 1;
      backdrop-filter: blur(6px);
    }

    .login-card h1 {
      margin: 0 0 24px;
      text-align: center;
      font-size: 22px;
      font-weight: 500;
    }

    .login-card input {
      width: 100%;
      padding: 13px;
      margin-bottom: 14px;
      border-radius: 9px;
      border: 1px solid #2d3366;
      background: #0f1228;
      color: #fff;
      font-size: 14px;
      outline: none;
    }

    .login-card button {
      width: 100%;
      padding: 13px;
      border-radius: 9px;
      border: none;
      background: linear-gradient(135deg, #4b6cff, #9a6bff);
      color: #fff;
      font-size: 15px;
      cursor: pointer;
    }
  </style>
</head>

<body>

  <!-- Волнообразные линии -->
  <svg class="bg" viewBox="0 0 1440 800" preserveAspectRatio="none">
    <defs>
      <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#4b6cff" stop-opacity="0.35"/>
        <stop offset="50%" stop-color="#7b5bff" stop-opacity="0.35"/>
        <stop offset="100%" stop-color="#b15cff" stop-opacity="0.35"/>
      </linearGradient>
    </defs>

    <path d="M0 300 C200 200 400 400 600 320 800 250 1000 360 1200 300 1360 260 1440 320"
          fill="none" stroke="url(#g)" stroke-width="2"/>
    <path d="M0 360 C220 280 420 440 640 360 860 300 1080 420 1280 360 1400 320 1440 360"
          fill="none" stroke="url(#g)" stroke-width="2" opacity="0.5"/>
    <path d="M0 420 C240 360 460 500 680 420 900 360 1120 500 1320 420 1420 380 1440 420"
          fill="none" stroke="url(#g)" stroke-width="2" opacity="0.35"/>
  </svg>

  <!-- Карточка -->
  <div class="login-card">
    <h1>Приватный чат</h1>
    <input type="text" placeholder="Вход">
    <input type="password" placeholder="Пароль">
    <button>Вход</button>
  </div>

</body>
</html>
