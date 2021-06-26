import React from 'react';

const Login = () => {
    return (
        <div className="login">
           <div className="container">
               <div className="row justify-content-md-center">
                   <div className="col col-lg-3">
                   <form className="center">
                        <div className="form-group">
                            <div className="input-group mb-3">
                                <input type="email" class="form-control" placeholder="Enter Email" aria-label="Email" aria-describedby="basic-addon1"></input>
                                </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group mb-3">
                                <input type="password" class="form-control" placeholder="Enter Password" aria-label="password" aria-describedby="basic-addon1"></input>
                                </div>
                        </div>
                        <button type="submit" class="btn btn-success">Login</button>
                   </form>
                   </div>
               </div>
           </div>
        </div>
    );
};

export default Login;