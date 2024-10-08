// src/app/lib/dal.js 
// this code is used to verify the session cookie and redirect the user to the login page if the session is invalid
import 'server-only' 
import { cookies } from 'next/headers'
import { decrypt } from '@/app/lib/session'
 
export const verifySession = cache(async () => {
  const cookie = cookies().get('session').value
  const session = await decrypt(cookie)
 
  if (!session.userId) {
    redirect('/login')
  }
 
  return { isAuth: true, userId: session.userId }
})