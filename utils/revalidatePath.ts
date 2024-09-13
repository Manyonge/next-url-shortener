"use server"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function revalidateNextPath(path: string, canRedirect?: boolean ){
  revalidatePath(path)
  if(canRedirect)redirect(path)
}
