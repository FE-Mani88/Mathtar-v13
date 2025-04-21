import { generateToken, verifyPassword } from "@/utils/auth";
import userModel from "../../../../../models/User";

export async function POST(req) {
    const requestBody = await req.json()

    const { phoneNumber, password } = requestBody

    if (phoneNumber.length < 11 || password?.length < 8) {
        return Response.json({ message: 'inputs value are not valid' }, { status: 400 })
    }

    const mainUser = await userModel.findOne({ phoneNumber })

    if (!mainUser) {
        return Response.json({ message: 'There is not any user with this phone number :(' }, { status: 404 })
    }

    const checkPassword = await verifyPassword(password, mainUser.password)

    if (!checkPassword) {
        return Response.json({ message: 'Phone Number or password is not valid' }, { status: 405 })
    }

    const token = await generateToken({
        username: mainUser.username,
        email: mainUser.email,
        phoneNumber: mainUser.phoneNumber
    })

    return Response.json({ message: 'User logged in successfully' }, {
        status: 201, headers: {
            'Set-Cookie': `token=${token};path=/;httpOnly:true`
        }
    })
}