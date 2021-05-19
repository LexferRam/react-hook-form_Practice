import React from "react";
import { useForm } from "react-hook-form";
import TextField from '@material-ui/core/TextField';
import { MenuItem } from "@material-ui/core";

const Input = ({label, name, register, required,error,errMessage, multiline }) => (
  <>
    <label>{label}</label>
    <TextField
     multiline={multiline}
     rows={3}
     variant="outlined" 
     style={{margin:'10px 0px'}} 
     {...register(name, { required })} 
     error={Boolean(error)}
     helperText={error && errMessage}
    />
  </>
);

const Select = React.forwardRef(({ onChange, name, label }, ref) => (
  <>
    <label>{label}</label>
    <TextField select variant="outlined" style={{margin:'10px 0px'}}  name={name} ref={ref} onChange={onChange}>
      <MenuItem key={20} value="20">20</MenuItem >
      <MenuItem key={30} value="30">30</MenuItem >
    </TextField>
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
       
        <Input multiline  label="Address" name="address" register={register} required error={errors.address} errMessage="Address is reqired"/>
        
        <Select label="Age" {...register("Age")}/>

        <input type="submit" />

        </div>
        </form>
    </div>  
  );
};