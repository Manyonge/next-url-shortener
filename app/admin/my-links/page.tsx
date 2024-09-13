import { CopyUrlButton } from "@/components/ui"
import { DeleteButton } from "@/components/ui/DeleteButton"
import { prisma } from "@/prisma/prismaClient"

export default async function MyLinks(){
  const links = await prisma.links.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })
  return(
    <>
      <h3 className="mb-5 text-center font-bold" >My Links</h3>
      <table>
        <thead>
      <tr>
        <th>#</th>
        <th> Shortened Url </th>
        <th> Original Url </th>
        <th> Delete </th>
        </tr>
      </thead>
        <tbody>
          {
          links.map(({shortId, url, id}, index)=>(
            <tr key={id} className="" >
              <td>{index+1}</td>
              <td><CopyUrlButton url={shortId} /></td>
              <td><CopyUrlButton url={url} /></td>
                <td><DeleteButton id={id}/> </td>
            </tr>
          ))
        }
      </tbody>
    </table>
    </>
  )
}
