import React from 'react'
import { useFormik } from 'formik'
import * as yup from "yup"

const Formikk = () => {
    let formik = useFormik({
        initialValues:{
           firstname:"",
           lastname:"",
           email:"",
           password:"" 
        },

        onSubmit:async(values)=>{
            console.log(values);
        },

        validationSchema:yup.object({
            firstname:yup.string().required("First name is required"),
            lastname:yup.string().required("Last name is required"),
            email:yup.string().email("Invalid email format").required("email is required"),
            password:yup.string().required("password is required").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,   "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special case character")
        })

    })

    // console.log(formik.values);
    // console.log(formik.errors);
    console.log(formik.touched);
    
    
  return (
    <div>
        <input type="text" placeholder='firstname'  name='firstname' onBlur={formik.handleBlur} onChange={formik.handleChange}/>
        {(formik.touched.firstname&&formik.errors.firstname)&&<small className='text-danger'>{formik.errors.firstname}</small>}
        <br /><br />
        <input type="text" placeholder='lastname'  name='lastname' onBlur={formik.handleBlur}  onChange={formik.handleChange}/>
        {(formik.touched.lastname&&formik.errors.lastname)&&<small className='text-danger'>{formik.errors.lastname}</small>}
        <br /><br />
        <input type="text" placeholder='email'  name='email' onBlur={formik.handleBlur}  onChange={formik.handleChange}/>
       {(formik.touched.email&&formik.errors.email)&& <small className='text-danger'>{formik.errors.email}</small>}
        <br /><br />
        <input type="text" placeholder='password'  name='password' onBlur={formik.handleBlur}  onChange={formik.handleChange}/>
        {(formik.touched.password&&formik.errors.password)&&<small className='text-danger'>{formik.errors.password}</small>}
        <br /><br />


        <button type='submit' onClick={formik.handleSubmit} className='btn btn-dark'>Submit</button>
    </div>
  )
}

export default Formikk