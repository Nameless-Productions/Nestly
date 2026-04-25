"use server";

import { redirect } from "next/navigation";
import { db } from "../db";
import bcrypt from "bcrypt"
import { createToken } from "../jwt";
import { cookies } from "next/headers";

export async function loginForm(formData: FormData) {
    const username = formData.get("username") as string | null;
    const password = formData.get("password") as string | null;
    if(!username || !password) return redirect("/login?error=Missing username or password")

    const user = await db.users.findUnique({
        where: {
            username: username
        }
    })

    if(!user) return redirect("/login?error=Invalid credentials");

    const passwCheck = await bcrypt.compare(password, user.password)
    if(!passwCheck) return redirect("/login?error=Invalid credentials");

    const token = await createToken({uid: user.id, username: user.username});
    const cookieStore = await cookies();
    cookieStore.set("token", token, {
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 30,
        httpOnly: true,
        path: "/"
    })

    redirect("/dashboard")
}