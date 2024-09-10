import { queryCreateUrl, queryFindUrl, queryFindCheckUrl } from "../mongodb/query.js";
import { compareHash, generateHash} from "../services/hashing.service.js";

export const shortenUrl = async(req, res) => {
    const {defaultUrl, code} = req.body
    
    try {
        const hash = await generateHash(code.trim() , 12 )
        const newUrl = await queryCreateUrl(defaultUrl, hash);
        res.status(201).json({newURL : `http://localhost:3000/${newUrl}`});
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

export const getUrl = async(req, res) => {
    const { newUrl } = req.params

    try {
        const url = await queryFindUrl(newUrl)
        res.redirect(url);
    } catch (error) {
        if (error.message == "URL don´t exist") {
            res.status(404).json({message: error.message});
        } else {
            res.status(500).json({error: error.message});
        }
    }
}

export const checkUrl = async (req, res) => {
    const {shortUrl, code} = req.body

    try {
        const url = await queryFindCheckUrl(shortUrl)
        const response = await compareHash(code, url.hash)
        if(!response) {
            res.status(401).json({message: "El codigo es invalido"});
            return
        }
        res.status(200).json({clicks: url.clicks});
    } catch (error) {
        if (error.message == "URL don´t exist") {
            res.status(404).json({manejado: "for me", message: error.message});
        } else {
            res.status(500).json({error: error.message});
        }
    }
}