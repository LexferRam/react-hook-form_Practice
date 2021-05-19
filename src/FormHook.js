import React from 'react'
import {useForm} from 'react-hook-form';

export const FormHook = () => {
    const {register, handleSubmit, formState:{errors }} =useForm()

    const onSubmit = (data, e ) => {
        console.log(data);
        e.target.reset();
    }
    return (
        <div style={{width:300, display:'flex', justifyContent: 'center'}}>
        <form onSubmit={handleSubmit(onSubmit)}>
                <div style={{display:'flex', flexDirection:'column'}}>
            <h3>Formulario</h3>

            <input name="titulo" placeholder="Title" {...register("titulo", {required:true})} />
            <span style={{color:'red'}}>
                {errors.titulo && <span>The title is required</span>}
            </span>

            <input name="name" placeholder="Name" {...register("name", {required:true})} />
            <span style={{color:'red'}}>
                {errors.name && <span>The name is required</span>}
            </span>
            
            <select {...register("gender")}>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
            </select>
            <span style={{color:'red'}}>
                {errors.gender && <span>The name is required</span>}
            </span>

            <button>Enviar</button>
        </div>
            </form>
            </div>
    )
}
