import shortid from "shortid";
import { URL } from "./models/urlShema.js";

export const queryCreateUrl = async (defaultUrl, hash) => {

    const url = await URL.create({
        defaultUrl,
        hash,
        urlShort: shortid.generate()
    })

    return url.urlShort
}

export const queryFindUrl = async (newUrl) => {

    const url = await URL.findOne({urlShort: newUrl});
    if (url) {
        url.clicks++
        url.save()
        return url.defaultUrl
    } else {
        throw new Error("URL don´t exist");
    }
}

export const queryFindCheckUrl = async (urlShort) => {
    const url = await URL.findOne({urlShort});
    if (url) {
        console.log(url.hash, url.clicks, "Superado")
        return url
    } else {
        throw new Error("URL don´t exist");
    }
}