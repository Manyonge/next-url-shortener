// "use client"
// import { Button, Checkbox, Input } from '@/components/ui'
// import { getUsers } from '@/db/db'
// import { useToast } from '@/hooks/use-toast'
// import { SignUpFormData, SignupFormSchema } from '@/lib/definitions'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { useMutation } from '@tanstack/react-query'
// import { useState } from 'react'
// import { SubmitHandler, useForm } from 'react-hook-form'


// export default  function SignupForm() {
//   const users = await getUsers()
// console.log({users})
// const [showPassword, setShowPassword]= useState(false)
//     const {register, handleSubmit, formState: {errors}}=useForm<SignUpFormData>({resolver: zodResolver(SignupFormSchema)})
//     const handleShowPassword = (checked: boolean) => {
//     setShowPassword(checked)

// const {toast} = useToast()


//     const onSubmit: SubmitHandler<SignUpFormData> =  (data: SignUpFormData, event) => {
//         console.log({data, event});
//     }

//     return (
//         <form onSubmit={handleSubmit(onSubmit)} className='w-1/2 mx-auto mt-28' >
//             <h5 className='text-center mb-5' >Sign up </h5>
// <Input placeholder='Name' className='mb-5' {...register('name')} />
// {errors?.name && <p className='text-center text-error' > {errors.name.message} </p> }
// <Input placeholder='Email'  className='mb-5' {...register('email')} />
// {errors?.email && <p className='text-center text-error' > {errors.email.message} </p> }
// <Input placeholder='Password' type={showPassword? 'text': 'password'} className='mb-5' {...register('password')} />
// {errors?.password && <p className='text-center text-error' > {errors.password.message} </p> }
// <Input placeholder='Confirm Password' type={showPassword? 'text': 'password'} className='mb-5' {...register('confirmPassword')} />
// {errors?.confirmPassword && <p className='text-center text-error' > {errors.confirmPassword.message} </p> }
//             <label className='cursor-pointer' >
//             <Checkbox className='mb-5 mr-2 border-white' onCheckedChange={handleShowPassword} />
//                 Show passwords
//             </label>
//         </form>
//     )
// }
