import mongoose from "mongoose";

const UrlSchema = new mongoose.Schema({
    defaultUrl: {
        type: String,
        require: true,
    },
    hash: {
        type: String,
        require: true
    },
    urlShort: {
        type: String,
        require: true,
    },
    clicks: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now
    }
});

export const URL = mongoose.model("URL", UrlSchema);