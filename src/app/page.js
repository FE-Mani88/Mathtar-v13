import Navbar from '@/components/modules/Navbar/Navbar';
import Main from "@/components/templates/Index/Main/Main";
import { verifyToken } from '@/utils/auth';
import { cookies } from 'next/headers';
import userModel from '../../models/User';
import connectToDB from '../../configs/connectToDB';

export default async function Home() {

  let isUserRegistered = null

  const configCookies = await cookies()

  const token = configCookies.get('token')

  let tokenPayloadGlobal = null

  if (token) {
    const tokenPayload = await verifyToken(token.value)

    if (!tokenPayload) {
      isUserRegistered = false
      console.log('NOPE')
    } else {
      isUserRegistered = true
      console.log('True YUP')
      tokenPayloadGlobal = tokenPayload
    }
  }

  // console.log("tokenPayloadGlobal => ", tokenPayloadGlobal)

  connectToDB()

  const mainUser = await userModel.findOne({ phoneNumber: tokenPayloadGlobal?.phoneNumber })

  return (
    <div>
      <Navbar isUserRegistered={isUserRegistered} mainUser={JSON.parse(JSON.stringify(mainUser))} />
      <Main />
    </div>
  );
}
