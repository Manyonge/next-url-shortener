"use server"
import { generateRandomString } from "@/Helper"
import { prisma } from "@/prisma/prismaClient"
import { redirect } from "next/navigation"

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

export async function findOneLink(shortId){
  try{
    const link= await prisma.links.findUnique({
      where: {
        shortId
      }
    })
    redirect( link?.url)
  }
  catch(e){
    throw e
  }
}
