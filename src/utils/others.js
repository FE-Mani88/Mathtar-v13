import { cookies } from "next/headers"

export async function GetCookies () {
    const allCookies = cookies()

    const userToken = (await allCookies)?.get('token')?.value

    return userToken
}