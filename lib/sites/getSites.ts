import { db } from "../db";

export async function getSites(ownerId: number) {
    const sites = await db.pages.findMany({
        where: {
            ownerId: ownerId
        }
    });
    return sites;
}