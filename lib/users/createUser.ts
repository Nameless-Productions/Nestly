"use server";

import { redirect } from "next/navigation";
import { db } from "../db";
import bcrypt from "bcrypt"

export async function createUser(username: string, email: string, password: string): Promise<boolean> {
    if(await db.users.findUnique({where: {email}})) return false;
    if(await db.users.findUnique({where: {username}})) return false;

    await db.users.create({
        data: {
            username: username,
            password: await bcrypt.hash(password, 10),
            email: email,
            emailVerifyCode: String(Math.floor(Math.random() * 100000))
        }
    })

    return true    
}

export async function createUserForm(formData: FormData) {
    const username = formData.get("username") as string | null;
    const email = formData.get("email") as string | null;
    const password = formData.get("password") as string | null;

    if(
        !username ||
        !email ||
        !password
    ) return redirect("/register?error=Missing username, password or email");

    const res = await createUser(username, email, password)

    if(res) return redirect("/login");
    return redirect("/register?error=User with that email/username already exists")
}