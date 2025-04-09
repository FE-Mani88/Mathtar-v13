import { generateToken, hashPasswordHandler } from "@/utils/auth"
import userModel from "../../../../../models/User"
import connectToDB from "../../../../../configs/connectToDB"

export async function POST(req) {
    const reqBody = await req.json()

    await connectToDB()

    if (reqBody.username.trim().length < 4 || reqBody.email.trim().length < 10 || reqBody.phoneNumber.trim().length < 8 || reqBody.password.trim().length < 8) {
        return Response.json({ message: 'Sent data is not valid :(' }, { status: 400 })
    }

    try {
        const hashedPassword = hashPasswordHandler(reqBody.password)

        const token = generateToken({
            username: reqBody.username,
            email: reqBody.email,
            phoneNumber: reqBody.phoneNumber
        })

        await userModel.create({
            username: reqBody.username,
            email: reqBody.email,
            phoneNumber: reqBody.phoneNumber,
            password: hashedPassword
        })

        return Response.json({
            message: 'User Created Successfully :)'
        }, { status: 201 })

    } catch (error) {
        console.log(error)
        return Response.json({ message: 'Unexpected Server Error :(' }, { status: 500 })
    }

}