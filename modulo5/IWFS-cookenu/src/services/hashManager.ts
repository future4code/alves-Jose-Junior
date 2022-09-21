import {hashSync, compareSync, genSaltSync} from "bcryptjs"
import dotenv from "dotenv"

dotenv.config()

export const generateHans = (
    plainText: string
): string => {
    const rounds: number = Number(process.env.BCRYPT_COST)
    const salt: string = genSaltSync(rounds)
    return hashSync(plainText, salt)
}


export const compareHash = (
    plainText:string,
    cypherText: string
): boolean => compareSync(plainText, cypherText)