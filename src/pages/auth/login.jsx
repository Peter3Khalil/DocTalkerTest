import React from 'react'
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
const schema = yup.object({
    email: yup.string().email("Invalid Email").required("Required"),
})

const Login = () => {
    const form =useForm({
        resolver:yupResolver(schema),
        mode:"onBlur"
    })
    const {register,control,handleSubmit,formState:{errors}}=form
const onSubmit = (data) => console.log(data);
  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}  className='w-full h-full justify-center flex flex-col items-center'>
        <input required type="email" className='border'  placeholder="Email" {...register("email",{
        })} />
        <p>{errors.email?.message}</p>
        <input type="text" className='border'  placeholder="name" {...register("name.firstName",{
            required:"name is required"  ,
            validate:{
                Blocked: value => value !== 'admin' || 'Nice try!',
                isNumber:value=>!isNaN(value)||'should be number'
            }   
        })} />
        <p>{errors.name?.message}</p>

        <input type="text" className='border'  placeholder="name" {...register("name.lastName",{
            required:"name is required"  ,
            validate:{
                Blocked: value => value !== 'admin' || 'Nice try!',
                isNumber:value=>!isNaN(value)||'should be number'
            }   
        })} />
        <p>{errors.name?.lastName?.message}</p>
        <button type="submit">Submit</button>
        <DevTool control={control}  />
    </form>
  )
}

export default Login