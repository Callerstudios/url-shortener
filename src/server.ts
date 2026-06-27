import express from "express";
import urlRoutes from "./routes/url.routes";

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(urlRoutes);
    

app.listen(process.env.ALWAYSDATA_HTTPD_PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
