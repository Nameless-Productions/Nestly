"use server"

import jwt from "jsonwebtoken"


export async function createToken(data: {uid: number, username: string}) {
    return jwt.sign(data, process.env.SECRET!)
}

export async function verifyToken(token: string): Promise<{uid?: number, username?:string}> {
    const res = jwt.verify(token, process.env.SECRET!) as any
    return res
}