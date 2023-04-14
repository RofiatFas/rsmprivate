import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../utils/axios'

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()
  const onFormSubmit = (e)=>{
    e.preventDefault()
    // console.log(email, password)
      axiosInstance.post(`/Account/token`,{email,password})
    .then(res => {
      // console.log(res)
      if (res.status===200){
        localStorage.setItem("token", res.data.token)
        navigate("/home")
      }else {
        alert("incorrect email and password")
      }
    })
    .catch(err  => console.log(err))
  }

  const onEmailInput = (e)=>{
   setEmail(e.target.value)
  }
  const onPasswordInput = (e)=>{
   setPassword(e.target.value)
  }
  return (
    <div>
      <nav className='bg-white fixed top color-1'>
       <p className='mx-4'>RSE Ship Manager</p>
      </nav>
    <div className='Login'>
        <div className='container bg-white w-50 h-60 rounded'>
            <div className='text-center my-3'>
            <h1 className='fs-3'>Login to Admin Portal</h1>
            <p className='fs-6'>Please login with your information</p>
            </div>
            <div>
             <form className='mx-4'  onSubmit={onFormSubmit}>
               <div className="mb-3">
                 <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Email address</label>
                 <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                 onChange={onEmailInput}
                 value={email}
                 autoComplete="email"
                 />
               </div>
               <div className="mb-3">
                 <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Password <span className='fw-light pwd'>Forgot Password?</span></label>
                 <input type="password" className="form-control" id="exampleInputPassword1"
                     onChange={onPasswordInput}
                     value={password}
                     autoComplete='current-password'
                 />
               </div>
               <div className="mb-3 form-check">
                 <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                 <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
               </div>
               <div className="d-grid gap-2 mb-3">
                 <button  className="btn btn-primary bg-1" type="submit"
          
                 >Sign In</button>
                </div>
                <p className='text-center'>Don’t have an account? Sign Up now</p>
             </form>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Login