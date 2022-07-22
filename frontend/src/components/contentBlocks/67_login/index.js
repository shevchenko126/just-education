import './67_login.css'


const login = () => {

    const action_url = "#"
    const forgot_pass_url = "#"

    return (
        <div className="login_block">
            <div className='container login'>
            <div className="row justify-content-center">
                    <div className='headers_section'>
                        <h1>Login</h1>
                        <p>Home   /   Login</p>
                    </div>

                    {/* <div className='form_section'> */}
                        <h2>Log In to Your Skola Account!</h2>
                        <form action={action_url} method = "post" encType="multipart/form-data">
                            <div className="form-group">
                                    <label for="username">Username or Email</label>
                                    <input className="form-control" type='text' id="username" name="username" placeholder="creativelayers"></input>
                                    <label for="password">Password</label>
                                    <input className="form-control" type='password' id="password" name="password"></input>

                                    <div className='text_line'>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="remember" name="remember"/>
                                            <label class="form-check-label" for="remember">
                                                Remember me 
                                            </label>
                                        </div>

                                        <a href={forgot_pass_url}>
                                            <span className='forgot_pass'>
                                                <span className='forgot_grey'>Forgot</span> <span className='password_word'>Password</span>
                                            </span>
                                        </a>

                                    </div>
                                    
                                    <input className="form-control login__submit" type="submit" value="LOGIN"></input>
                                    <div className='login__signup'>Don't have an account? <span className="signup_text">Sign up</span></div>
                                </div>
                            </form>
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default login