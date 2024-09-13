"use client"
import { login } from '@/app/api/auth/actions';
import { Button, Checkbox, Input } from '@/components/ui';
import { useToast } from '@/hooks/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import { z, ZodType } from 'zod';
type LoginFormSchemaType={
  email: string;
  password: string;
}
const LoginFormSchema : ZodType<LoginFormSchemaType> = z.object({
  email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
  password: z
    .string()
    .min(8, { message: 'Be at least 8 characters long' })
    .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
    .regex(/[0-9]/, { message: 'Contain at least one number.' })
    .regex(/[^a-zA-Z0-9]/, {
      message: 'Contain at least one special character.',
    })
    .trim(),
})

export default function Login (){
  const router = useRouter()
const {register, handleSubmit, formState: {errors}}=useForm<LoginFormSchemaType>({resolver: zodResolver(LoginFormSchema)})
const {toast}= useToast()
const [showPassword, setShowPassword]= useState(false)
    const handleShowPassword = (checked: boolean) => {
    setShowPassword(checked)
}
  const { mutate, isPending }= useMutation({
    mutationFn: (data: LoginFormSchemaType)=> login(data) ,
    onSuccess: ()=>{
      toast({
        title: 'Logged in successfully'
      })
      router.push('/admin/my-links')
    },
    onError: (error)=>{
      toast({title: error.message, variant: 'destructive'})
    },
  })

  const onSubmit: SubmitHandler<LoginFormSchemaType> =  (data: LoginFormSchemaType) => {
mutate(data)
  }


  return(
  <form onSubmit={handleSubmit(onSubmit)} className='w-1/2 mx-auto mt-28' >
      <h5 className='text-center mb-5' >Login </h5>
<Input placeholder='Email' className='mb-5' {...register('email')} />
  {errors?.email && <p className='text-center text-error' > {errors.email.message} </p> }
<Input placeholder='Password' type={showPassword? 'text': 'password'}  className='mb-5' {...register('password')} />
{errors?.password && <p className='text-center text-error' > {errors.password.message} </p> }
  <label className='cursor-pointer' >
  <Checkbox className='mb-5 mr-2 border-white' onCheckedChange={handleShowPassword} />
      Show password
  </label>
  <Button disabled={isPending} type='submit' className={`block mx-auto ${isPending ? 'opacity-50' : ''} `} >{ isPending?'Logging in...': 'Login'}</Button>
</form>
  )
}
