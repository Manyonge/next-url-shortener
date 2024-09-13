"use server"
import '@/envConfig'
import { prisma } from "@/prisma/prismaClient"
import * as bcrypt from "bcrypt";
import { validate } from 'class-validator';
import { LoginDto } from './interfaces';
import { z } from 'zod';
import { LoginFormSchema } from './validation';
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

export async function login(data){
  try{
LoginFormSchema.parse(data)
    const user = await prisma.users.findFirst({
      where: {
        email: data.email
      }
    })
    if(!user){
      throw new Error('This account does not exist')
    }

    const passwordsMatch = await bcrypt.compare(data.password, user.hash)
console.log({passwordsMatch})
    if(!passwordsMatch){
      throw new Error('wrong password')
    }

    return {message: 'Login successful'}

  }catch(error){
    console.log(error)
    throw error
  }
}
