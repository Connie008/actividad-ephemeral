const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Ephemeral Environment</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background: #f4f6f8;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
          }

          .card {
            background: white;
            padding: 40px;
            border-radius: 15px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.1);
            text-align: center;
            max-width: 600px;
          }

          h1 {
            margin-bottom: 20px;
          }

          p {
            font-size: 18px;
            line-height: 1.6;
          }
        </style>
      </head>

      <body>
        <div class="card">
          <h1>🚀 Ambiente efímero funcionando</h1>

          <p>
            Actividad 2.3 – Ephemeral Environments
          </p>

          <p>
            Aplicación desarrollada con Node.js y Express
            para realizar pruebas de despliegue en Heroku.
          </p>

          <p>
            <strong>Universidad de Guadalajara</strong>
          </p>
        </div>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Servidor funcionando en el puerto ${PORT}`);
});