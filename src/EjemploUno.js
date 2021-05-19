import React from "react";
import { useForm } from "react-hook-form";
import TextField from '@material-ui/core/TextField';

const Input = ({label, name, register, required,error,errMessage }) => (
  <>
    <label>{label}</label>
    <TextField
     variant="outlined" 
     style={{margin:'10px 0px'}} 
     {...register(name, { required })} 
     error={Boolean(error)}
     helperText={error && errMessage}
    />
  </>
);

const Select = React.forwardRef(({ onChange, onBlur, name, label }, ref) => (
  <>
    <label>{label}</label>
    <select  style={{margin:'10px 0px'}} name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
      <option value="20">20</option>
      <option value="30">30</option>
    </select>
  </>
));

export const EjemploUno = () => {
  const { register, handleSubmit,  formState:{errors },reset} = useForm();

  const onSubmit = (data,e) => {
      e.preventDefault();
      console.log(data);
    //   reset(data);
    reset()
  };

  return (
    <div style={{width:'100%', display:'flex', justifyContent: 'center'}}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
        <div style={{display:'flex', flexDirection:'column',}}>
        <h3>Formulario</h3>

        <Input label="First Name" name="firstName" register={register} required error={errors.firstName} errMessage="FirstName is reqired"/>
        {/* {errors.firstName && <span style={{color:'red'}} >The field is required</span>} */}

        <Input label="Last Name" name="lastName" register={register} required error={errors.lastName} errMessage="LastName is reqired"/>

        <Input label="Country" name="Country" register={register} required error={errors.Country} errMessage="FirstName is reqired"/>
        
        <Select label="Age" {...register("Age")} />

        <input type="submit" />

        </div>
        </form>
    </div>  
  );
};