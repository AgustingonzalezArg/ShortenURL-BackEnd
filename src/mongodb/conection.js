import mongoose from "mongoose";

const url = "mongodb://localhost:27017/ShorterURL´s";

export const conection = async () => {
    const res = await mongoose.connect(url)

    console.log("conectado");
}