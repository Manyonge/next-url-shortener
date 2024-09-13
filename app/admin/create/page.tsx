"use client"
import { createLink } from '@/app/api/links/actions';
import { Button, Input } from '@/components/ui';
import { useToast } from '@/hooks/use-toast';
import { revalidateNextPath } from '@/utils/revalidatePath';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from "react-hook-form";
import { z, ZodType } from 'zod';
type LinkSchemaType={
  link: string;
}
const LinkSchema : ZodType<LinkSchemaType> = z.object({
  link: z
    .string()
    .min(8, { message: 'Be at least 8 characters long' })
    .regex(/^https:\/\/[a-z0-9.-]+\.[a-z]{2,4}\/?/, { message: 'Should be a valid https link.' })
    .trim(),
})

export default function CreateLink (){
const {register, handleSubmit, formState: {errors}}=useForm<LinkSchemaType>({resolver: zodResolver(LinkSchema)})
const {toast}= useToast()
const router = useRouter()

  const { mutate, isPending }= useMutation({
    mutationFn: (data: LinkSchemaType)=> createLink(data) ,
    onSuccess: ()=>{
      toast({
        title: 'Link Shortened Successfully'
      })
      const path = '/admin/my-links'
      revalidateNextPath(path, true)
    },
    onError: (error)=>{
      toast({title: error.message, variant: 'destructive'})
    },
  })

  const onSubmit: SubmitHandler<LinkSchemaType> =  (data: LinkSchemaType, event) => {
      console.log({data, event});

mutate(data)
  }


  return(
  <form onSubmit={handleSubmit(onSubmit)} className='w-1/2 mx-auto mt-28' >
      <h5 className='text-center mb-5' >Paste The Link You Would Like to Shorten </h5>
<Input placeholder='Link' className='mb-5' {...register('link')} />
  {errors?.link && <p className='text-center text-error' > {errors.link.message} </p> }

  <Button disabled={isPending} type='submit' className={`block mx-auto ${isPending ? 'opacity-50' : ''} `} >{ isPending?'Shortening...': 'Shorten'}</Button>
</form>
  )
}
