import bcrypt from "bcrypt";

export const generateHash = async (code, saltRounds) => {
   try {
    return bcrypt.hash(code, saltRounds)
    } catch(err){
        console.error(err.message)
        return "generateHash Error"
    }
}

export const compareHash = async (code, hash) => {
    try {
        return bcrypt.compare(code, hash)
    } catch (err) {
        console.error(err.message)
        return "compareHash Error"
    }
}