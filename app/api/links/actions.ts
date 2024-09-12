"use server"
import { generateRandomString } from "@/Helper"
import { prisma } from "@/prisma/prismaClient"

export async function createLink (data){
  try{
    //find if link already exists in db
    const link = await prisma.links.findFirst({
      where: {
        url: data?.link
      }
    })
    if(link){
      throw new Error('This link has already been shortened')
    }
    //if not, create create 8 digit id for link

const shortId = generateRandomString()

    //store in db
await prisma.links.create({
  data: {
    shortId,
    url: data?.link
  }
})
  }
  catch(error){
    throw error
  }
}
