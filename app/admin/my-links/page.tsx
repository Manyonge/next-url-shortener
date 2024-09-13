import { prisma } from "@/prisma/prismaClient"
import Link from "next/link"
export default async function MyLinks(){
  const links = await prisma.links.findMany()
  console.log({links})
  return(
    <>
    {links?.map((link)=>(
      <Link key={link?.id} href={link?.url}>
        <p>{link?.url}</p>
      </Link>
    ))}
    </>
  )
}
