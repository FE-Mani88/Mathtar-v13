import Navbar from '@/components/modules/Navbar/Navbar';
import Main from "@/components/templates/Index/Main/Main";
import { verifyToken } from '@/utils/auth';
import { cookies } from 'next/headers';

export default async function Home() {

  let isUserRegistered = null

  const configCookies = await cookies()

  const token = configCookies.get('token')

  if (token) {
    const tokenPayload = await verifyToken(token.value)
    
    if (!tokenPayload) {
      isUserRegistered = false
      console.log('NOPE')
    } else {
      isUserRegistered = true
      console.log('True YUP')
    }
  }

  return (
    <>
      <Navbar isUserRegistered={isUserRegistered} />
      <Main />
    </>
  );
}
