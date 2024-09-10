import express from "express";
import { config } from "dotenv";
import { conection } from "./mongodb/conection.js";
import { UrlRoutes } from "./routes/urlshort.js";
import cors from "cors";

config()

export const app = express();


const corsOptions = {
    credentials: true,
      origin: "http://127.0.0.1:5500",
      optionsSuccessStatus: 200
  };


app.use(cors(corsOptions))
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/", UrlRoutes);

conection();