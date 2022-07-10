import './68_register.css'


const register = () => {

    const action_url = "#"

    return (
        <div className="register_block container">
            <div className="row justify-content-center">
                <div className='col-6'>
                    <div className='headers_section'>
                        <h1>Register</h1>
                        <p>Home   /   Register </p>
                    </div>

                    <div className='form_section'>
                        <h2>Sign Up and Start Learning!</h2>
                        <form action={action_url} method = "post" encType="multipart/form-data">
                            <div className="form-group">
                                    <label for="username">Username</label>
                                    <input className="form-control" type='text' id="username" name="username" placeholder="creativelayers"></input>
                                    <label for="email">Email</label>
                                    <input className="form-control" type='email' id="email" name="email"></input>
                                    <label for="password">Password</label>
                                    <input className="form-control" type='password' id="password" name="password"></input>
                                    <input className="form-control register__submit" type="submit" value="SIGN UP"></input>
                                    <div className='register__already'>Already have an account? <span className="log_in_text">Log In</span></div>
                                </div>
                            </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default register