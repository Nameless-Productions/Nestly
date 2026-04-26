"use server";

import path from "path";
import { db } from "../db";
import fs from "fs/promises";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function createSite(ownerId: number, title: string, html: Buffer) {
    const htmlStr = html.toString("utf8")
    if(!htmlStr.startsWith("<!DOCTYPE html")) return;

    const page = await db.pages.create({
        data: {
            ownerId: ownerId,
            title: title
        }
    });

    const pagePath = path.join(process.cwd(), "pages", String(page.id));
    await fs.mkdir(pagePath, {recursive: true});
    const htmlPath = path.join(pagePath, "page.html");
    await fs.writeFile(htmlPath, html)
}

export async function createSiteForm(formData: FormData) {
    const title = formData.get("title") as null | string;
    const htmlFile = formData.get("html") as null | File;

    if(!title || !htmlFile) return;

    const htmlBuffer = Buffer.from(await htmlFile.arrayBuffer())
    
    const username = (await headers()).get("x-username");
    if(!username) return redirect("/login");
    const user = await db.users.findUnique({
        where: {
            username: username
        }
    })

    await createSite(user?.id!, title, htmlBuffer);
}