"use client"
import { deleteLink } from "@/app/api/links/actions"
import { Button } from "@/components/ui"
import { useToast } from "@/hooks/use-toast"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
type DeleteButtonProps={
  id: number;
}
export function DeleteButton({ id }: DeleteButtonProps){
  const {toast} = useToast()
  const router = useRouter()
  const {mutate, isPending}=useMutation({
    mutationFn: ()=> deleteLink(id),
    onError: (error)=>toast({title: error.message, variant: 'destructive'}),
      onSuccess: ()=>{
        router.refresh()
      }
  })
 return (
   <Button onClick={()=> mutate()} className="text-[red]" > {`${isPending? 'Deleting...': 'Delete'}`} </Button>
 )
}
