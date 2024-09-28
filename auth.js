//src/actions/auth.js
// this code is used to create a session cookie when a user logs in
"use server"
import {createSession} from '@/app/lib/session'

export async function login(formData) {
    const name = formData.get('name')
    await createSession(name);
}