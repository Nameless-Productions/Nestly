"use server";

import path from "path";
import { db } from "../db";
import fs from "fs/promises";

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