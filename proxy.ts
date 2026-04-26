import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./lib/jwt";

export default async function Proxy(req: NextRequest) {
    const pathname = req.nextUrl.pathname

    if(
        pathname.startsWith("/dashboard")
    ) {
        const cookieStore = await cookies();
        const token = cookieStore.get("token")?.value;
        
        if(!token) return NextResponse.redirect(new URL("/login", req.url), 302);

        const userInfo = await verifyToken(token);
        if(!userInfo.uid || !userInfo.username) return NextResponse.redirect(new URL("/login", req.url), 302);

        const res = NextResponse.next();
        res.headers.set("x-username", userInfo.username)
        return res;
    }

    return NextResponse.next();
}