"use client"
import { Checkbox, Input } from '@/components/ui'
import { useState } from 'react'

export default function SignupForm() {
const [showPassword, setShowPassword]= useState(false)

    const handleShowPassword = (checked: boolean) => {
    setShowPassword(checked)
}

    return (
        <form className='w-1/2 mx-auto mt-28' >
            <h5 className='text-center mb-5' >Sign up </h5>
<Input placeholder='Name' className='mb-5' id='name' name='name' />
<Input placeholder='Email'  className='mb-5' id='email' name='email' />
<Input placeholder='Password' type={showPassword? 'text': 'password'} className='mb-5' id='password' name='password' />
<Input placeholder='Confirm Password' type={showPassword? 'text': 'password'} className='mb-5' id='confirm-password' name='confirm-password' />
            <label>
            <Checkbox className='mb-5 mr-2 border-white' onCheckedChange={handleShowPassword} />
                Show passwords
            </label>
        </form>
    )
}