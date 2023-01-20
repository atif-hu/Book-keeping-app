import './login.css'
function Login() {
  return (
    <div className='loginContainer'>
      <div className="logo" >Book-keeping-app</div>
      <form >
          <input type="email" placeholder='username'/>
          <input type="password" placeholder='password'/>
          <button className='loginBtn'>Login</button>
      </form>
    </div>
  )
}

export default Login