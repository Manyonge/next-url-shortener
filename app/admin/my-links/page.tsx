import { CopyUrlButton } from "@/components/ui"
import { prisma } from "@/prisma/prismaClient"
export default async function MyLinks(){
  const links = await prisma.links.findMany()

  return(
    <>
      <h3 className="mb-5 text-center font-bold" >My Links</h3>
      <table>
        <thead>
      <tr>
        <th>#</th>
        <th> Shortened Url </th>
        <th> Original Url </th>
        </tr>
      </thead>
        <tbody>
          {
          links.map(({shortId, url, id}, index)=>(
            <tr key={id}>
              <td>{index+1}</td>
              <td><CopyUrlButton url={shortId} /></td>
              <td><CopyUrlButton url={url} /></td>
            </tr>
          ))
        }
      </tbody>
    </table>
    </>
  )
}
