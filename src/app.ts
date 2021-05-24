import express from "express";
import morgan from "morgan";
import cors from "cors";
import config from "./config";

import itemRoutes from "./routes/item.routes";

// configuration and app setup
const app = express();

app.set('port', config.PORT);

// Morgan shows in-real-time requests to the server
app.use(morgan('dev'));

// CORS allows cross origin requests (IE: from port 5000 to 3000)
app.use(cors());

// express tuning for json and request types
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(itemRoutes);

export default app;