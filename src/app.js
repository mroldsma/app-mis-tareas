import express from "express";
import { create } from "express-handlebars";
import path from "path";
import morgan from "morgan";
import indexRoutes from "./routes/index.routes.js";
const app = express();

// setting up __dirname
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// settings
app.set("views", path.join(__dirname, "views"));

// setting up handlebars
const hbs = create({
  extname: ".hbs",
  layoutsDir: path.join(app.get("views"), "layouts"),
  defaultLayout: "main",
});

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");

// middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({extended:false}))


// routes
app.use(indexRoutes);

export default app;
