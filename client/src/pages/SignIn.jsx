import Logo from '../assets/logo-head.png';
import { useState } from "react";
import {AiFillEyeInvisible, AiFillEye} from "react-icons/ai";
import axios from 'axios';

export default function SignIn() {
    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        email:" ",
        password:" ",
        });

    const {email, password} = formData;

    //@Desc function that get the keyboard events on change
    // returns events
    function onChange(e){
        setFormData((prevState)=>({...prevState, [e.target.id]: e.target.value}));
    }

    //@desc Handles the form submission by making a POST request to the login endpoint.
    //@param {Event} event - The event object representing the form submission.
    //returns {void}

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/login', formData)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-[3em] " src={Logo} alt="logo"></img>
          Kamata    
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in
              </h1>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
                  <div>
                      
                      <input 
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition ease-in-out" 
                      placeholder="Email" 
                      required=""
                      type="email" 
                      name="email" 
                      id="email" 
                      value={email}
                      onChange={onChange}
                      />
                  </div>
                  <div className="relative py-2">
                      
                      <input 
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition ease-in-out" 
                      required=""
                      type={showPassword ? 'text' : 'password'} 
                      name="password" 
                      id="password" 
                      placeholder="Password" 
                      value={password}
                      onChange={onChange}
                      />

                      {showPassword ? (<AiFillEyeInvisible
                        className="absolute right-3 top-5 text-xl cursor-pointer"
                        onClick={()=>setShowPassword((prevState)=>!prevState)}/>
                        ) : (<AiFillEye
                        className="absolute right-3 top-5 text-xl cursor-pointer"
                        onClick={()=>setShowPassword((prevState)=>!prevState)}/>)} 
                    
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                          </div>
                          <div className="ml-3 text-sm">
                            <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                  <button type="submit" className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
  )
}
