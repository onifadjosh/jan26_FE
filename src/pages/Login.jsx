import React, { useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate()
    const [error, seterror] = useState("")
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false
    },
    validate: values => {
      const errors = {};
      
      if (!values.email) {
        errors.email = 'Email is required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      
      if (!values.password) {
        errors.password = 'Password is required';
      } else if (values.password.length < 6) {
        errors.password = 'Password must be at least 6 characters';
      }
      
      return errors;
    },
    onSubmit: async(values, {setSubmitting})=>{
        try {
            seterror(null)
            setSubmitting(true)
            console.log(values);

        const response = await axios.post('http://localhost:5009/api/v1/login', {
            email:formik.values.email,
            password:formik.values.password
        })

        if(response.status==200){
            alert(response.data.message)
            localStorage.setItem("token", response.data.token)
            navigate('/about')
        console.log(response.data);
        }else if(response.status==404){
            console.log(response.data.message);
            
        }else{
            console.log(response.data);
            
        }

    
        

       
        } catch (error) {

            console.log(error);
            alert("User login error, try again")
            
        }
        
        
    }
  });

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow">
            <div className="card-body p-4">
              <h2 className="text-center mb-4">Login</h2>
              
              <form onSubmit={formik.handleSubmit}>
                {/* Email Field */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={`form-control ${
                      formik.touched.email && formik.errors.email ? 'is-invalid' : ''
                    }`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    placeholder="Enter your email"
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className="invalid-feedback">{formik.errors.email}</div>
                  )}
                </div>

                {/* Password Field */}
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className={`form-control ${
                      formik.touched.password && formik.errors.password ? 'is-invalid' : ''
                    }`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    placeholder="Enter your password"
                  />
                  {formik.touched.password && formik.errors.password && (
                    <div className="invalid-feedback">{formik.errors.password}</div>
                  )}
                </div>

                {/* Remember Me Checkbox */}
                <div className="mb-3 form-check">
                  <input
                    id="rememberMe"
                    name="rememberMe"
                    type="checkbox"
                    className="form-check-input"
                    onChange={formik.handleChange}
                    checked={formik.values.rememberMe}
                  />
                  <label htmlFor="rememberMe" className="form-check-label">
                    Remember me
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  disabled={formik.isSubmitting}
                >
                  {formik.isSubmitting ? 'Logging in...' : 'Login'}
                </button>
              </form>

              {/* Additional Links */}
              <div className="text-center mt-3">
                <a href="#" className="text-decoration-none">Forgot Password?</a>
                <br />
                <a href="#" className="text-decoration-none">Create New Account</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;