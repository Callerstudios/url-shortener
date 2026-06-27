import express from "express";
import urlRoutes from "./routes/url.routes";

const app = express();

const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>URL Shortener</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: Arial, sans-serif;
          background: linear-gradient(135deg, #4f46e5, #9333ea);
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }

        .card {
          text-align: center;
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(12px);
          padding: 40px;
          border-radius: 16px;
          max-width: 600px;
        }

        h1 {
          font-size: 3rem;
          margin-bottom: 20px;
        }

        p {
          font-size: 1.2rem;
          margin-bottom: 25px;
          line-height: 1.6;
        }

        a {
          display: inline-block;
          padding: 12px 24px;
          text-decoration: none;
          background: white;
          color: #4f46e5;
          border-radius: 8px;
          font-weight: bold;
        }

        a:hover {
          background: #f3f3f3;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>🔗 URL Shortener API</h1>
        <p>
          Welcome! This is the backend for my URL Shortener project.
          Create, manage and redirect short links through the API.
        </p>

        <a href="https://github.com/yourusername/url-shortener">
          View Source
        </a>
      </div>
    </body>
    </html>
  `;
app.use(express.json());
app.get("/", (req, res) => {
  res.send(html);
});
app.use(urlRoutes);


const PORT = process.env.ALWAYSDATA_HTTPD_PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});




