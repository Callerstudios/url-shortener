import express from "express";
import urlRoutes from "./routes/url.routes";
import { initDatabase } from "./services/url.service";
import { html } from "./constants/html";

const app = express();


app.use(express.json());
app.use(express.static("src/public"));

app.get("/", (_, res) => {
  res.sendFile("index.html", {
    root: "src/public",
  });
});
app.use(urlRoutes);

async function start() {
    const PORT = process.env.ALWAYSDATA_HTTPD_PORT || 3000;
  try {
    await initDatabase();

    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

start();



