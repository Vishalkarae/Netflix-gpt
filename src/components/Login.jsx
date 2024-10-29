import { useState } from "react"
import Header from "./Header"

const Login=()=>{
    const [isSignedIn,setIsSignedIn]=useState(true)

    const toggleSignedIN=()=>{
        setIsSignedIn(!isSignedIn)
    }
    return(
        <>
        <div>
            <Header/>
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_small.jpg"/>
            </div>

        </div>
       
        <form className=" absolute p-12 bg-black bg-opacity-75 w-3/12 my-32 mx-auto right-0 left-0 rounded-lg">
        <h1 className="text-white font-bold py-4 text-3xl">{isSignedIn ? "Sign In": "Sign Up"}</h1>
            

            {!isSignedIn && <input className="bg-gray-700 rounded-lg my-4 py-2 w-full" type="text" placeholder="Full name"/>}
           
                <input className="bg-gray-700 rounded-lg my-4 py-2 w-full" type="email" placeholder="Email or phone"/>
          
            
                <input  className="bg-gray-700 rounded-lg my-4 py-2 w-full" type="password" placeholder="password"/>
                {!isSignedIn && <input className="bg-gray-700 rounded-lg my-4 py-2 w-full" type="password" placeholder="Re-type password"/>}
          
         
                <button className="bg-red-700 text-white py-2 my-6 w-full rounded-lg" >{isSignedIn ? "Sign In": "Sign Up"}</button>
                <p className="my-3 text-white cursor-pointer" onClick={toggleSignedIN}>{isSignedIn ? "New to Netflix? Sign up now": "Already a user please sign In"}</p>
           
           
        </form>
        
       
        </>
    )
}
export default Login