"use server"
import '../../envConfig'
import { prisma } from "@/prisma/prismaClient"
import * as bcrypt from "bcrypt";

export async function signUp(data){
  try{
  const user = await prisma.users.findFirst({
    where: {
      email: data?.email
    }
  })
  if(user){
    throw new Error('a user with this account already exists')
  }
  const hash= await bcrypt.hash(data.password, 10)
  await prisma.users.create({data: {
    email: data.email,
    name: data.name,
    hash,

  } })

  }
  catch(error){
    console.log({error})
    throw error

  }
}
