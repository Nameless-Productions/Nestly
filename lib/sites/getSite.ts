"use server";

import path from "path";
import { db } from "../db";
import fs from "fs/promises";

export async function getSite(id: number) {
    const site = await db.pages.findUnique({
        where: {
            id: id
        }
    });

    if(!site) return;

    const filePath = path.join(process.cwd(), "pages", String(id), "page.html");
    let file = await fs.readFile(filePath);
    const fileString = file.toString("utf8");
    return fileString;
}