const Login=()=>{
    return(
        <form className="text-center bg-zinc-800 w-6/12 m-auto">
            <label className="text-white text-2xl font-bold">Sign In</label>
            <div className="mb-4">
                <input className="bg-slate-600 rounded-lg" type="email" placeholder="Email or phone"/>
            </div>
            <div>
                <input  className="bg-slate-600 rounded-lg" type="password" placeholder="password"/>
            </div>
            <div>
                <button className="bg-rose-700 text-white p-2 m-2 w-44 rounded-lg">Sign In</button>
            </div>
        </form>
    )
}
export default Login