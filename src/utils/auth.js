import { hashSync } from "bcryptjs";
import { sign } from 'jsonwebtoken'

export const hashPasswordHandler = (password) => {

    const hashedPassword = hashSync(password)

    return hashedPassword
}

export const generateToken = async (data) => {
    const token = sign({ ...data }, process.env.PRIVATE_KEY, {
        expiresIn: '480h'
    })

    return token
}