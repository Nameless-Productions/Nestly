import { db } from "@/lib/db";
import { getSite } from "@/lib/sites/getSite";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }>}) {
    const {id} = await params;
    const page = await db.pages.findUnique({
        where: {
            id: Number(id)
        }
    });
    if(!page) return NextResponse.redirect(new URL("/sites", req.url), 302);

    const pageHtml = await getSite(page.id);
    if(!pageHtml) return NextResponse.redirect(new URL("/sites", req.url), 302);

    return new Response(pageHtml, {
        headers: {
            "Content-Type": "text/html"
        }
    })
}