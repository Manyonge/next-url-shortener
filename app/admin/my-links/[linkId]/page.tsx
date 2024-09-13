import { findOneLink } from "@/app/api/links/actions"

export default async   function ShortenedLink({params: {linkId}}){

 await findOneLink(linkId)
}
