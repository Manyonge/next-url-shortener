"use client"

import { useToast } from "@/hooks/use-toast";
import { Button } from "./button";
type Props = {
  url: string;
}
export function CopyUrlButton({url}: Props){
  const host = window.location.host
  const newUrl = `${host}/${url}`
  const {toast }=useToast()
const onClick=()=>{
  navigator.clipboard.writeText(newUrl)
  toast({
    title: `${newUrl} copied to clipboard`,
    duration: 1000
  })
}
  return(
    <Button onClick={onClick} >{newUrl}</Button>
  )
}
