import { prisma } from "@/prisma/prismaClient";
import { redirect } from "next/navigation";

export default async function Page({params: {shortId}}){
  console.log({ shortId})
  const link = await prisma.links.findFirst({
    where: {
      shortId
    }
  })

  redirect(link?.url!)
}
