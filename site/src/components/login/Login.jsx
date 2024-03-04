import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState();
  const [password , setPassword] = useState()

const navigate=useNavigate()
  const  handleSubmit = (e) =>{

    axios.post('http://localhost:4001/user/login', {email: email, password: password }).then((res) => {
      console.log(res.data)
     
      
      if(res.data.status === "success") {
          localStorage.setItem("token", res.data.token);
          
        // props.setIsLogin(true)
       
        navigate("/dashboard")
      } else {
          alert("not logged in")
      }
       
  })


   
  }
  return (
    <>
      <div className="container">
            <div className="col">
                        <h1 className="text-center">Welcome Back Home</h1>
                        
                        <form onSubmit={e => e.preventDefault()} className="mt-5 mx-5">
                         
                            <div className="form-group mb-4">
                                <label htmlFor="emial">Business Email</label>
                                <input
                                    type="text"
                                    className="form-control mt-1"
                                    id="emial"
                                    placeholder="Enter your business email"
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    className="form-control mt-1"
                                    id="password"
                                    placeholder="Enter your password"
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </div>
                            <button onClick={handleSubmit} type="submit" className="btn btn-primary w-50 d-block text-center mx-auto">
                               Login
                            </button>
                        </form>

                        {/* <div className="d-flex justify-content-center mt-3">
                            <hr className="w-25 me-1" /><span>Or SignUp with</span><hr className="w-25 ms-1" />
                        </div>
                        <div className="d-flex justify-content-center gap-3">
                            <button className="btn btn-primary"><a href="https://www.linkedin.com/" className="text-white">Linkedin</a></button>
                            <button className="btn btn-danger"><a href="https://www.google.com/" className="text-white">Google</a>  </button>
                            <button className="btn btn-primary"><a href="https://www.facebook.com/" className="text-white">Facebook</a></button>

                        </div>
                        <span className="text-center d-block my-2">Don't have an account?<Link to='/signup'> Sign Up</Link></span>
                        < span className="text-center d-block mt-3">by signup to <a href="#"><span className="text-danger">agree</span></a> to out <a href="#"><span className="text-danger">terms of use</span></a> and <a href="#"><span className="text-danger">privacy</span></a></span> */}


                    </div>
        </div>

    </>
  )
}

export default Login